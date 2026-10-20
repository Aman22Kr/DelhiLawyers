import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Bookmark, PhoneCall, Search } from 'lucide-react';
import { useSaved } from '../context/SavedContext';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenBookmarks?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenBookmarks }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { savedArticles, savedAdvocates } = useSaved();
  const totalSaved = savedArticles.length + savedAdvocates.length;

  const navLinks = [
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'Advocates', href: '/advocates' },
    { label: 'Courts', href: '/courts' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Bar Emergency Helpline & Court Hours Ribbon */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Delhi Courts Roster Active: High Court & 7 District Courts
            </span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span className="hidden md:inline text-stone-400">
              Supreme Court & High Court Chambers, New Delhi
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href="tel:+911149827200" 
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Emergency Bail Desk: +91 11 4982 7200</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header (Strict 3-zone contract) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single Brand Wordmark */}
            <Link 
              to="/" 
              className="flex items-center gap-3 text-stone-900 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
            >
              <div className="w-10 h-10 rounded-sm bg-stone-900 text-amber-400 flex items-center justify-center shadow-sm">
                <Scale className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-950">
                  DelhiLawyers
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500">
                  Advocates & Counsel
                </span>
              </div>
            </Link>

            {/* Zone 2: 4-5 Clean Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive(link.href)
                      ? 'text-amber-700 font-semibold'
                      : 'hover:text-stone-950'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`py-1 transition-colors whitespace-nowrap shrink-0 ${
                  isActive('/contact') ? 'text-amber-700 font-semibold' : 'hover:text-stone-950'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Zone 3: 1 Primary Action + Quick Utilities */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Search Trigger */}
              {onOpenSearch && (
                <button
                  type="button"
                  onClick={onOpenSearch}
                  aria-label="Search Legal Practice"
                  className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-100 rounded transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}

              {/* Saved Items Counter */}
              {onOpenBookmarks && (
                <button
                  type="button"
                  onClick={onOpenBookmarks}
                  aria-label="View Saved Items"
                  className="relative p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-100 rounded transition-colors"
                >
                  <Bookmark className="w-4 h-4" />
                  {totalSaved > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-amber-600 text-white text-[10px] font-mono flex items-center justify-center font-bold">
                      {totalSaved}
                    </span>
                  )}
                </button>
              )}

              {/* Primary Action Button */}
              <Link
                to="/consultation"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-stone-900 hover:bg-stone-800 active:scale-[0.98] transition-all rounded shadow-sm whitespace-nowrap shrink-0"
              >
                Book Consultation
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 text-stone-700 hover:text-stone-950 rounded hover:bg-stone-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 animate-slide-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm rounded ${
                    isActive(link.href)
                      ? 'bg-amber-50 text-amber-900 font-semibold'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm rounded ${
                  isActive('/contact')
                    ? 'bg-amber-50 text-amber-900 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                Contact & Chambers
              </Link>
              <div className="pt-3 border-t border-stone-100">
                <Link
                  to="/consultation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 rounded"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
