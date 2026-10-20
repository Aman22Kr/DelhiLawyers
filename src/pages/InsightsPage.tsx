import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Bookmark, ArrowRight, Clock, User } from 'lucide-react';
import { LEGAL_INSIGHTS } from '../data/legalData';
import { useSaved } from '../context/SavedContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const InsightsPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const { isArticleSaved, toggleSaveArticle } = useSaved();

  const categories = ['All', 'Criminal Law', 'Bail & Liberty', 'Matrimonial Law', 'Commercial Law'];

  const filteredInsights = LEGAL_INSIGHTS.filter((item) => {
    const matchesCat = selectedCat === 'All' || item.category === selectedCat;
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase()) ||
      item.keyTakeaways.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
          <BookOpen className="w-4 h-4" />
          <span>Delhi Law Review & Judicial Insights</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Legal Insights, Precedents & Analysis
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          In-depth procedural commentary by Delhi advocates covering landmark High Court rulings, statutory amendments, and practical litigation strategy.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-stone-100 p-4 rounded-lg border border-stone-200">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedCat === cat
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-white text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search judgments or articles..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-900 focus:outline-none focus:border-stone-500"
          />
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredInsights.map((insight) => (
          <article
            key={insight.slug}
            className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-stone-400 transition-all shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span className="text-amber-800 font-bold uppercase">{insight.category}</span>
                <div className="flex items-center gap-2">
                  <span>{insight.readTime}</span>
                  <button
                    type="button"
                    onClick={() => toggleSaveArticle(insight.slug)}
                    className={`p-1 rounded hover:bg-stone-100 transition-colors ${
                      isArticleSaved(insight.slug) ? 'text-amber-600' : 'text-stone-400'
                    }`}
                    title={isArticleSaved(insight.slug) ? 'Saved' : 'Save article'}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                <Link to={`/insights/${insight.slug}`} className="hover:text-amber-800 transition-colors">
                  {insight.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {insight.summary}
              </p>

              {/* Key Takeaways */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <p className="text-[11px] font-mono uppercase text-stone-400">Core Takeaways:</p>
                <ul className="space-y-1">
                  {insight.keyTakeaways.slice(0, 3).map((takeaway, idx) => (
                    <li key={idx} className="text-xs text-stone-700 flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">›</span>
                      <span className="line-clamp-1">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <User className="w-3.5 h-3.5 text-stone-400" />
                <span>{insight.author}</span>
                <span>·</span>
                <span>{insight.date}</span>
              </div>
              <Link
                to={`/insights/${insight.slug}`}
                className="text-xs font-semibold text-stone-900 hover:text-amber-800 flex items-center gap-1"
              >
                <span>Read Full Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <AdPlaceholder format="leaderboard" />
    </div>
  );
};
