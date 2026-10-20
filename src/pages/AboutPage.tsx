import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Landmark, ShieldCheck, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
            <Scale className="w-4 h-4" />
            <span>Chambers Heritage & Professional Ethics</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white max-w-4xl leading-tight">
            Advocacy Rooted in Law, Rigor & Trial Integrity
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            DelhiLawyers was founded on the uncompromising principle that every client—whether an individual defending liberty or an enterprise safeguarding assets—deserves tenacious, transparent, and intellectually formidable courtroom representation.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Chambers Story & Image Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
              The Delhi Heritage
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Three Decades Across the Corridors of Justice
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                From our foundational chambers at Barakhamba Road, Connaught Place, and daily appearances at the High Court of Delhi on Sher Shah Road, DelhiLawyers has grown into a respected legal advocacy collective spanning all seven District Court complexes.
              </p>
              <p>
                Unlike multi-disciplinary consultancies, our core identity is trial and appellate litigation. We draft our own pleadings, conduct our own cross-examinations, and argue our own matters before Single, Division, and Constitutional Benches.
              </p>
              <p>
                Our advocates are active members of the Supreme Court Bar Association (SCBA), Delhi High Court Bar Association (DHCBA), and New Delhi Bar Association (NDBA).
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-stone-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                DHCBA Enrolled Counsels
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                SCBA Life Members
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Full Bar Council Compliance
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-lg overflow-hidden border border-stone-200 shadow-md">
            <img
              src="/src/assets/images/court_gavel_constitution_1792496489306.jpg"
              alt="Advocate gavel and law books in chamber"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Our Professional Pillars
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Guiding our chambers in every pleading, conference, and argument.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Courtroom Tenacity',
                desc: 'Uncompromising preparation of case facts, forensic cross-examination, and commanding legal jurisprudence.'
              },
              {
                title: 'Fee Transparency',
                desc: 'Clear, upfront, written fee agreements in line with Bar Council of India guidelines without hidden charges.'
              },
              {
                title: 'Absolute Privilege',
                desc: 'Every document and consultation is protected under Section 126 of the Evidence Act / Section 132 BSA.'
              },
              {
                title: 'Pro Bono Commitment',
                desc: 'We dedicate regular courtroom hours to indigent litigants and public interest matters before Delhi High Court.'
              }
            ].map((pillar, i) => (
              <div key={i} className="p-5 bg-white border border-stone-200 rounded-lg space-y-2">
                <span className="font-mono text-xs font-bold text-amber-800">0{i + 1}.</span>
                <h3 className="font-serif text-base font-bold text-stone-900">{pillar.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bar Council Compliance Card */}
        <section className="bg-stone-100 border border-stone-200 rounded-lg p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-bold font-serif text-lg">
            <ShieldCheck className="w-5 h-5 text-amber-800" />
            <span>Bar Council of India Ethics Commitment</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            The rules of the Bar Council of India strictly prohibit legal practitioners from soliciting clients, issuing commercial advertisements, or claiming guaranteed case outcomes. This portal is maintained purely to share legal information, published case judgments, and courtroom logistics with the public.
          </p>
        </section>
      </div>

      <AdPlaceholder format="leaderboard" />
    </div>
  );
};
