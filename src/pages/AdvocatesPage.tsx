import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Bookmark, Star, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { ADVOCATES } from '../data/legalData';
import { useSaved } from '../context/SavedContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AdvocatesPage: React.FC = () => {
  const [filterCourt, setFilterCourt] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const { isAdvocateSaved, toggleSaveAdvocate } = useSaved();

  const courts = ['All', 'Supreme Court of India', 'Delhi High Court', 'Patiala House', 'Saket', 'NCLT New Delhi'];

  const filteredAdvocates = ADVOCATES.filter((adv) => {
    const matchesCourt = filterCourt === 'All' || adv.courts.some((c) => c.includes(filterCourt));
    const matchesSearch =
      adv.name.toLowerCase().includes(search.toLowerCase()) ||
      adv.specializations.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
      adv.designation.toLowerCase().includes(search.toLowerCase());
    return matchesCourt && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
          <Users className="w-4 h-4" />
          <span>Delhi Bar Association & Chamber Members</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Advocates, Counsel & Trial Litigators
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          Our chambers bring decades of combined courtroom trial experience across the Supreme Court of India, Delhi High Court, and all District Courts.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-stone-100 p-4 rounded-lg border border-stone-200">
        <div className="flex flex-wrap gap-1.5">
          {courts.map((court) => (
            <button
              key={court}
              onClick={() => setFilterCourt(court)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterCourt === court
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-white text-stone-700 hover:bg-stone-200'
              }`}
            >
              {court}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by advocate name or specialty..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-900 focus:outline-none focus:border-stone-500"
          />
        </div>
      </div>

      {/* Advocates List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAdvocates.map((adv) => (
          <div
            key={adv.id}
            className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between hover:border-stone-400 transition-all shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase">
                    {adv.barEnrollment}
                  </span>
                  <h2 className="font-serif text-xl font-bold text-stone-900 mt-1">
                    <Link to={`/advocates/${adv.id}`} className="hover:text-amber-800">
                      {adv.name}
                    </Link>
                  </h2>
                  <p className="text-xs text-amber-900 font-semibold mt-0.5">
                    {adv.designation}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleSaveAdvocate(adv.id)}
                  className={`p-1.5 rounded hover:bg-stone-100 transition-colors ${
                    isAdvocateSaved(adv.id) ? 'text-amber-600' : 'text-stone-400'
                  }`}
                  title={isAdvocateSaved(adv.id) ? 'Saved' : 'Save advocate profile'}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
                <span>{adv.experienceYears} Years at Bar</span>
                <span>·</span>
                <span className="flex items-center text-amber-700 font-bold">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-1" />
                  {adv.rating} ({adv.reviewCount})
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                {adv.bio}
              </p>

              {/* Specializations */}
              <div className="space-y-1.5 pt-2">
                <p className="text-[11px] font-mono uppercase text-stone-400">Core Verticals:</p>
                <div className="flex flex-wrap gap-1">
                  {adv.specializations.map((spec, i) => (
                    <span key={i} className="text-xs text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Courts */}
              <div className="space-y-1 pt-2 border-t border-stone-100">
                <p className="text-[11px] font-mono uppercase text-stone-400">Regular Court Roster:</p>
                <p className="text-xs text-stone-600 font-mono">
                  {adv.courts.join(' · ')}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <Link
                to={`/advocates/${adv.id}`}
                className="text-xs font-semibold text-stone-900 hover:text-amber-800 flex items-center gap-1"
              >
                <span>Full Profile & Cases</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to={`/consultation?advocate=${adv.id}`}
                className="text-xs font-mono uppercase px-3 py-1.5 bg-stone-900 text-white hover:bg-stone-800 rounded transition-colors"
              >
                Schedule
              </Link>
            </div>
          </div>
        ))}
      </div>

      <AdPlaceholder format="leaderboard" />
    </div>
  );
};
