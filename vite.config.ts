import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { defineConfig, Plugin } from 'vite';

dotenv.config();

function emojiSearchApiPlugin(): Plugin {
  return {
    name: 'emoji-search-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/health' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ status: 'ok', hasKey: Boolean(process.env.GEMINI_API_KEY) }));
          return;
        }

        if (req.url === '/api/search' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              const { query, filterType = 'all' } = JSON.parse(body || '{}');
              if (!query) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Query required' }));
                return;
              }

              const apiKey = process.env.GEMINI_API_KEY;
              if (!apiKey) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ results: [], source: 'fallback' }));
                return;
              }

              const ai = new GoogleGenAI({ apiKey });

              let typeConstraint = '';
              if (filterType === 'emoji') {
                typeConstraint = '반드시 실제 유니코드 이모지만 5개 추천하세요. (특수문자나 괄호 제외, 예: ☀️, 🏖️, 🌴, 🍉, 🐹)';
              } else if (filterType === 'symbol') {
                typeConstraint = '반드시 특수문자, 괄호, 화살표, 별, 기호만 5개 추천하세요. (이모지 제외, 예: 【 】, 「 」, ➔, ✦, ✓, ±, ☼)';
              } else {
                typeConstraint = '검색어의 의도에 가장 알맞은 이모지 또는 특수문자를 종합하여 5개 추천하세요.';
              }

              const prompt = `당신은 상황과 감정에 꼭 맞는 이모지와 특수문자를 찾아주는 AI 추천기입니다.
사용자 검색어: "${query.trim()}"
선택된 모드: ${filterType}

[필수 규칙]
1. 절대로 아스키/텍스트 조합형 이모티콘(예: 텍스트 카오모지, (T_T) 등)은 추천하지 마세요! 절대 금지입니다.
2. ${typeConstraint}
3. [추상적 표현 연상 규칙] 사용자가 '여름', '퇴근', '휴식', '스트레스', '월요일', '합격', '비밀', '성공', '설렘', '사랑', '돈', '선물' 같은 추상적이거나 감정적인 표현을 입력한 경우, 단순한 글자 일치가 아니라 그 상황에서 연상되는 분위기, 사물, 행동, 상징물을 깊이 고민하여 가장 찰떡인 것 5개를 순서대로 선별하세요.
   - 예: '여름' -> ☀️(타오르는 태양), 🏖️(해변/휴양지), 🌴(야자수), 🍉(수박), 🍦(아이스크림)
   - 예: '퇴근' -> 🏃💨(칼퇴/탈출), 🍻(시원한 맥주), 🏠(집으로), 🛌(침대 휴식), 🎉(자유)
   - 예: '공지' (특수문자) -> 【 】(검은 깃발 괄호), 📌(압정/고정), ➔(굵은 화살표), ↳(답글 화살표), ✦(포인트 별)
   - 예: '동물'/'햄스터' -> 🐹(햄스터), 🐾(발자국), 🧀(치즈), 🌻(해바라기씨), 🐭(쥐)

반드시 정확히 5개의 항목을 담은 JSON 배열 형식으로만 응답하세요:
[
  {
    "id": "1",
    "character": "☀️",
    "name": "타오르는 태양",
    "description": "뜨거운 햇살과 한여름 날씨",
    "category": "여름/날씨",
    "type": "emoji"
  }
]`;

              const aiPromise = (async () => {
                try {
                  const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: prompt,
                    config: { responseMimeType: 'application/json' },
                  });
                  return response.text;
                } catch {
                  try {
                    const response = await ai.models.generateContent({
                      model: 'gemini-3.5-flash-lite',
                      contents: prompt,
                      config: { responseMimeType: 'application/json' },
                    });
                    return response.text;
                  } catch {
                    const response = await ai.models.generateContent({
                      model: 'gemini-3.7-flash',
                      contents: prompt,
                      config: { responseMimeType: 'application/json' },
                    });
                    return response.text;
                  }
                }
              })();

              const timeoutPromise = new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('AI timeout')), 4000)
              );

              const text = (await Promise.race([aiPromise, timeoutPromise])) as string;
              const results = JSON.parse(text || '[]');

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ results: Array.isArray(results) ? results.slice(0, 5) : [], source: 'ai' }));
            } catch (err: any) {
              console.warn('API error/timeout, fallback to local:', err?.message);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ results: [], source: 'fallback' }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

// LINT.IfChange(aistudio_media_plugin)
function aistudioMediaPlugin(): Plugin {
  return {
    name: 'vite-plugin-aistudio-media',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/assets/aistudio/')) {
          const rawPath = req.url.split('?')[0].split('#')[0];
          try {
            const decodedPath = decodeURIComponent(rawPath);
            const relativePath = decodedPath.replace(/^\//, '');
            const aistudioDir = path.resolve(
              __dirname,
              'public',
              'assets',
              'aistudio',
            );
            const filePath = path.resolve(__dirname, 'public', relativePath);
            if (
              filePath.startsWith(aistudioDir + path.sep) &&
              fs.existsSync(filePath) &&
              fs.statSync(filePath).isFile()
            ) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeMap: Record<string, string> = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.bmp': 'image/bmp',
                '.ico': 'image/x-icon',
                '.mp4': 'video/mp4',
                '.webm': 'video/webm',
                '.ogv': 'video/ogg',
                '.mp3': 'audio/mpeg',
                '.wav': 'audio/wav',
                '.ogg': 'audio/ogg',
                '.pdf': 'application/pdf',
              };
              res.setHeader(
                'Content-Type',
                mimeMap[ext] || 'application/octet-stream',
              );
              res.setHeader('Cache-Control', 'no-cache');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          } catch {
            // Fall through if URI decoding or file access fails
          }
        }
        next();
      });
    },
  };
}
// LINT.ThenChange(//depot/google3/java/com/google/alkali/boq/makersuite/applet_dev_service/templates/initializers/react_theme/vite.config.ts:aistudio_media_plugin)

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), emojiSearchApiPlugin(), aistudioMediaPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
