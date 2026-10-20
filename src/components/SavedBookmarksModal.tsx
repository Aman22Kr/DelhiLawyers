import React from 'react';
import { Link } from 'react-router-dom';
import { X, Bookmark, Trash2, ArrowRight, User, BookOpen } from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { LEGAL_INSIGHTS, ADVOCATES } from '../data/legalData';

interface SavedBookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SavedBookmarksModal: React.FC<SavedBookmarksModalProps> = ({ isOpen, onClose }) => {
  const { savedArticles, toggleSaveArticle, savedAdvocates, toggleSaveAdvocate, bookings } = useSaved();

  if (!isOpen) return null;

  const bookmarkedArticles = LEGAL_INSIGHTS.filter((i) => savedArticles.includes(i.slug));
  const bookmarkedAdvocates = ADVOCATES.filter((a) => savedAdvocates.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-entrance">
      <div 
        className="w-full max-w-xl bg-white border border-stone-300 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-lg">
            <Bookmark className="w-5 h-5 text-amber-600" />
            <span>Saved Items & Consultation Records</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-800 rounded hover:bg-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 space-y-6">
          {/* Active Consultations stored in localStorage */}
          {bookings.length > 0 && (
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold mb-3">
                My Consultation Bookings ({bookings.length})
              </p>
              <div className="space-y-2">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="p-3 bg-amber-50/50 border border-amber-200/70 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-amber-800">{b.id}</span>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                          {b.status}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-stone-900 mt-0.5">{b.practiceArea}</p>
                      <p className="text-xs text-stone-500">
                        Date: {b.preferredDate} · Slot: {b.preferredSlot} · Mode: {b.mode}
                      </p>
                    </div>
                    <Link
                      to="/consultation"
                      onClick={onClose}
                      className="text-xs text-amber-800 hover:underline flex items-center gap-1 font-medium"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bookmarked Advocates */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold mb-3 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              Saved Advocates ({bookmarkedAdvocates.length})
            </p>
            {bookmarkedAdvocates.length === 0 ? (
              <p className="text-xs text-stone-400 italic">No advocates saved yet. Click the bookmark icon on any advocate profile to save them here.</p>
            ) : (
              <div className="space-y-2">
                {bookmarkedAdvocates.map((adv) => (
                  <div
                    key={adv.id}
                    className="p-3 bg-stone-50 border border-stone-200 rounded flex items-center justify-between"
                  >
                    <div>
                      <Link
                        to={`/advocates/${adv.id}`}
                        onClick={onClose}
                        className="text-sm font-semibold text-stone-900 hover:text-amber-800"
                      >
                        {adv.name}
                      </Link>
                      <p className="text-xs text-stone-500">{adv.designation} · {adv.experienceYears} Years</p>
                    </div>
                    <button
                      onClick={() => toggleSaveAdvocate(adv.id)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 rounded"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bookmarked Articles */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Saved Legal Insights ({bookmarkedArticles.length})
            </p>
            {bookmarkedArticles.length === 0 ? (
              <p className="text-xs text-stone-400 italic">No legal articles saved yet. Bookmark insights for quick reading and reference.</p>
            ) : (
              <div className="space-y-2">
                {bookmarkedArticles.map((art) => (
                  <div
                    key={art.slug}
                    className="p-3 bg-stone-50 border border-stone-200 rounded flex items-center justify-between"
                  >
                    <div>
                      <Link
                        to={`/insights/${art.slug}`}
                        onClick={onClose}
                        className="text-sm font-semibold text-stone-900 hover:text-amber-800 line-clamp-1"
                      >
                        {art.title}
                      </Link>
                      <p className="text-xs text-stone-500">{art.category} · {art.readTime}</p>
                    </div>
                    <button
                      onClick={() => toggleSaveArticle(art.slug)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 rounded ml-2"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
