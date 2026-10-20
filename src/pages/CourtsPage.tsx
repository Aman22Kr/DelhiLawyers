import React, { useState } from 'react';
import { Landmark, MapPin, Clock, Train, Search, FileText, ChevronRight } from 'lucide-react';
import { COURTS, CourtLocation } from '../data/legalData';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Link } from 'react-router-dom';

export const CourtsPage: React.FC = () => {
  const [activeType, setActiveType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const types = ['All', 'Apex Court', 'High Court', 'District Court'];

  const filteredCourts = COURTS.filter((c) => {
    const matchesType = activeType === 'All' || c.type === activeType;
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.jurisdiction.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
          <Landmark className="w-4 h-4" />
          <span>Delhi Judicial Map & Jurisdictions</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Courts & Judicial Complexes in Delhi NCR
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          Comprehensive directory of courts across the National Capital Territory, including jurisdiction boundaries, filing registry counters, and metro connectivity.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-stone-100 p-4 rounded-lg border border-stone-200">
        <div className="flex flex-wrap gap-1.5">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeType === type
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-white text-stone-700 hover:bg-stone-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by court or district..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-900 focus:outline-none focus:border-stone-500"
          />
        </div>
      </div>

      {/* Court Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredCourts.map((court) => (
          <div
            key={court.id}
            className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-stone-400 transition-all shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span className="text-amber-800 font-bold uppercase">{court.type}</span>
                <span>{court.district}</span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                {court.name}
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {court.description}
              </p>

              {/* Court Logistics */}
              <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-700 font-mono">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span className="font-sans text-stone-600">{court.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Train className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{court.metroAccess}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Hours: {court.workingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Registry Filing: {court.filingCounterTimings}</span>
                </div>
              </div>

              {/* Specialized Benches */}
              <div className="space-y-1.5 pt-2 border-t border-stone-100">
                <p className="text-[11px] font-mono uppercase text-stone-400">Specialized Courts & Wings:</p>
                <div className="flex flex-wrap gap-1">
                  {court.specialCourts.map((sp, idx) => (
                    <span key={idx} className="text-xs text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-mono">
                Jurisdiction: <span className="font-semibold text-stone-800">{court.district}</span>
              </span>
              <Link
                to={`/consultation?court=${encodeURIComponent(court.name)}`}
                className="text-xs font-mono uppercase px-3 py-1.5 bg-stone-900 text-white hover:bg-stone-800 rounded transition-colors"
              >
                Appoint Counsel
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Litigant Filing Guide Box */}
      <section className="bg-stone-50 border border-stone-200 rounded-lg p-6 sm:p-8 space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900">
          Litigant Guide: Filing & Courtroom Protocol in Delhi
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Entry to Delhi High Court and District Courts requires valid government photo identification (Aadhaar Card, Voter ID, or Passport). Litigants appearing for hearings must carry physical passes issued at the Reception Gate or biometric entry slip.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-stone-700">
          <div className="p-3 bg-white border border-stone-200 rounded">
            <p className="font-semibold text-stone-900 mb-1">Morning Mentioning</p>
            <p className="text-stone-500">Urgent matters must be mentioned before the respective bench between 10:30 AM and 11:00 AM.</p>
          </div>
          <div className="p-3 bg-white border border-stone-200 rounded">
            <p className="font-semibold text-stone-900 mb-1">Pass Counter Timings</p>
            <p className="text-stone-500">Entry passes are generated at the gate between 9:30 AM and 3:30 PM with hearing date proof.</p>
          </div>
          <div className="p-3 bg-white border border-stone-200 rounded">
            <p className="font-semibold text-stone-900 mb-1">Electronic Filing (e-Courts)</p>
            <p className="text-stone-500">Mandatory e-filing for commercial, company, and tax cases via Delhi High Court portal.</p>
          </div>
        </div>
      </section>

      <AdPlaceholder format="leaderboard" />
    </div>
  );
};
