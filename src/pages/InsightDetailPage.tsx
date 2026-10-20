import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  BookOpen, 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Clock, 
  User, 
  CheckCircle2, 
  Scale, 
  Calendar,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { LEGAL_INSIGHTS } from '../data/legalData';
import { useSaved } from '../context/SavedContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isArticleSaved, toggleSaveArticle } = useSaved();
  const [copied, setCopied] = useState(false);

  const insight = LEGAL_INSIGHTS.find((i) => i.slug === slug);

  if (!insight) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <AlertCircle className="w-12 h-12 text-amber-600 mx-auto" />
        <h1 className="font-serif text-3xl font-bold text-stone-900">
          Article Not Found
        </h1>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          The requested legal insight or case briefing could not be located.
        </p>
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded text-xs font-mono uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Insights</span>
        </Link>
      </div>
    );
  }

  const isSaved = isArticleSaved(insight.slug);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedArticles = LEGAL_INSIGHTS.filter((i) => i.slug !== insight.slug).slice(0, 2);

  return (
    <div className="space-y-12 pb-16">
      {/* Article Header */}
      <section className="bg-stone-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-4xl mx-auto space-y-5">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Legal Insights</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-400">
            <span className="text-amber-400 font-bold uppercase">{insight.category}</span>
            <span>·</span>
            <span>{insight.readTime}</span>
            <span>·</span>
            <span>Published {insight.date}</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {insight.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-stone-800 text-xs">
            <div className="flex items-center gap-2 text-stone-300 font-mono">
              <User className="w-4 h-4 text-amber-400" />
              <span>By {insight.author}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-800 text-stone-300 hover:bg-stone-700 transition-colors font-mono text-[11px]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share Article'}</span>
              </button>
              <button
                type="button"
                onClick={() => toggleSaveArticle(insight.slug)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors font-mono text-[11px] ${
                  isSaved
                    ? 'bg-amber-400 text-stone-950 font-bold'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{isSaved ? 'Saved in Library' : 'Save for Reference'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Key Takeaways Box */}
        <div className="bg-amber-50/60 border border-amber-200/80 rounded-lg p-6 space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-700" />
            Executive Legal Summary & Key Rules
          </p>
          <ul className="space-y-2">
            {insight.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800 font-medium">
                <span className="text-amber-700 font-bold">›</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-stone-800 text-sm sm:text-base leading-relaxed">
          {insight.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Statutory Citations & Precedents */}
        <div className="bg-stone-100 border border-stone-200 rounded-lg p-6 space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider text-stone-700 font-bold flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-amber-800" />
            Statutory Provisions & Judicial Authorities Cited
          </p>
          <ul className="space-y-1.5 text-xs text-stone-600 font-mono">
            {insight.legalCitations.map((cite, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-800">§</span>
                <span>{cite}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Consultation Prompt */}
        <div className="bg-stone-900 text-white rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-lg font-bold text-white">
              Facing an active matter related to this topic?
            </h3>
            <p className="text-xs text-stone-400">
              Speak directly with our senior advocates in chamber or via confidential video consultation.
            </p>
          </div>
          <Link
            to="/consultation"
            className="shrink-0 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-mono uppercase text-xs font-bold rounded transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        {/* Related Articles */}
        <div className="pt-8 border-t border-stone-200 space-y-4">
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Related Legal Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                className="p-4 bg-white border border-stone-200 rounded-md space-y-2 hover:border-stone-400 transition-colors"
              >
                <span className="text-[10px] font-mono uppercase text-amber-800 font-semibold">
                  {rel.category}
                </span>
                <h4 className="font-serif text-sm font-bold text-stone-900 line-clamp-2">
                  <Link to={`/insights/${rel.slug}`} className="hover:text-amber-800">
                    {rel.title}
                  </Link>
                </h4>
                <p className="text-xs text-stone-500 line-clamp-2">{rel.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AdPlaceholder format="leaderboard" />
    </div>
  );
};
