export type FilterType = 'all' | 'emoji' | 'symbol';

export interface SymbolItem {
  id: string;
  character: string;
  name: string;
  description: string;
  category: string;
  type: 'emoji' | 'symbol';
  pair?: string;
  tags?: string[];
}

export interface SearchResponse {
  results: SymbolItem[];
  source: 'ai' | 'fallback';
}
