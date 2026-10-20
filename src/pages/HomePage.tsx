import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  ShieldCheck, 
  ArrowRight, 
  Landmark, 
  Users, 
  FileText, 
  PhoneCall, 
  ChevronRight, 
  Gavel, 
  Calendar,
  Clock,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { PRACTICE_AREAS, ADVOCATES, COURTS, LEGAL_INSIGHTS, TESTIMONIALS } from '../data/legalData';
import { YouTubePlaceholder } from '../components/YouTubePlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { useSaved } from '../context/SavedContext';

export const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { isArticleSaved, toggleSaveArticle } = useSaved();

  const categories = ['All', 'Criminal', 'Family', 'Real Estate', 'Corporate', 'Civil & Commercial'];

  const filteredPractice = activeCategory === 'All' 
    ? PRACTICE_AREAS 
    : PRACTICE_AREAS.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section: Classical Delhi Courthouse Visual + Trust Copy */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/hero_delhi_legal_court_1792496488341.jpg"
            alt="Delhi High Court architectural facade"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-900/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl space-y-6 animate-entrance">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest rounded-xs">
              <Scale className="w-3.5 h-3.5 text-amber-400" />
              <span>Delhi Bar Practice & Litigation Counsel</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Premier Legal Counsel Across the Courts of Delhi
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Strategic trial defense, constitutional writ petitions, matrimonial resolutions, and corporate arbitration before the Supreme Court of India, Delhi High Court, and all seven District Court complexes.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-stone-950 bg-amber-400 hover:bg-amber-300 transition-all rounded shadow-lg font-mono"
              >
                Book Chamber Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/practice-areas"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-stone-200 border border-stone-600 hover:bg-white/10 transition-colors rounded font-mono"
              >
                Explore Practice Areas
              </Link>
            </div>

            {/* Quick Consultation Bar */}
            <div className="pt-6 border-t border-stone-800/80 flex flex-wrap items-center gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Confidential Attorney-Client Privilege</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Urgent 24/7 Bail & Remand Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Upfront Written Fee Transparency</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Rigor Strip (Claim-to-Proof Adjacency) */}
        <div className="relative border-t border-stone-800 bg-stone-950/90 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">28+ Years</p>
              <p className="text-xs text-stone-400 uppercase tracking-wider font-mono">Senior Bar Standing</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">3,500+</p>
              <p className="text-xs text-stone-400 uppercase tracking-wider font-mono">Litigations Handled</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">8 Courts</p>
              <p className="text-xs text-stone-400 uppercase tracking-wider font-mono">Daily Delhi Coverage</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">100%</p>
              <p className="text-xs text-stone-400 uppercase tracking-wider font-mono">Statutory Ethics Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Interactive Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-1">
              <Gavel className="w-4 h-4" />
              <span>Specialized Legal Verticals</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
              Practice Areas & Courtroom Representation
            </h2>
          </div>

          <Link
            to="/practice-areas"
            className="text-xs font-mono font-semibold text-amber-800 hover:text-amber-950 flex items-center gap-1 group"
          >
            <span>View All Practice Verticals</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Buttons (Functional Tabs) */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-stone-200/80 rounded-lg max-w-fit mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeCategory === cat
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPractice.map((area) => (
            <div
              key={area.id}
              className="bg-white border border-stone-200/80 rounded-lg p-6 flex flex-col justify-between hover:border-stone-400 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3 font-mono">
                  <span>{area.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-800 font-medium">{area.caseCount}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors mb-2">
                  <Link to={`/practice-areas/${area.slug}`} className="hover:underline">
                    {area.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {area.shortDesc}
                </p>

                <div className="space-y-1.5 border-t border-stone-100 pt-3">
                  <p className="text-[11px] font-mono uppercase text-stone-400 font-medium">Key Court Services:</p>
                  <ul className="space-y-1">
                    {area.keyServices.slice(0, 3).map((srv, idx) => (
                      <li key={idx} className="text-xs text-stone-600 flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold shrink-0">›</span>
                        <span className="line-clamp-1">{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="text-xs font-semibold text-stone-900 group-hover:text-amber-800 flex items-center gap-1"
                >
                  <span>Detailed Procedure & Docs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to={`/consultation?practice=${encodeURIComponent(area.title)}`}
                  className="text-xs font-mono uppercase px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors"
                >
                  Consult
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delhi Courts Roster & Jurisdiction Map */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-1">
              Judicial Infrastructure Coverage
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
              Delhi Courts Representation Matrix
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Our advocates maintain active daily registry filings, mentions, and hearings across all judicial venues in the National Capital Territory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {COURTS.map((court) => (
              <div
                key={court.id}
                className="bg-white border border-stone-200 rounded-md p-5 flex flex-col justify-between hover:border-stone-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mb-2">
                    <span className="text-amber-800 font-semibold">{court.type}</span>
                    <span>{court.district}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-stone-900 mb-1.5">
                    {court.name}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                    {court.description}
                  </p>
                  <p className="text-[11px] text-stone-500 flex items-center gap-1 font-mono">
                    <Landmark className="w-3 h-3 text-stone-400" />
                    <span>Metro: {court.metroAccess.split('-')[0]}</span>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <Link
                    to="/courts"
                    className="text-amber-800 font-semibold hover:underline flex items-center gap-1"
                  >
                    View Court Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamber Advocates & Counsel Profile Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-1">
              Senior Advocates & Chambers
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
              Experienced Trial Advocates & Counsel
            </h2>
          </div>
          <Link
            to="/advocates"
            className="text-xs font-mono font-semibold text-amber-800 hover:text-amber-950 flex items-center gap-1"
          >
            <span>View All Advocates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Senior Advocate Spotlight Card */}
          <div className="lg:col-span-1 bg-white border border-stone-200 rounded-lg overflow-hidden flex flex-col justify-between shadow-sm">
            <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
              <img
                src="/src/assets/images/chamber_advocate_consult_1792496489631.jpg"
                alt="Senior Advocate in chamber with law reports"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-stone-900/90 text-amber-400 text-[10px] font-mono uppercase px-2 py-0.5 rounded">
                Senior Advocate
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Senior Counsel K. V. Raman
                </h3>
                <p className="text-xs text-stone-500 font-mono mb-2">
                  D/412/1996 · 28 Years Supreme Court & High Court Bar
                </p>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Former panel counsel specializing in landmark constitutional appeals, complex white-collar defense, and high-value international arbitrations.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <Link
                  to="/advocates/adv-1"
                  className="text-xs font-semibold text-stone-900 hover:text-amber-800"
                >
                  Full Bio & Precedents
                </Link>
                <Link
                  to="/consultation?advocate=adv-1"
                  className="text-xs font-mono px-3 py-1 bg-stone-900 text-white rounded hover:bg-stone-800"
                >
                  Schedule
                </Link>
              </div>
            </div>
          </div>

          {/* Matrimonial & Criminal Leads */}
          {ADVOCATES.slice(1, 3).map((adv) => (
            <div
              key={adv.id}
              className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between hover:border-stone-400 transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
                  <span>{adv.experienceYears} Years Experience</span>
                  <span className="text-amber-700 font-semibold">{adv.rating} ★ ({adv.reviewCount})</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                  {adv.name}
                </h3>
                <p className="text-xs text-amber-900 font-medium mb-3">
                  {adv.designation}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {adv.bio}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-stone-100">
                  <p className="text-[11px] font-mono text-stone-400 uppercase">Courts of Regular Practice:</p>
                  <div className="flex flex-wrap gap-1">
                    {adv.courts.map((court, i) => (
                      <span key={i} className="text-xs text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                        {court}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <Link
                  to={`/advocates/${adv.id}`}
                  className="text-xs font-semibold text-stone-900 hover:text-amber-800"
                >
                  View Case History & Credentials
                </Link>
                <Link
                  to={`/consultation?advocate=${adv.id}`}
                  className="text-xs font-mono px-3 py-1 bg-stone-900 text-white rounded hover:bg-stone-800"
                >
                  Schedule
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate & High-Value Litigation Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-xl overflow-hidden border border-stone-800 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Corporate Dispute Resolution
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white leading-snug">
                Strategic Corporate & Commercial Counsel for High-Stakes Battles
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed">
                Representing board members, investors, and emerging enterprises before the National Company Law Tribunal (NCLT New Delhi), the Commercial Division of the High Court of Delhi, and international arbitration tribunals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-y border-stone-800 text-xs">
              <div>
                <p className="font-semibold text-stone-200">Insolvency & Bankruptcy (IBC)</p>
                <p className="text-stone-400">Section 7 & 9 claims, operational debt restructuring.</p>
              </div>
              <div>
                <p className="font-semibold text-stone-200">Arbitration Enforcement</p>
                <p className="text-stone-400">Section 9 interim protection and arbitral award executions.</p>
              </div>
            </div>

            <div>
              <Link
                to="/practice-areas/corporate-commercial-litigation"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
              >
                <span>Explore Corporate Practice</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px]">
            <img
              src="/src/assets/images/corporate_legal_meeting_1792496488638.jpg"
              alt="Corporate legal conference room in Delhi"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* YouTube Video Legal Briefing Placeholder Area (Preserves aspect ratio and layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-stone-200 rounded-lg p-6 sm:p-8 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
                Judicial Insight & Case Briefings
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-950">
                Delhi High Court Practice Procedures Video Briefing
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Watch our senior associates discuss practical court registry filing checklists, urgent vacation bench mentionings, and electronic filing compliance under Delhi High Court e-Courts protocols.
              </p>
              <div className="text-xs text-stone-500 space-y-1 font-mono pt-2">
                <p>• Topic: Anticipatory Bail Mentioning & Defect Curing</p>
                <p>• Duration: 14 Minutes 20 Seconds</p>
                <p>• Speakers: Adv. Rajeshwar Malhotra & Adv. Arjun Singhania</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* Blank YouTube Placeholder conforming to exact requirements */}
              <YouTubePlaceholder
                title="Delhi High Court Criminal Registry: Filing Urgent Bail Petitions & Mentioning"
                duration="14:20"
                topic="Delhi High Court Procedures"
                aspectRatio="16:9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verified Client Testimonials & Outcomes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-1">
            Courtroom Track Record
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
            Client Experiences & Matter Outcomes
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Real feedback from individuals and businesses we have represented across Delhi's judicial corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span className="font-semibold text-stone-800">{t.court}</span>
                  <span>{t.year}</span>
                </div>
                <p className="text-xs font-mono text-amber-800 uppercase tracking-wide">
                  Matter: {t.matterType}
                </p>
                <blockquote className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "{t.comment}"
                </blockquote>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-stone-900">{t.clientName}</p>
                  <p className="text-[11px] text-emerald-700 font-medium">Result: {t.outcome}</p>
                </div>
                <div className="text-amber-600 font-mono font-bold">5.0 ★</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Legal Insights & Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-1">
              Articles & Judgments
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
              Legal Knowledge & Procedural Guides
            </h2>
          </div>
          <Link
            to="/insights"
            className="text-xs font-mono font-semibold text-amber-800 hover:text-amber-950 flex items-center gap-1"
          >
            <span>Browse All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEGAL_INSIGHTS.map((insight) => (
            <article
              key={insight.slug}
              className="bg-white border border-stone-200 rounded-lg p-5 flex flex-col justify-between hover:border-stone-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
                  <span>{insight.category}</span>
                  <span>{insight.readTime}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-stone-900 hover:text-amber-800 transition-colors mb-2 line-clamp-2">
                  <Link to={`/insights/${insight.slug}`}>
                    {insight.title}
                  </Link>
                </h3>
                <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed">
                  {insight.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-mono text-[11px]">{insight.date}</span>
                <button
                  type="button"
                  onClick={() => toggleSaveArticle(insight.slug)}
                  className={`p-1 rounded hover:bg-stone-100 transition-colors ${
                    isArticleSaved(insight.slug) ? 'text-amber-600 font-bold' : 'text-stone-400'
                  }`}
                  title={isArticleSaved(insight.slug) ? 'Saved' : 'Save article'}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Compact Advertisement Placeholder Section */}
      <AdPlaceholder format="leaderboard" />

      {/* Emergency Consultation Action Strip */}
      <section className="bg-stone-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Need Immediate Legal Counsel in Delhi?
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
              Urgent anticipatory bail petitions, police station representation, or matrimonial mediation. Our advocates are available for confidential consultations.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:+911149827200"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-wider text-amber-400 border border-amber-500/40 hover:bg-amber-500/10 rounded transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Helpline</span>
            </a>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
