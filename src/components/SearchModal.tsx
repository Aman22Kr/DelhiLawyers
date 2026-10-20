import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Scale, User, Landmark, BookOpen, ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS, ADVOCATES, COURTS, LEGAL_INSIGHTS } from '../data/legalData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedPractice = q
    ? PRACTICE_AREAS.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.statutes.some((s) => s.toLowerCase().includes(q))
      )
    : [];

  const matchedAdvocates = q
    ? ADVOCATES.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.specializations.some((s) => s.toLowerCase().includes(q)) ||
          a.courts.some((c) => c.toLowerCase().includes(q))
      )
    : [];

  const matchedCourts = q
    ? COURTS.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.district.toLowerCase().includes(q) ||
          c.jurisdiction.toLowerCase().includes(q)
      )
    : [];

  const matchedInsights = q
    ? LEGAL_INSIGHTS.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.summary.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q)
      )
    : [];

  const totalResults =
    matchedPractice.length + matchedAdvocates.length + matchedCourts.length + matchedInsights.length;

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-950/70 backdrop-blur-sm animate-entrance">
      <div 
        className="w-full max-w-2xl bg-white border border-stone-300 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-200 bg-stone-50">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bail, divorce, property partition, courts, advocates, NI Act..."
            autoFocus
            className="w-full bg-transparent border-none text-stone-900 text-sm focus:outline-none placeholder:text-stone-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono px-2 py-1 bg-stone-200 text-stone-600 rounded hover:bg-stone-300"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-5">
          {!query && (
            <div className="text-center py-8 text-stone-500 text-sm">
              <p className="font-medium text-stone-700">Quick Legal Search</p>
              <p className="text-xs text-stone-400 mt-1">
                Type keywords like "Anticipatory bail", "Section 138", "Patiala House", or "High Court".
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                {['Anticipatory Bail', 'Mutual Divorce', 'Patiala House Courts', 'Section 138 Cheque', 'Delhi High Court'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="text-center py-10 text-stone-500 text-sm">
              <p>No legal matters found matching "{query}".</p>
              <p className="text-xs text-stone-400 mt-1">
                Try searching broad terms like "Criminal", "Civil", "RERA", or "Advocate".
              </p>
            </div>
          )}

          {/* Practice Areas Matches */}
          {matchedPractice.length > 0 && (
            <div>
              <p className="text-[11px] font-mono uppercase text-amber-700 font-semibold tracking-wider mb-2 flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5" />
                Practice Areas ({matchedPractice.length})
              </p>
              <div className="space-y-1.5">
                {matchedPractice.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(`/practice-areas/${item.slug}`)}
                    className="w-full text-left p-2.5 rounded hover:bg-amber-50/60 border border-transparent hover:border-amber-200 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <p className="text-sm font-semibold text-stone-900 group-hover:text-amber-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-stone-500 line-clamp-1">{item.shortDesc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-700 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Advocates Matches */}
          {matchedAdvocates.length > 0 && (
            <div>
              <p className="text-[11px] font-mono uppercase text-amber-700 font-semibold tracking-wider mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                Advocates & Counsel ({matchedAdvocates.length})
              </p>
              <div className="space-y-1.5">
                {matchedAdvocates.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(`/advocates/${item.id}`)}
                    className="w-full text-left p-2.5 rounded hover:bg-stone-100 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <p className="text-sm font-semibold text-stone-900">{item.name}</p>
                      <p className="text-xs text-stone-500">{item.designation} · {item.experienceYears} Years Exp</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Courts Matches */}
          {matchedCourts.length > 0 && (
            <div>
              <p className="text-[11px] font-mono uppercase text-amber-700 font-semibold tracking-wider mb-2 flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5" />
                Courts in Delhi ({matchedCourts.length})
              </p>
              <div className="space-y-1.5">
                {matchedCourts.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(`/courts`)}
                    className="w-full text-left p-2.5 rounded hover:bg-stone-100 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <p className="text-sm font-semibold text-stone-900">{item.name}</p>
                      <p className="text-xs text-stone-500">{item.district} · {item.address}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Legal Insights Matches */}
          {matchedInsights.length > 0 && (
            <div>
              <p className="text-[11px] font-mono uppercase text-amber-700 font-semibold tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Legal Insights & Articles ({matchedInsights.length})
              </p>
              <div className="space-y-1.5">
                {matchedInsights.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => handleSelect(`/insights/${item.slug}`)}
                    className="w-full text-left p-2.5 rounded hover:bg-stone-100 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <p className="text-sm font-semibold text-stone-900">{item.title}</p>
                      <p className="text-xs text-stone-500">{item.category} · {item.readTime}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
