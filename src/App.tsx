import { useState, useEffect, useCallback, useRef, FormEvent } from 'react';
import { Search, Loader2, X, Sparkles } from 'lucide-react';
import { SymbolItem, FilterType } from './types';
import { COMPREHENSIVE_SYMBOLS, smartSemanticSearch } from './data/symbolDictionary';
import { ResultItem } from './components/ResultItem';
import { Toast } from './components/Toast';

export default function App() {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [results, setResults] = useState<SymbolItem[]>(() =>
    COMPREHENSIVE_SYMBOLS.slice(0, 5)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 1800);
  }, []);

  const handleCopy = useCallback(
    async (text: string, name: string) => {
      try {
        await navigator.clipboard.writeText(text);
        showToast(`'${text}' 복사되었습니다`);
      } catch {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        showToast(`'${text}' 복사되었습니다`);
      }
    },
    [showToast]
  );

  const performSearch = useCallback(
    async (searchQuery: string, currentFilter: FilterType) => {
      const q = searchQuery.trim();
      if (!q) {
        let defaultPool = COMPREHENSIVE_SYMBOLS;
        if (currentFilter === 'emoji') {
          defaultPool = defaultPool.filter((i) => i.type === 'emoji');
        } else if (currentFilter === 'symbol') {
          defaultPool = defaultPool.filter((i) => i.type === 'symbol');
        }
        setResults(defaultPool.slice(0, 5));
        return;
      }

      // 1. Instant local semantic results first
      const localMatches = smartSemanticSearch(q, currentFilter, 5);
      setResults(localMatches);
      setIsLoading(true);

      // 2. Fetch AI-powered associative recommendation
      try {
        const res = await fetch('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: q, filterType: currentFilter }),
        });

        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.results) && data.results.length > 0) {
            setResults(data.results.slice(0, 5));
          }
        }
      } catch (err) {
        console.warn('AI query fallback:', err);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Debounced search on typing
  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    // Instant local feedback
    const local = smartSemanticSearch(newQuery, filterType, 5);
    setResults(local);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (newQuery.trim().length >= 1) {
      debounceTimerRef.current = setTimeout(() => {
        performSearch(newQuery, filterType);
      }, 450);
    }
  };

  const handleFilterChange = (newFilter: FilterType) => {
    setFilterType(newFilter);
    performSearch(query, newFilter);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    performSearch(query, filterType);
  };

  const handleClear = () => {
    setQuery('');
    let defaultPool = COMPREHENSIVE_SYMBOLS;
    if (filterType === 'emoji') {
      defaultPool = defaultPool.filter((i) => i.type === 'emoji');
    } else if (filterType === 'symbol') {
      defaultPool = defaultPool.filter((i) => i.type === 'symbol');
    }
    setResults(defaultPool.slice(0, 5));
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1E1E1E] antialiased selection:bg-neutral-900 selection:text-white font-sans flex flex-col justify-between">
      <div className="w-full max-w-xl mx-auto px-4 py-10 sm:py-16">
        {/* Title Section (Notion / iOS Minimal Header) */}
        <header className="mb-6 text-center space-y-1.5">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)] text-lg mb-1">
            ✦
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            이모지 & 특수문자 검색
          </h1>
          <p className="text-xs text-neutral-500 sm:text-sm">
            상황이나 기분을 입력하면 AI가 연상되는 최적의 5가지를 추천합니다.
          </p>
        </header>

        {/* Filter Segmented Control (전체 / 이모지 / 특수문자) */}
        <div className="mb-3.5 flex justify-center">
          <div
            id="filter-segmented-control"
            className="inline-flex rounded-xl bg-neutral-200/70 p-1 text-xs font-medium text-neutral-600 shadow-inner"
          >
            <button
              id="filter-tab-all"
              type="button"
              onClick={() => handleFilterChange('all')}
              className={`rounded-lg px-3.5 py-1.5 transition-all ${
                filterType === 'all'
                  ? 'bg-white font-semibold text-neutral-900 shadow-xs'
                  : 'hover:text-neutral-900'
              }`}
            >
              전체
            </button>
            <button
              id="filter-tab-emoji"
              type="button"
              onClick={() => handleFilterChange('emoji')}
              className={`flex items-center gap-1 rounded-lg px-3.5 py-1.5 transition-all ${
                filterType === 'emoji'
                  ? 'bg-white font-semibold text-neutral-900 shadow-xs'
                  : 'hover:text-neutral-900'
              }`}
            >
              <span>이모지</span>
              <span className="text-[11px]">☀️</span>
            </button>
            <button
              id="filter-tab-symbol"
              type="button"
              onClick={() => handleFilterChange('symbol')}
              className={`flex items-center gap-1 rounded-lg px-3.5 py-1.5 transition-all ${
                filterType === 'symbol'
                  ? 'bg-white font-semibold text-neutral-900 shadow-xs'
                  : 'hover:text-neutral-900'
              }`}
            >
              <span>특수문자</span>
              <span className="text-[11px]">✦</span>
            </button>
          </div>
        </div>

        {/* Search Bar (Clean iOS / Notion Input) */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="relative flex items-center">
            <div className="pointer-events-none absolute left-3.5 flex items-center text-neutral-400">
              <Search className="h-4 w-4" />
            </div>

            <input
              id="symbol-search-input"
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder={
                filterType === 'emoji'
                  ? '이모지 느낌을 입력하세요 (예: 여름, 퇴근, 햄스터, 축하, 휴식...)'
                  : filterType === 'symbol'
                  ? '특수문자 용도를 입력하세요 (예: 괄호, 화살표, 별, 체크, 구분선...)'
                  : '원하는 느낌을 입력하세요 (예: 여름, 괄호, 퇴근, 화살표, 체크...)'
              }
              className="w-full rounded-xl border border-neutral-200/90 bg-white py-3 pl-10 pr-24 text-sm font-normal text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.03)] placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-hidden focus:ring-1 focus:ring-neutral-900 transition-all sm:text-base"
            />

            <div className="absolute right-2 flex items-center gap-1">
              {query && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="rounded-md p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
                  title="지우기"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}

              <button
                id="search-btn"
                type="submit"
                disabled={isLoading}
                className="flex items-center gap-1 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-neutral-800 disabled:opacity-50 active:scale-95"
              >
                {isLoading ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <span>추천</span>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* 5 Recommended Results List */}
        <main className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-medium text-neutral-400">
              {filterType === 'emoji'
                ? '이모지 추천 결과 (5개)'
                : filterType === 'symbol'
                ? '특수문자 추천 결과 (5개)'
                : '추천 결과 (5개)'}
            </span>
            {isLoading && (
              <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                <Loader2 className="h-3 w-3 animate-spin" />
                <span>AI 연상 분석 중...</span>
              </span>
            )}
          </div>

          <div id="results-container" className="space-y-2">
            {results.map((item, index) => (
              <ResultItem
                key={`${item.character}-${item.id || index}`}
                item={item}
                rank={index + 1}
                onCopy={handleCopy}
              />
            ))}
          </div>
        </main>
      </div>

      {/* Subtle Bottom Footer */}
      <footer className="py-6 text-center text-[11px] text-neutral-400">
        클릭하거나 복사 버튼을 누르면 클립보드에 바로 저장됩니다
      </footer>

      {/* iOS Minimal Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
