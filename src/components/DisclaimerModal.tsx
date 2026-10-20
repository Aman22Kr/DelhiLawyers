import React from 'react';
import { Scale, Check } from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { BAR_COUNCIL_DISCLAIMER } from '../data/legalData';

export const DisclaimerModal: React.FC = () => {
  const { hasAcceptedDisclaimer, acceptDisclaimer } = useSaved();

  if (hasAcceptedDisclaimer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-entrance">
      <div className="w-full max-w-xl bg-white border border-stone-300 rounded-lg shadow-2xl p-6 sm:p-8 text-stone-900">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-sm bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-stone-950">
              Bar Council of India Statutory Compliance
            </h2>
            <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
              Legal Practitioner Ethics & Terms of Access
            </p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-stone-600 leading-relaxed space-y-3 my-4 bg-stone-50 p-4 rounded border border-stone-200/80">
          <p>{BAR_COUNCIL_DISCLAIMER}</p>
          <ul className="list-disc list-inside space-y-1 text-xs text-stone-500 pt-1">
            <li>The user confirms that they have visited this site of their own accord.</li>
            <li>No advocate-client relationship is created merely by accessing this portal.</li>
            <li>Information presented does not replace certified legal counsel.</li>
          </ul>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={acceptDisclaimer}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors"
          >
            <Check className="w-4 h-4 text-amber-400" />
            <span>I Acknowledge & Agree</span>
          </button>
        </div>
      </div>
    </div>
  );
};
