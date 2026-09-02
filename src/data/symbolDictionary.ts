import { SymbolItem, FilterType } from '../types';

export const COMPREHENSIVE_SYMBOLS: SymbolItem[] = [
  // === 특수문자 / 기호: 괄호 (Brackets) ===
  {
    id: 'b-lenticular-black',
    character: '【 】',
    name: '검은 깃발 괄호',
    description: '공지사항, 유튜브 제목, 본문 핵심 키워드 강조용 굵은 괄호',
    category: '괄호',
    type: 'symbol',
    pair: '【】',
    tags: ['괄호', '대괄호', '강조', '공지', '제목', '굵은괄호', '유튜브', 'bracket', 'black']
  },
  {
    id: 'b-corner-single',
    character: '「 」',
    name: '홑낫표',
    description: '책 제목, 중요한 대화 인용, 단어 강조에 쓰이는 정갈한 괄호',
    category: '괄호',
    type: 'symbol',
    pair: '「」',
    tags: ['괄호', '홑낫표', '낫표', '인용', '따옴표', '책', '제목', '대화', '일본식']
  },
  {
    id: 'b-corner-double',
    character: '『 』',
    name: '겹낫표',
    description: '작품명, 정기간행물, 영화/신문 제목을 감싸는 공식 규격 괄호',
    category: '괄호',
    type: 'symbol',
    pair: '『』',
    tags: ['괄호', '겹낫표', '작품', '영화', '잡지', '신문', '이중낫표']
  },
  {
    id: 'b-angle-double',
    character: '《 》',
    name: '이중 산형 괄호',
    description: '서적명이나 클래식 서지, 헤드라인을 감싸는 괄호',
    category: '괄호',
    type: 'symbol',
    pair: '《》',
    tags: ['괄호', '화살괄호', '이중화살', '책제목', '산형괄호', '서적']
  },
  {
    id: 'b-angle-single',
    character: '〈 〉',
    name: '산형 괄호 (홑화살)',
    description: '논문명, 소제목, 세부 항목을 감싸는 슬림한 괄호',
    category: '괄호',
    type: 'symbol',
    pair: '〈〉',
    tags: ['괄호', '산형', '홑화살', '소제목', '논문', '슬림']
  },
  {
    id: 'b-math-double',
    character: '⟦ ⟧',
    name: '이중 대괄호',
    description: '개발 문서, 수식 표기, 감각적인 모던 타이포그래피용 괄호',
    category: '괄호',
    type: 'symbol',
    pair: '⟦⟧',
    tags: ['괄호', '대괄호', '수학', '코딩', '개발', '이중대괄호']
  },
  {
    id: 'b-lenticular-white',
    character: '〖 〗',
    name: '흰색 깃발 괄호',
    description: '속이 빈 형태로 차분하고 부드러운 인상을 주는 괄호',
    category: '괄호',
    type: 'symbol',
    pair: '〖〗',
    tags: ['괄호', '흰괄호', '속빈괄호', '부드러운', '강조']
  },
  {
    id: 'b-tortoise-shell',
    character: '〔 〕',
    name: '거북등 괄호',
    description: '사전 해설, 보충 주석, 각주 표기에 쓰이는 전통 괄호',
    category: '괄호',
    type: 'symbol',
    pair: '〔〕',
    tags: ['괄호', '거북등', '사전', '주석', '설명', '각주']
  },

  // === 특수문자 / 기호: 화살표 (Arrows) ===
  {
    id: 'a-heavy-right',
    character: '➔',
    name: '굵은 오른쪽 화살표',
    description: '다음 단계, 링크 이동, 핵심 시선 유도에 가장 선명한 화살표',
    category: '화살표',
    type: 'symbol',
    tags: ['화살표', '오른쪽', '다음', '이동', '진행', '링크', 'arrow', 'right']
  },
  {
    id: 'a-corner-down-right',
    character: '↳',
    name: '꺾인 답글 화살표',
    description: '대댓글, 하위 세부 항목, 계층 구조 표현의 표준 기호',
    category: '화살표',
    type: 'symbol',
    tags: ['화살표', '대댓글', '답글', '하위', '꺾인화살표', '트리', '댓글']
  },
  {
    id: 'a-feather-right',
    character: '➳',
    name: '깃털 화살표',
    description: '감성 다이어리, 블로그, SNS 프로필 장식에 어울리는 화살표',
    category: '화살표',
    type: 'symbol',
    tags: ['화살표', '깃털', '감성', '예쁜화살표', '다이어리', '인스타']
  },
  {
    id: 'a-dashed-right',
    character: '⇢',
    name: '점선 화살표',
    description: '부드러운 전환, 미래 예정 단계, 가이드를 나타내는 점선 화살표',
    category: '화살표',
    type: 'symbol',
    tags: ['화살표', '점선', '예정', '부드러운', '프로세스']
  },
  {
    id: 'a-black-pointer',
    character: '⮞',
    name: '모던 불릿 포인터',
    description: '노션이나 발표 자료의 세련된 목록 글머리 기호',
    category: '화살표',
    type: 'symbol',
    tags: ['화살표', '포인터', '글머리', '불릿', '모던', '목록']
  },
  {
    id: 'a-exchange-dual',
    character: '⇄',
    name: '양방향 교환 화살표',
    description: '스왑, 상호 교환, 전환, 양방향 프로세스 표시',
    category: '화살표',
    type: 'symbol',
    tags: ['화살표', '교환', '양방향', '스왑', '전환', '변환']
  },

  // === 특수문자 / 기호: 별 & 기호 & 체크 & 수학 ===
  {
    id: 's-four-point-black',
    character: '✦',
    name: '4각 블랙 스타',
    description: '미니멀하고 세련된 AI 심볼 및 현대적인 포인트 기호',
    category: '별/기호',
    type: 'symbol',
    tags: ['별', '4각별', '모던', 'AI별', '미니멀', '포인트', 'star']
  },
  {
    id: 's-four-point-white',
    character: '✧',
    name: '4각 화이트 스타',
    description: '은은하고 맑은 감성으로 텍스트 주변을 꾸미는 기호',
    category: '별/기호',
    type: 'symbol',
    tags: ['별', '흰별', '은은한', '감성', '반짝']
  },
  {
    id: 's-five-point-black',
    character: '★',
    name: '검은 오각별',
    description: '별점, 즐겨찾기, 북마크, 주요 체크에 쓰이는 클래식 별',
    category: '별/기호',
    type: 'symbol',
    tags: ['별', '오각별', '별점', '평점', '즐겨찾기', '검은별']
  },
  {
    id: 'c-simple-check',
    character: '✓',
    name: '체크마크',
    description: '할 일 완료, 승인, 텍스트 글머리용 깔끔한 기본 체크',
    category: '체크/기호',
    type: 'symbol',
    tags: ['체크', '완료', '성공', '확인', '승인', 'check', 'v']
  },
  {
    id: 'c-heavy-check',
    character: '✔',
    name: '굵은 체크',
    description: '선명하게 시선을 끄는 강조용 완료 체크',
    category: '체크/기호',
    type: 'symbol',
    tags: ['체크', '굵은체크', '완료', '성공', '강조']
  },
  {
    id: 'c-cross-x',
    character: '✕',
    name: '엑스 기호',
    description: '취소, 오류, 닫기, 불일치 표시용 깔끔한 X 기호',
    category: '체크/기호',
    type: 'symbol',
    tags: ['체크', '엑스', '취소', '오류', '닫기', 'x', 'cross']
  },
  {
    id: 'm-plus-minus',
    character: '±',
    name: '플러스 마이너스',
    description: '오차 범위, 허용치, 공차 표기에 필수적인 기호',
    category: '수학/기호',
    type: 'symbol',
    tags: ['수학', '플마', '오차', '기호', '단위', 'math']
  },
  {
    id: 'm-infinity',
    character: '∞',
    name: '무한대',
    description: '영원함, 무한한 가능성, 수학적 극한 상징',
    category: '수학/기호',
    type: 'symbol',
    tags: ['수학', '무한대', '영원', '인피니티']
  },
  {
    id: 'm-sun-symbol',
    character: '☼',
    name: '화이트 태양 기호',
    description: '텍스트에 쓰는 가볍고 심플한 태양 특수문자',
    category: '자연/기호',
    type: 'symbol',
    tags: ['태양', '해', '여름', '날씨', '햇살', '기호']
  },
  {
    id: 'n-circle-1',
    character: '①',
    name: '원문자 숫자 1',
    description: '순서가 있는 설명, 1단계 요약에 가장 가독성 높은 기호',
    category: '숫자',
    type: 'symbol',
    tags: ['숫자', '1', '원문자', '동그라미1', '순서', '1단계', 'number']
  },

  // === 이모지: 동물 (Animals) ===
  {
    id: 'e-hamster',
    character: '🐹',
    name: '햄스터',
    description: '작고 귀여운 햄스터 얼굴, 소동물 및 귀여움 상징',
    category: '동물',
    type: 'emoji',
    tags: ['햄스터', '동물', '쥐', '소동물', '귀여운', 'hamster', '반려동물']
  },
  {
    id: 'e-paw-prints',
    character: '🐾',
    name: '발자국',
    description: '반려동물의 귀여운 발자국이나 산책, 여정',
    category: '동물',
    type: 'emoji',
    tags: ['발자국', '강아지', '고양이', '동물', '산책', '귀여운']
  },
  {
    id: 'e-cat-face',
    character: '🐱',
    name: '고양이 얼굴',
    description: '사랑스럽고 다정한 고양이',
    category: '동물',
    type: 'emoji',
    tags: ['고양이', '냥이', '동물', '집사', '귀여운', 'cat']
  },
  {
    id: 'e-dog-face',
    character: '🐶',
    name: '강아지 얼굴',
    description: '충직하고 발랄한 강아지',
    category: '동물',
    type: 'emoji',
    tags: ['강아지', '개', '동물', '반려견', '귀여운', 'dog']
  },
  {
    id: 'e-rabbit-face',
    character: '🐰',
    name: '토끼 얼굴',
    description: '깡총 뛰어오르는 귀여운 토끼',
    category: '동물',
    type: 'emoji',
    tags: ['토끼', '동물', '귀여운', 'bunny', 'rabbit']
  },

  // === 이모지: 여름 & 자연 & 날씨 (Summer, Nature, Weather) ===
  {
    id: 'e-sun',
    character: '☀️',
    name: '타오르는 태양',
    description: '맑은 하늘, 뜨거운 햇살, 한여름의 눈부신 날씨',
    category: '여름/날씨',
    type: 'emoji',
    tags: ['여름', '태양', '해', '햇살', '더위', '날씨', '맑음', 'sun', 'summer']
  },
  {
    id: 'e-beach-umbrella',
    character: '🏖️',
    name: '해변과 파라솔',
    description: '시원한 바닷가, 모래사장, 여름 바캉스와 휴양지',
    category: '여름/휴가',
    type: 'emoji',
    tags: ['여름', '해변', '바다', '파라솔', '휴가', '바캉스', '휴양지', 'beach']
  },
  {
    id: 'e-palm-tree',
    character: '🌴',
    name: '야자수',
    description: '열대 휴양지의 이국적인 정취와 시원한 그늘',
    category: '여름/자연',
    type: 'emoji',
    tags: ['여름', '야자수', '열대', '나무', '휴양지', '자연', 'palm']
  },
  {
    id: 'e-watermelon',
    character: '🍉',
    name: '수박',
    description: '무더위를 날려주는 달콤하고 시원한 대표 여름 과일',
    category: '여름/음식',
    type: 'emoji',
    tags: ['여름', '수박', '과일', '시원한', '달콤한', '간식', 'watermelon']
  },
  {
    id: 'e-ice-cream',
    character: '🍦',
    name: '소프트 아이스크림',
    description: '달콤하게 녹아내리는 시원한 여름 디저트',
    category: '여름/음식',
    type: 'emoji',
    tags: ['여름', '아이스크림', '디저트', '간식', '달콤한', '시원한', 'icecream']
  },
  {
    id: 'e-sunglasses',
    character: '🕶️',
    name: '선글라스',
    description: '강한 자외선 차단 및 멋진 여름 바캉스 패션',
    category: '여름/패션',
    type: 'emoji',
    tags: ['여름', '선글라스', '햇빛', '바캉스', '멋진', '패션']
  },
  {
    id: 'e-surfing',
    character: '🏄‍♂️',
    name: '파도타기 서퍼',
    description: '시원한 파도를 가르는 액티브한 여름 수상 스포츠',
    category: '여름/스포츠',
    type: 'emoji',
    tags: ['여름', '서핑', '파도', '바다', '스포츠', '액티비티']
  },

  // === 이모지: 일상 & 감정 & 상태 (Work, Life, Moods) ===
  {
    id: 'e-running-fast',
    character: '🏃💨',
    name: '빛의 속도로 달리기',
    description: '퇴근, 탈출, 약속 늦음, 칼퇴의 순간',
    category: '일상/퇴근',
    type: 'emoji',
    tags: ['퇴근', '칼퇴', '달리기', '탈출', '빠름', '스피드', '런']
  },
  {
    id: 'e-beer-mugs',
    character: '🍻',
    name: '맥주 짠 (건배)',
    description: '퇴근 후 시원한 맥주 한 잔, 불금, 회식, 축하 건배',
    category: '일상/음식',
    type: 'emoji',
    tags: ['퇴근', '맥주', '건배', '술', '불금', '치맥', '축하', 'beer']
  },
  {
    id: 'e-cozy-bed',
    character: '🛌',
    name: '침대에서 휴식',
    description: '지친 하루 끝에 꿀잠, 주말 뒹굴기, 힐링',
    category: '일상/휴식',
    type: 'emoji',
    tags: ['퇴근', '휴식', '잠', '수면', '침대', '피곤', '힐링', '주말']
  },
  {
    id: 'e-home',
    character: '🏠',
    name: '편안한 집',
    description: '귀가, 내 집이 최고, 아늑한 보금자리',
    category: '일상/장소',
    type: 'emoji',
    tags: ['퇴근', '집', '귀가', '홈', '편안한', '집콕']
  },
  {
    id: 'e-fire',
    character: '🔥',
    name: '불꽃 (열정/인기)',
    description: '뜨거운 인기, 핫한 트렌드, 불타는 열정과 에너지',
    category: '감정/상태',
    type: 'emoji',
    tags: ['불', '불꽃', '핫', '열정', '트렌드', '인기', 'fire']
  },
  {
    id: 'e-sparkles',
    character: '✨',
    name: '스파클 (반짝임)',
    description: '빛나는 순간, 새로운 아이디어, AI, 마법 같은 분위기',
    category: '감정/상태',
    type: 'emoji',
    tags: ['반짝', '별', 'AI', '마법', '빛', '깨끗한', 'sparkle']
  },
  {
    id: 'e-pleading-face',
    character: '🥺',
    name: '애원하는 눈빛 (간절함)',
    description: '부탁할 때, 감동받았을 때, 애틋하게 올려다보는 표정',
    category: '표정',
    type: 'emoji',
    tags: ['표정', '간절', '부탁', '애원', '감동', '귀여운', '뿌엥']
  },
  {
    id: 'e-melting-face',
    character: '🫠',
    name: '녹아내리는 얼굴',
    description: '더위로 지칠 때, 민망하고 부끄러울 때, 현타 올 때',
    category: '표정',
    type: 'emoji',
    tags: ['표정', '더위', '녹음', '민망', '피곤', '현타', '여름']
  },
  {
    id: 'e-partying-face',
    character: '🥳',
    name: '축하 파티 얼굴',
    description: '생일, 합격, 프로젝트 완료 등 신나는 축하 분위기',
    category: '표정',
    type: 'emoji',
    tags: ['축하', '파티', '생일', '합격', '성공', '신남', 'party']
  },
  {
    id: 'e-hundred-points',
    character: '💯',
    name: '100점 만점',
    description: '완벽한 성과, 시험 만점, 합격, 완벽함을 뜻하는 기호',
    category: '성취/학업',
    type: 'emoji',
    tags: ['합격', '만점', '100점', '시험', '성공', '완벽', '100']
  },
  {
    id: 'e-money-bag',
    character: '💰',
    name: '돈주머니',
    description: '부자, 대박, 보너스, 재테크, 수익 창출',
    category: '비즈니스/돈',
    type: 'emoji',
    tags: ['돈', '부자', '머니', '보너스', '수익', '대박', '재테크', 'money']
  },
  {
    id: 'e-red-heart',
    character: '❤️',
    name: '빨간 하트',
    description: '사랑, 애정, 깊은 감사를 전하는 클래식 하트',
    category: '하트/사랑',
    type: 'emoji',
    tags: ['하트', '사랑', '애정', '감사', '연애', 'heart']
  }
];

