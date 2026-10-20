import React from 'react';
import { Play, Video } from 'lucide-react';

interface YouTubePlaceholderProps {
  title?: string;
  duration?: string;
  topic?: string;
  aspectRatio?: '16:9' | '4:3';
  className?: string;
}

export const YouTubePlaceholder: React.FC<YouTubePlaceholderProps> = ({
  title = 'Delhi High Court Litigation Briefing: Practical Guide to Bail Petitions',
  duration = '14:20',
  topic = 'Legal Briefing & Court Procedure',
  aspectRatio = '16:9',
  className = ''
}) => {
  return (
    <div className={`w-full overflow-hidden rounded-md border border-stone-800 bg-stone-950 text-white shadow-md ${className}`}>
      {/* 16:9 Video Canvas Placeholder */}
      <div className={`relative w-full ${aspectRatio === '16:9' ? 'aspect-video' : 'aspect-4/3'} bg-gradient-to-br from-stone-900 via-stone-950 to-neutral-900 flex flex-col items-center justify-center p-6 text-center select-none`}>
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #78716c 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Video Overlay Info */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-stone-400 z-10">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-stone-400" />
            <span className="font-mono text-[11px] text-stone-300 uppercase tracking-wider">{topic}</span>
          </div>
          <span className="font-mono text-[11px] bg-stone-800/90 border border-stone-700/60 text-stone-300 px-2 py-0.5 rounded">
            {duration}
          </span>
        </div>

        {/* Center Play Button Graphic (Blank Video Area) */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-stone-800/90 border border-stone-600/80 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
            <Play className="w-7 h-7 text-stone-300 translate-x-0.5" />
          </div>
          <p className="text-sm font-medium text-stone-300 max-w-md tracking-tight px-4">
            {title}
          </p>
        </div>

        {/* Bottom Bar Indicator */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-stone-500 font-mono z-10 border-t border-stone-800/60 pt-2">
          <span>YouTube Video Layout Placeholder</span>
          <span>Aspect Ratio 16:9 • Static Mode</span>
        </div>
      </div>
    </div>
  );
};
