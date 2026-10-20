import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  practiceArea: string;
  advocateId?: string;
  court?: string;
  preferredDate: string;
  preferredSlot: string;
  mode: 'In-Chamber' | 'Online Video' | 'Court Premises';
  notes: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending Review' | 'Completed';
}

interface SavedContextType {
  savedArticles: string[];
  toggleSaveArticle: (slug: string) => void;
  isArticleSaved: (slug: string) => boolean;
  
  savedAdvocates: string[];
  toggleSaveAdvocate: (id: string) => void;
  isAdvocateSaved: (id: string) => boolean;
  
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => Booking;
  cancelBooking: (id: string) => void;

  hasAcceptedDisclaimer: boolean;
  acceptDisclaimer: () => void;
}

const SavedContext = createContext<SavedContextType | undefined>(undefined);

const STORAGE_KEYS = {
  ARTICLES: 'delhilawyers_saved_articles_v1',
  ADVOCATES: 'delhilawyers_saved_advocates_v1',
  BOOKINGS: 'delhilawyers_bookings_v1',
  DISCLAIMER: 'delhilawyers_disclaimer_accepted_v1'
};

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ARTICLES);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [savedAdvocates, setSavedAdvocates] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ADVOCATES);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.DISCLAIMER) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(savedArticles));
    } catch (e) {
      console.warn('LocalStorage error while saving articles', e);
    }
  }, [savedArticles]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ADVOCATES, JSON.stringify(savedAdvocates));
    } catch (e) {
      console.warn('LocalStorage error while saving advocates', e);
    }
  }, [savedAdvocates]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    } catch (e) {
      console.warn('LocalStorage error while saving bookings', e);
    }
  }, [bookings]);

  const toggleSaveArticle = (slug: string) => {
    setSavedArticles((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const isArticleSaved = (slug: string) => savedArticles.includes(slug);

  const toggleSaveAdvocate = (id: string) => {
    setSavedAdvocates((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isAdvocateSaved = (id: string) => savedAdvocates.includes(id);

  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking => {
    const newBooking: Booking = {
      ...bookingData,
      id: `DL-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };
    setBookings((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  const cancelBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const acceptDisclaimer = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.DISCLAIMER, 'true');
    } catch {}
    setHasAcceptedDisclaimer(true);
  };

  return (
    <SavedContext.Provider
      value={{
        savedArticles,
        toggleSaveArticle,
        isArticleSaved,
        savedAdvocates,
        toggleSaveAdvocate,
        isAdvocateSaved,
        bookings,
        addBooking,
        cancelBooking,
        hasAcceptedDisclaimer,
        acceptDisclaimer
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSaved must be used within a SavedProvider');
  }
  return context;
};
