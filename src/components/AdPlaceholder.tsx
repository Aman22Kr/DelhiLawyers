import React from 'react';
import { Megaphone } from 'lucide-react';

interface AdPlaceholderProps {
  className?: string;
  format?: 'banner' | 'leaderboard';
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '', format = 'leaderboard' }) => {
  return (
    <aside
      aria-label="Sponsored Space"
      className={`w-full max-w-5xl mx-auto my-8 px-4 ${className}`}
    >
      <div className="relative border border-stone-200 bg-stone-100/80 rounded-sm p-3 sm:p-4 text-center overflow-hidden">
        <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono tracking-wider mb-1.5 uppercase">
          <span className="flex items-center gap-1.5">
            <Megaphone className="w-3.5 h-3.5 text-stone-400" />
            Advertisement Space
          </span>
          <span className="text-stone-400">728 × 90 Standard Responsive</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-2 px-3 bg-white/60 border border-stone-200/70 rounded-xs">
          <div className="text-left">
            <p className="text-xs font-semibold text-stone-700 tracking-tight">
              Legal Research & Case Law Digest Sponsor
            </p>
            <p className="text-[11px] text-stone-500">
              Verified legal publishing solutions and courtroom technology tools for practitioners in Delhi NCR.
            </p>
          </div>
          <span className="shrink-0 text-[10px] font-mono uppercase px-2.5 py-1 bg-stone-200 text-stone-600 rounded">
            Partner Slot
          </span>
        </div>
      </div>
    </aside>
  );
};
