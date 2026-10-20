import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, MapPin, Phone, Mail, ShieldAlert, ExternalLink } from 'lucide-react';
import { BAR_COUNCIL_DISCLAIMER } from '../data/legalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Bar Council of India Disclaimer Banner */}
      <div className="bg-stone-900/90 border-b border-stone-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs text-stone-400 leading-relaxed">
            <span className="font-semibold text-stone-200 block mb-1">
              Bar Council of India Statutory Compliance & Information Notice
            </span>
            <p>{BAR_COUNCIL_DISCLAIMER}</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Chamber Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-stone-800 text-amber-400 flex items-center justify-center border border-stone-700">
                <Scale className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                DelhiLawyers
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              Established legal advocacy network and litigation counsel representing individuals, corporations, and institutions across the Supreme Court of India, Delhi High Court, and all National Capital Region District Courts.
            </p>
            
            <div className="pt-2 space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Central Chamber: 402, Barakhamba Road, Connaught Place, New Delhi 110001</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Court Chambers: Patiala House Courts & Delhi High Court Lawyers Chambers Block</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+911149827200" className="hover:text-white transition-colors">
                  +91 11 4982 7200 / +91 98101 22940
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:contact@delhilawyers.in" className="hover:text-white transition-colors">
                  registry@delhilawyers.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Core Practice Areas */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Practice Areas
            </p>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link to="/practice-areas/criminal-defense-bail" className="hover:text-white transition-colors">
                  Criminal Defense & Bail
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/matrimonial-divorce-custody" className="hover:text-white transition-colors">
                  Matrimonial & Divorce
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/property-real-estate-disputes" className="hover:text-white transition-colors">
                  Property & RERA Litigation
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/corporate-commercial-litigation" className="hover:text-white transition-colors">
                  Corporate & NCLT Disputes
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/cheque-bounce-section-138" className="hover:text-white transition-colors">
                  Section 138 Cheque Bounce
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/constitutional-writ-petitions" className="hover:text-white transition-colors">
                  Constitutional Writs (Art 226)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Court Coverage */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Delhi Courts
            </p>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link to="/courts" className="hover:text-white transition-colors">
                  Supreme Court of India
                </Link>
              </li>
              <li>
                <Link to="/courts" className="hover:text-white transition-colors">
                  High Court of Delhi
                </Link>
              </li>
              <li>
                <Link to="/courts" className="hover:text-white transition-colors">
                  Patiala House Courts
                </Link>
              </li>
              <li>
                <Link to="/courts" className="hover:text-white transition-colors">
                  Tis Hazari Courts
                </Link>
              </li>
              <li>
                <Link to="/courts" className="hover:text-white transition-colors">
                  Saket Courts Complex
                </Link>
              </li>
              <li>
                <Link to="/courts" className="hover:text-white transition-colors">
                  NCLT & Appellate Tribunals
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Resources & Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Legal Desk
            </p>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link to="/advocates" className="hover:text-white transition-colors">
                  Advocate Profiles
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  Articles & Judgments
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Chamber Heritage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Emergency Bail Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <p>© {new Date().getFullYear()} DelhiLawyers. All rights reserved across National Capital Territory of Delhi.</p>
          <div className="flex items-center gap-4">
            <span>Maintainer: Aman22kr</span>
            <span>·</span>
            <span className="text-stone-400">Static GitHub Pages Build</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
