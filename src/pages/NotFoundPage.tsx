import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowLeft, Home, Search, BookOpen } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-stone-100 border border-stone-200 text-stone-700 flex items-center justify-center mx-auto shadow-xs">
        <Scale className="w-8 h-8 text-amber-700" />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
          Error 404 · Page Not Found
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          The Requested Judicial Record Does Not Exist
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          The URL you attempted to reach may have been moved, renamed, or is unavailable in our current Delhi Bar directory.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded text-xs font-mono uppercase font-semibold transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/practice-areas"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 hover:bg-stone-100 text-stone-800 rounded text-xs font-mono uppercase transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>Practice Areas</span>
        </Link>
      </div>

      <div className="pt-8 border-t border-stone-200 text-xs text-stone-500 font-mono">
        <p>DelhiLawyers — Supreme Court, Delhi High Court & District Courts</p>
      </div>
    </div>
  );
};
