import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Search, ArrowRight, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/legalData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const PracticeAreasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Criminal', 'Family', 'Real Estate', 'Corporate', 'Civil & Commercial', 'Constitutional'];

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    const matchesCat = selectedCategory === 'All' || area.category === selectedCategory;
    const matchesSearch =
      area.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      area.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      area.statutes.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="border-b border-stone-200 pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
          <Scale className="w-4 h-4" />
          <span>Legal Representation Directory</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Specialized Practice Areas in Delhi NCR
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          Our chambers provide focused litigation, advisory, and trial representation across all key legal domains before the Supreme Court of India, Delhi High Court, and all District Courts.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-stone-100 p-4 rounded-lg border border-stone-200">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white font-semibold shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter by statute or issue..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-900 focus:outline-none focus:border-stone-500"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs text-stone-500 font-mono">
        Showing {filteredAreas.length} practice areas {selectedCategory !== 'All' && `in ${selectedCategory}`}
      </div>

      {/* Grid of Practice Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredAreas.map((area) => (
          <div
            key={area.id}
            className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-stone-400 hover:shadow-sm transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span className="text-amber-800 font-bold uppercase">{area.category}</span>
                <span>{area.caseCount}</span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                <Link to={`/practice-areas/${area.slug}`} className="hover:text-amber-800 transition-colors">
                  {area.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {area.heroSummary}
              </p>

              {/* Governing Statutes */}
              <div className="space-y-1.5 pt-2">
                <p className="text-[11px] font-mono uppercase text-stone-400">Statutory Framework:</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.statutes.map((st, i) => (
                    <span key={i} className="text-xs text-stone-700 bg-stone-100 px-2.5 py-0.5 rounded border border-stone-200/60">
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Services Offered */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <p className="text-[11px] font-mono uppercase text-stone-400">Court Services & Reliefs:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {area.keyServices.slice(0, 4).map((srv, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-stone-500 font-mono">
                Est. Listing: <span className="font-medium text-stone-800">{area.estimatedTimeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="text-xs font-semibold text-stone-900 hover:text-amber-800 flex items-center gap-1 px-3 py-1.5 rounded hover:bg-stone-50"
                >
                  <span>Procedure & Docs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to={`/consultation?practice=${encodeURIComponent(area.title)}`}
                  className="text-xs font-mono uppercase px-3 py-1.5 bg-stone-900 text-white hover:bg-stone-800 rounded transition-colors"
                >
                  Book Counsel
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ad slot near bottom */}
      <AdPlaceholder format="leaderboard" />
    </div>
  );
};
