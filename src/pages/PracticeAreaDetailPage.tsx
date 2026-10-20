import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Scale, 
  ArrowLeft, 
  Clock, 
  Landmark, 
  FileText, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Calendar,
  AlertCircle
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/legalData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const PracticeAreaDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const practice = PRACTICE_AREAS.find((p) => p.slug === slug);

  if (!practice) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <AlertCircle className="w-12 h-12 text-amber-600 mx-auto" />
        <h1 className="font-serif text-3xl font-bold text-stone-900">
          Practice Area Not Found
        </h1>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          The requested legal service vertical does not exist or has been relocated within our Delhi Bar directory.
        </p>
        <Link
          to="/practice-areas"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded text-xs font-mono uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Practice Areas</span>
        </Link>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Practice Areas</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-amber-400 font-semibold">{practice.category}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-300">{practice.caseCount}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Jurisdiction: {practice.jurisdiction}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white max-w-4xl leading-tight">
            {practice.title}
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed pt-2">
            {practice.heroSummary}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to={`/consultation?practice=${encodeURIComponent(practice.title)}`}
              className="px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Case Evaluation</span>
            </Link>
            <div className="text-xs text-stone-400 font-mono flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>Timeline: {practice.estimatedTimeline}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Core Services Breakdown */}
            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Key Reliefs & Legal Services Offered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {practice.keyServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-stone-200 rounded-md flex items-start gap-2.5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step Courtroom Procedure */}
            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Standard Legal Procedure & Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                From pre-institution document audit to final decree execution, how our counsels navigate Delhi court procedures:
              </p>
              <div className="space-y-4 pt-2">
                {practice.procedureSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-stone-50 border border-stone-200 rounded-md flex items-start gap-4"
                  >
                    <div className="w-7 h-7 rounded-full bg-stone-900 text-amber-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-stone-900 mb-1">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Required Documents Checklist */}
            <section className="space-y-4 bg-white border border-stone-200 rounded-lg p-6">
              <div className="flex items-center gap-2 text-stone-900">
                <FileText className="w-5 h-5 text-amber-700" />
                <h2 className="font-serif text-xl font-bold">
                  Document Checklist for Case Evaluation
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-stone-600">
                Please prepare legible photocopies or digital PDFs of the following documents prior to initial consultation:
              </p>
              <ul className="space-y-2.5 pt-2">
                {practice.requiredDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Frequently Asked Questions Accordion */}
            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Frequently Asked Questions ({practice.title})
              </h2>
              <div className="space-y-3">
                {practice.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-stone-200 rounded-md bg-white overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-stone-900">
                        {faq.question}
                      </span>
                      {openFaqIndex === idx ? (
                        <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === idx && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Statutes & Booking Action */}
          <div className="lg:col-span-4 space-y-6">
            {/* Consultation Booking Card */}
            <div className="bg-stone-900 text-white p-6 rounded-lg border border-stone-800 space-y-4 shadow-sm sticky top-24">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Case Intake & Consultation
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Consult with Delhi Counsel
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Receive confidential strategic advice on court listings, draft pleadings, and interim relief prospects for {practice.title}.
              </p>

              <div className="space-y-2 text-xs text-stone-400 border-t border-stone-800 pt-3">
                <p>• In-Chamber or Encrypted Video Meeting</p>
                <p>• Upfront Fee & Written Retainer</p>
                <p>• Complete Attorney-Client Privilege</p>
              </div>

              <Link
                to={`/consultation?practice=${encodeURIComponent(practice.title)}`}
                className="w-full block text-center py-3 text-xs font-mono font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Statutory References Card */}
            <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-3">
              <h3 className="font-serif text-base font-bold text-stone-900">
                Governing Legislation
              </h3>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {practice.statutes.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 font-mono">
                    <span className="text-amber-800">§</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Court Jurisdiction */}
            <div className="bg-stone-50 border border-stone-200 p-6 rounded-lg space-y-2">
              <div className="flex items-center gap-1.5 text-stone-800 font-semibold text-xs uppercase font-mono">
                <Landmark className="w-3.5 h-3.5 text-amber-700" />
                <span>Courts of Appearance</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {practice.jurisdiction}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ad slot near bottom */}
      <AdPlaceholder format="leaderboard" />
    </div>
  );
};
