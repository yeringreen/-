import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy } from 'lucide-react';
import { SymbolItem } from '../types';

interface ResultItemProps {
  item: SymbolItem;
  rank: number;
  onCopy: (character: string, name: string) => void;
}

export function ResultItem({ item, rank, onCopy }: ResultItemProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy(item.character, item.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <motion.div
      id={`symbol-item-${rank}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: (rank - 1) * 0.04 }}
      className="group relative flex items-center justify-between gap-4 rounded-xl border border-neutral-200/80 bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:border-neutral-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] active:bg-neutral-50/60"
    >
      {/* Left: Rank & Character & Info */}
      <div className="flex items-center gap-3.5 min-w-0">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-500 font-mono">
          {rank}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          title="클릭하여 복사"
          className="flex h-12 min-w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-50 px-2 text-2xl font-normal text-neutral-900 transition-all hover:bg-neutral-100 hover:scale-105 active:scale-95"
        >
          <span className="select-all leading-none">{item.character}</span>
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-semibold text-neutral-900">
              {item.name}
            </h3>
            {item.category && (
              <span className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500">
                {item.category}
              </span>
            )}
          </div>
          <p className="truncate text-xs text-neutral-500 mt-0.5">
            {item.description}
          </p>
        </div>
      </div>

      {/* Right: Copy Button */}
      <div className="shrink-0">
        <button
          id={`copy-btn-${rank}`}
          type="button"
          onClick={handleCopy}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
            copied
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95'
          }`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>복사됨</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>복사</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
