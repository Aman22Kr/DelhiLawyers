import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Scale, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  AlertCircle,
  Printer,
  Trash2,
  Building
} from 'lucide-react';
import { PRACTICE_AREAS, ADVOCATES, COURTS } from '../data/legalData';
import { useSaved, Booking } from '../context/SavedContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ConsultationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { addBooking, bookings, cancelBooking } = useSaved();

  const preselectedPractice = searchParams.get('practice') || '';
  const preselectedAdvocate = searchParams.get('advocate') || '';
  const preselectedCourt = searchParams.get('court') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practiceArea: preselectedPractice || PRACTICE_AREAS[0].title,
    advocateId: preselectedAdvocate || '',
    court: preselectedCourt || 'Delhi High Court',
    preferredDate: '',
    preferredSlot: '11:00 AM - 11:45 AM',
    mode: 'In-Chamber' as 'In-Chamber' | 'Online Video' | 'Court Premises',
    notes: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    // Set a sensible default date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => ({
      ...prev,
      preferredDate: prev.preferredDate || dateStr
    }));
  }, []);

  const timeSlots = [
    '10:30 AM - 11:15 AM (Morning Chambers)',
    '11:30 AM - 12:15 PM (Post-Mentioning Slot)',
    '02:30 PM - 03:15 PM (Afternoon Chambers)',
    '04:30 PM - 05:15 PM (Evening Conference)',
    '06:00 PM - 06:45 PM (Post-Court Conference)'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Valid 10-digit phone number is required.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email address is required.';
    }
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date.';
    if (!formData.notes.trim()) errs.notes = 'Brief description of the matter is required.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const newBooking = addBooking({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      practiceArea: formData.practiceArea,
      advocateId: formData.advocateId,
      court: formData.court,
      preferredDate: formData.preferredDate,
      preferredSlot: formData.preferredSlot,
      mode: formData.mode,
      notes: formData.notes
    });

    setConfirmedBooking(newBooking);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
          <Calendar className="w-4 h-4" />
          <span>Case Intake & Legal Consultation</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Schedule Confidential Legal Consultation
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          Book an in-person chamber consultation at Connaught Place / Patiala House or an encrypted video session. Discuss your case record, statutory remedies, and legal fees directly with Delhi advocates.
        </p>
      </div>

      {confirmedBooking ? (
        /* Confirmation Receipt (Saved to localStorage) */
        <div className="max-w-3xl mx-auto bg-white border border-stone-300 rounded-lg shadow-lg overflow-hidden animate-entrance">
          <div className="bg-stone-900 text-white p-6 sm:p-8 flex items-center justify-between border-b border-stone-800">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Consultation Receipt
              </span>
              <h2 className="font-serif text-2xl font-bold mt-1">Appointment Confirmed</h2>
              <p className="text-xs text-stone-300 mt-1 font-mono">
                Booking Reference ID: <span className="text-amber-400 font-bold">{confirmedBooking.id}</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-700 bg-stone-50 p-4 rounded border border-stone-200 font-mono">
              <div>
                <p className="text-stone-400 uppercase text-[10px]">Client Name:</p>
                <p className="font-semibold text-stone-900 text-sm">{confirmedBooking.name}</p>
              </div>
              <div>
                <p className="text-stone-400 uppercase text-[10px]">Contact Phone:</p>
                <p className="font-semibold text-stone-900">{confirmedBooking.phone}</p>
              </div>
              <div>
                <p className="text-stone-400 uppercase text-[10px]">Practice Area:</p>
                <p className="font-semibold text-stone-900">{confirmedBooking.practiceArea}</p>
              </div>
              <div>
                <p className="text-stone-400 uppercase text-[10px]">Consultation Mode:</p>
                <p className="font-semibold text-stone-900">{confirmedBooking.mode}</p>
              </div>
              <div>
                <p className="text-stone-400 uppercase text-[10px]">Date & Slot:</p>
                <p className="font-semibold text-stone-900">{confirmedBooking.preferredDate} ({confirmedBooking.preferredSlot})</p>
              </div>
              <div>
                <p className="text-stone-400 uppercase text-[10px]">Chamber Location:</p>
                <p className="font-semibold text-stone-900">402 Barakhamba Rd, Connaught Place</p>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-stone-600">
              <p className="font-semibold text-stone-800">What to Bring to Your Consultation:</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-stone-500">
                <li>Government photo identification (Aadhaar or Passport).</li>
                <li>Chronological summary of events and relevant dates.</li>
                <li>Complete copies of notices, FIRs, contracts, or court summons.</li>
                <li>Draft questions regarding court filing timelines and fees.</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 border border-stone-300 hover:bg-stone-50 rounded text-xs font-mono uppercase"
              >
                <Printer className="w-4 h-4" />
                <span>Print Confirmation Slip</span>
              </button>
              <button
                type="button"
                onClick={() => setConfirmedBooking(null)}
                className="px-5 py-2 bg-stone-900 text-white rounded text-xs font-mono uppercase hover:bg-stone-800"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Booking Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Practice Area Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold">
                  1. Select Practice Vertical *
                </label>
                <select
                  value={formData.practiceArea}
                  onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                >
                  {PRACTICE_AREAS.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} ({p.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Advocate & Court Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold">
                    2. Preferred Counsel (Optional)
                  </label>
                  <select
                    value={formData.advocateId}
                    onChange={(e) => setFormData({ ...formData, advocateId: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                  >
                    <option value="">Any Available Senior Partner</option>
                    {ADVOCATES.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name} — {a.experienceYears} Years Exp
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold">
                    3. Target Delhi Court / Forum
                  </label>
                  <select
                    value={formData.court}
                    onChange={(e) => setFormData({ ...formData, court: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                  >
                    {COURTS.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} ({c.district})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consultation Mode */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold">
                  4. Consultation Format *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { mode: 'In-Chamber', desc: 'Central Chamber, Connaught Place' },
                    { mode: 'Online Video', desc: 'Secure Google Meet / Webex Link' },
                    { mode: 'Court Premises', desc: 'Lawyers Chamber Block (High Court)' }
                  ].map((m) => (
                    <button
                      key={m.mode}
                      type="button"
                      onClick={() => setFormData({ ...formData, mode: m.mode as any })}
                      className={`p-3 text-left rounded border transition-colors ${
                        formData.mode === m.mode
                          ? 'border-stone-900 bg-stone-900 text-white font-semibold'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <p className="text-xs font-bold">{m.mode}</p>
                      <p className={`text-[11px] mt-0.5 ${formData.mode === m.mode ? 'text-stone-300' : 'text-stone-500'}`}>
                        {m.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold">
                    5. Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-rose-600">{errors.preferredDate}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold">
                    6. Preferred Slot *
                  </label>
                  <select
                    value={formData.preferredSlot}
                    onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                  >
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Litigant Contact Details */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <p className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
                  7. Litigant Information (Protected by Legal Privilege)
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs text-stone-600">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Chandra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                    />
                    {errors.name && <p className="text-xs text-rose-600">{errors.name}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs text-stone-600">Phone (+91) *</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9810123456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                    />
                    {errors.phone && <p className="text-xs text-rose-600">{errors.phone}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs text-stone-600">Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                    />
                    {errors.email && <p className="text-xs text-rose-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs text-stone-600">
                    Brief Matter Summary / FIR Details / Case Number (Confidential) *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state the nature of dispute, police station or court if known, and desired outcome..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900"
                  />
                  {errors.notes && <p className="text-xs text-rose-600">{errors.notes}</p>}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-stone-500 font-mono">
                  Protected under Section 126 Evidence Act / BSA Privilege.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-stone-900 hover:bg-stone-800 text-white font-mono uppercase text-xs font-semibold rounded transition-colors shadow-sm"
                >
                  Confirm & Reserve Slot
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar: Chamber Info & Past Bookings */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-stone-900 text-white p-6 rounded-lg border border-stone-800 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Central Chambers
              </span>
              <h3 className="font-serif text-lg font-bold">Chamber Locations</h3>
              <div className="space-y-3 text-xs text-stone-300">
                <div>
                  <p className="font-semibold text-white">Connaught Place Central Chamber</p>
                  <p className="text-stone-400">402, Barakhamba Road, New Delhi 110001 (Adjacent to Barakhamba Metro Station)</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Patiala House Courts Chamber</p>
                  <p className="text-stone-400">Chamber No. 118, Patiala House Courts Complex, New Delhi 110001</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Delhi High Court Chamber</p>
                  <p className="text-stone-400">Lawyers Chambers Block B, Sher Shah Road, New Delhi 110503</p>
                </div>
              </div>
            </div>

            {/* Previously Booked Appointments from localStorage */}
            {bookings.length > 0 && (
              <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-4">
                <h3 className="font-serif text-base font-bold text-stone-900">
                  Your Consultation History ({bookings.length})
                </h3>
                <div className="space-y-3">
                  {bookings.map((b) => (
                    <div
                      key={b.id}
                      className="p-3 bg-stone-50 border border-stone-200 rounded text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-amber-800">{b.id}</span>
                        <button
                          type="button"
                          onClick={() => cancelBooking(b.id)}
                          className="text-stone-400 hover:text-rose-600 p-1"
                          title="Remove booking"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="font-semibold text-stone-900">{b.practiceArea}</p>
                      <p className="text-stone-500 font-mono text-[11px]">
                        {b.preferredDate} · {b.mode}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <AdPlaceholder format="leaderboard" />
    </div>
  );
};
