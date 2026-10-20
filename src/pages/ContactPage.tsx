import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  Building,
  ShieldAlert
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    chamberPreference: 'Connaught Place Central Chamber',
    matterType: 'Criminal & Bail',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit phone number is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required.';
    if (!formData.message.trim()) errs.message = 'Please provide brief details of your inquiry.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
          <MapPin className="w-4 h-4" />
          <span>Delhi Chambers & Court Desks</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Chambers & Emergency Consultation
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          Reach our registry desk for in-person appointments, courtroom mentions, or urgent bail representation across Delhi NCR.
        </p>
      </div>

      {/* Emergency Strip */}
      <div className="bg-stone-950 text-white rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-lg font-bold text-white">24/7 Urgent Criminal Bail & Remand Helpline</h2>
            <p className="text-xs text-stone-400 mt-1">
              For late-night detentions, police custody notices, or urgent vacation bench mentioning:
            </p>
            <p className="text-base sm:text-lg font-mono font-bold text-amber-400 mt-1">
              +91 11 4982 7200 / +91 98101 22940
            </p>
          </div>
        </div>
        <a
          href="tel:+911149827200"
          className="shrink-0 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-mono font-semibold uppercase rounded transition-colors"
        >
          Call Duty Advocate
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-entrance">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Inquiry Received by Registry
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Your inquiry has been routed to our senior counsel desk. A member of our team will contact you within 2 business hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 text-xs font-mono uppercase bg-stone-900 text-white rounded hover:bg-stone-800"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-serif text-xl font-bold text-stone-900">
                Registry Inquiry & Consultation Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs text-stone-600 font-medium">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                  />
                  {errors.name && <p className="text-xs text-rose-600">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block text-xs text-stone-600 font-medium">Phone (+91) *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                  />
                  {errors.phone && <p className="text-xs text-rose-600">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs text-stone-600 font-medium">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                  />
                  {errors.email && <p className="text-xs text-rose-600">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block text-xs text-stone-600 font-medium">Matter Classification</label>
                  <select
                    value={formData.matterType}
                    onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                  >
                    <option value="Criminal & Bail">Criminal & Bail Defense</option>
                    <option value="Matrimonial & Divorce">Matrimonial & Divorce</option>
                    <option value="Property & RERA">Property & RERA Dispute</option>
                    <option value="Corporate & NCLT">Corporate & NCLT Insolvency</option>
                    <option value="Cheque Bounce NI Act">Section 138 Cheque Bounce</option>
                    <option value="High Court Writ">High Court Writ Petition</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs text-stone-600 font-medium">Preferred Chamber Location</label>
                <select
                  value={formData.chamberPreference}
                  onChange={(e) => setFormData({ ...formData, chamberPreference: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                >
                  <option value="Connaught Place Central Chamber">Connaught Place Central Chamber (Barakhamba Rd)</option>
                  <option value="Patiala House Court Chamber">Patiala House Courts Chamber (Chamber 118)</option>
                  <option value="Delhi High Court Chamber">Delhi High Court Lawyers Block B</option>
                  <option value="Saket Court Chamber">Saket District Court Chamber</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs text-stone-600 font-medium">Brief Description of Legal Issue *</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Summarize the core facts, stage of proceedings, and your requirements..."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                />
                {errors.message && <p className="text-xs text-rose-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-stone-900 hover:bg-stone-800 text-white font-mono uppercase text-xs font-semibold rounded transition-colors inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Confidential Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Chamber Details & Map Placeholder */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 space-y-4">
            <h3 className="font-serif text-base font-bold text-stone-900">
              Chamber Addresses
            </h3>

            <div className="space-y-4 text-xs text-stone-600">
              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900">Central Chambers (Connaught Place)</p>
                  <p>402, Barakhamba Road, Connaught Place, New Delhi 110001</p>
                  <p className="text-[11px] text-stone-400 font-mono mt-0.5">Metro: Barakhamba Road (Blue Line Gate 2)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900">Patiala House Courts Chamber</p>
                  <p>Chamber No. 118, Patiala House Courts Complex, New Delhi 110001</p>
                  <p className="text-[11px] text-stone-400 font-mono mt-0.5">Metro: Mandi House (Violet/Blue Line)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900">Delhi High Court Chamber</p>
                  <p>Lawyers Chambers Block B, Sher Shah Road, New Delhi 110503</p>
                  <p className="text-[11px] text-stone-400 font-mono mt-0.5">Metro: Khan Market or High Court gate</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 text-xs text-stone-600 space-y-1.5 font-mono">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>Chamber Hours: Mon–Sat, 10:00 AM – 7:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>Court Session Hours: 10:00 AM – 4:30 PM</span>
              </div>
            </div>
          </div>

          {/* Map Layout Placeholder */}
          <div className="border border-stone-200 rounded-lg overflow-hidden bg-white">
            <div className="p-3 bg-stone-100 border-b border-stone-200 text-xs font-mono text-stone-600 flex items-center justify-between">
              <span>Chamber Map Coordinates</span>
              <span>28.6289° N, 77.2270° E</span>
            </div>
            <div className="relative aspect-video bg-stone-200/80 flex flex-col items-center justify-center p-6 text-center">
              <MapPin className="w-8 h-8 text-amber-700 mb-2 animate-bounce" />
              <p className="text-xs font-semibold text-stone-800">
                Connaught Place Central Chamber & High Court Proximity
              </p>
              <p className="text-[11px] text-stone-500 mt-1">
                Located within 5 minutes of Barakhamba Metro and 10 minutes of Delhi High Court.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AdPlaceholder format="leaderboard" />
    </div>
  );
};
