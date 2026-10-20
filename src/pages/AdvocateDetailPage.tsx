import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Users, 
  ArrowLeft, 
  Star, 
  Bookmark, 
  Landmark, 
  GraduationCap, 
  Scale, 
  Calendar,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ADVOCATES } from '../data/legalData';
import { useSaved } from '../context/SavedContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AdvocateDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAdvocateSaved, toggleSaveAdvocate } = useSaved();

  const advocate = ADVOCATES.find((a) => a.id === id);

  if (!advocate) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <AlertCircle className="w-12 h-12 text-amber-600 mx-auto" />
        <h1 className="font-serif text-3xl font-bold text-stone-900">
          Advocate Profile Not Found
        </h1>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          The requested counsel profile could not be located in our Delhi Bar directory.
        </p>
        <Link
          to="/advocates"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded text-xs font-mono uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Advocates</span>
        </Link>
      </div>
    );
  }

  const isSaved = isAdvocateSaved(advocate.id);

  return (
    <div className="space-y-12 pb-16">
      {/* Advocate Header */}
      <section className="bg-stone-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <Link
            to="/advocates"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Advocates & Counsel</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-amber-400 font-bold">{advocate.barEnrollment}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-300">{advocate.experienceYears} Years Bar Experience</span>
            <span className="text-stone-600">·</span>
            <span className="flex items-center text-amber-400 font-bold">
              <Star className="w-3 h-3 fill-amber-400 mr-1" />
              {advocate.rating} ({advocate.reviewCount} client reviews)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                {advocate.name}
              </h1>
              <p className="text-stone-300 text-base sm:text-lg mt-1">
                {advocate.designation}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleSaveAdvocate(advocate.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-mono uppercase tracking-wider border transition-colors ${
                isSaved
                  ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold'
                  : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>{isSaved ? 'Saved in Chamber Records' : 'Save Counsel Profile'}</span>
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to={`/consultation?advocate=${advocate.id}`}
              className="px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment with Counsel</span>
            </Link>
            <span className="text-xs text-stone-400 font-mono">
              Chamber Consultation: {advocate.consultationFee}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            {/* Biography */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Professional Background & Bar Standing
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {advocate.bio}
              </p>
            </section>

            {/* Notable Precedents & Judgments */}
            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Notable Matters & Courtroom Precedents
              </h2>
              <div className="space-y-3">
                {advocate.notableCases.map((cs, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-stone-200 rounded-md flex items-start gap-3 shadow-2xs"
                  >
                    <Scale className="w-4 h-4 text-amber-700 shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {cs}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Specializations & Focus */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-stone-900">
                Areas of Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                {advocate.specializations.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-stone-50 border border-stone-200 rounded">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Academic Credentials */}
            <section className="space-y-3 bg-white border border-stone-200 p-6 rounded-lg">
              <div className="flex items-center gap-2 text-stone-900 font-serif text-lg font-bold">
                <GraduationCap className="w-5 h-5 text-amber-700" />
                <span>Academic & Professional Credentials</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600">
                {advocate.education}
              </p>
            </section>
          </div>

          {/* Right Column: Court Schedule & Consultation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-stone-900 text-white p-6 rounded-lg border border-stone-800 space-y-4 sticky top-24">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Direct Chamber Retainer
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Book Consultation with {advocate.name.split(' ')[1] || advocate.name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Schedule a 45-minute in-chamber or video briefing. Comprehensive case record evaluation and immediate action plan.
              </p>

              <div className="pt-2 border-t border-stone-800 text-xs text-stone-400 space-y-1.5 font-mono">
                <p>Fee: <span className="text-amber-400 font-bold">{advocate.consultationFee}</span></p>
                <p>Format: In-Chamber / Video Call</p>
              </div>

              <Link
                to={`/consultation?advocate=${advocate.id}`}
                className="w-full block text-center py-3 text-xs font-mono font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
              >
                Reserve Consultation Slot
              </Link>
            </div>

            {/* Courts Roster */}
            <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-3">
              <div className="flex items-center gap-1.5 text-stone-900 font-semibold text-xs uppercase font-mono">
                <Landmark className="w-4 h-4 text-amber-700" />
                <span>Regular Court Appearances</span>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {advocate.courts.map((court, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>{court}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <AdPlaceholder format="leaderboard" />
    </div>
  );
};
