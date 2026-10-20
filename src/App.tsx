/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SavedProvider } from './context/SavedContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { SavedBookmarksModal } from './components/SavedBookmarksModal';
import { DisclaimerModal } from './components/DisclaimerModal';

import { HomePage } from './pages/HomePage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { PracticeAreaDetailPage } from './pages/PracticeAreaDetailPage';
import { AdvocatesPage } from './pages/AdvocatesPage';
import { AdvocateDetailPage } from './pages/AdvocateDetailPage';
import { CourtsPage } from './pages/CourtsPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Auto scroll to top on hash route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);

  return (
    <SavedProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
          <Navbar 
            onOpenSearch={() => setSearchOpen(true)}
            onOpenBookmarks={() => setBookmarksOpen(true)}
          />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/practice-areas" element={<PracticeAreasPage />} />
              <Route path="/practice-areas/:slug" element={<PracticeAreaDetailPage />} />
              <Route path="/advocates" element={<AdvocatesPage />} />
              <Route path="/advocates/:id" element={<AdvocateDetailPage />} />
              <Route path="/courts" element={<CourtsPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<InsightDetailPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />

          {/* Interactive Modals */}
          <SearchModal 
            isOpen={searchOpen} 
            onClose={() => setSearchOpen(false)} 
          />
          <SavedBookmarksModal 
            isOpen={bookmarksOpen} 
            onClose={() => setBookmarksOpen(false)} 
          />
          <DisclaimerModal />
        </div>
      </HashRouter>
    </SavedProvider>
  );
}