export function smartSemanticSearch(
  query: string,
  filterType: FilterType = 'all',
  maxCount: number = 5
): SymbolItem[] {
  let pool = COMPREHENSIVE_SYMBOLS;

  if (filterType === 'emoji') {
    pool = pool.filter((item) => item.type === 'emoji');
  } else if (filterType === 'symbol') {
    pool = pool.filter((item) => item.type === 'symbol');
  }

  if (!query || !query.trim()) {
    return pool.slice(0, maxCount);
  }

  const raw = query.trim().toLowerCase();
  const tokens = raw.split(/\s+/).filter(Boolean);

  const scored = pool.map((item) => {
    let score = 0;
    const char = item.character.toLowerCase();
    const name = item.name.toLowerCase();
    const desc = item.description.toLowerCase();
    const cat = item.category.toLowerCase();
    const tags = (item.tags || []).map((t) => t.toLowerCase());

    // 1. Direct character / name exact matching
    if (char === raw || item.pair === raw) score += 300;
    if (name === raw) score += 200;

    // 2. Token matching
    for (const t of tokens) {
      if (char.includes(t)) score += 100;
      if (name.includes(t)) score += 80;
      if (tags.includes(t)) score += 90;
      if (tags.some((tag) => tag.includes(t) || t.includes(tag))) score += 50;
      if (cat.includes(t)) score += 40;
      if (desc.includes(t)) score += 30;
    }

    // 3. Deep Abstract Associations
    // Summer / Heat / Vacation
    if (raw.includes('여름') || raw.includes('더위') || raw.includes('휴가') || raw.includes('바다') || raw.includes('summer')) {
      if (['☀️', '🏖️', '🌴', '🍉', '🍦', '🕶️', '🏄‍♂️', '☼', '🫠'].includes(item.character)) {
        score += 150;
      }
    }

    // Leaving work / Home / Rest
    if (raw.includes('퇴근') || raw.includes('칼퇴') || raw.includes('휴식') || raw.includes('주말') || raw.includes('집')) {
      if (['🏃💨', '🍻', '🏠', '🛌', '🎉', '🍺'].includes(item.character)) {
        score += 150;
      }
    }

    // Hamster / Animals
    if (raw.includes('햄스터') || raw.includes('동물') || raw.includes('소동물') || raw.includes('귀여운')) {
      if (['🐹', '🐾', '🐱', '🐶', '🐰', '🐭'].includes(item.character)) {
        score += 150;
      }
    }

    // Brackets / Quotes
    if (raw.includes('괄호') || raw.includes('따옴표') || raw.includes('대괄호') || raw.includes('인용')) {
      if (item.category === '괄호') score += 150;
    }

    // Arrows
    if (raw.includes('화살표') || raw.includes('방향') || raw.includes('다음') || raw.includes('이동')) {
      if (item.category === '화살표') score += 150;
    }

    // Stars / Sparkles
    if (raw.includes('별') || raw.includes('반짝') || raw.includes('스파클') || raw.includes('스타')) {
      if (['✨', '✦', '✧', '★', '☼'].includes(item.character)) score += 150;
    }

    // Checks / Completion
    if (raw.includes('체크') || raw.includes('완료') || raw.includes('성공') || raw.includes('확인')) {
      if (['✓', '✔', '💯', '✕'].includes(item.character)) score += 150;
    }

    // Money / Wealth
    if (raw.includes('돈') || raw.includes('부자') || raw.includes('수익') || raw.includes('대박') || raw.includes('월급')) {
      if (['💰', '💯', '🎉'].includes(item.character)) score += 150;
    }

    return { item, score };
  });

  const filtered = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.item);

  if (filtered.length === 0) {
    return pool.slice(0, maxCount);
  }

  return filtered.slice(0, maxCount);
}
