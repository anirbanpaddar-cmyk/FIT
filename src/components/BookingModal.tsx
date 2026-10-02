import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, Flame, User, Phone, Mail, Sparkles } from 'lucide-react';
import { CLASS_CATEGORIES } from '../data/studioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillClass?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillClass
}) => {
  const [selectedClass, setSelectedClass] = useState(prefillClass || 'ZUMBA FITNESS');
  const [selectedDay, setSelectedDay] = useState('Monday - 7:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Sync if prefill changes
  React.useEffect(() => {
    if (prefillClass) {
      setSelectedClass(prefillClass);
    }
  }, [prefillClass]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Generate reference ID
    const ref = `NF-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-[28px] bg-[#1a1a1a] border border-white/20 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B35]">
                FREE TRIAL CLASS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                ক্লাস বুকিং করুন
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                প্রথম ট্রায়াল ক্লাস সম্পূর্ণ ফ্রি। কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {/* Class Selection */}
              <div>
                <label className="block text-xs font-bold uppercase text-white/80 mb-1.5">
                  ক্লাসের ধরন নির্বাচন করুন *
                </label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#252525] border border-white/15 text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                >
                  {CLASS_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.title}>
                      {cat.title} ({cat.tagline})
                    </option>
                  ))}
                  <option value="Morning Zumba — 7:00 AM">Monday: Morning Zumba — 7:00 AM</option>
                  <option value="Dance Fitness — 6:30 PM">Wednesday: Dance Fitness — 6:30 PM</option>
                  <option value="Zumba Cardio — 7:00 PM">Friday: Zumba Cardio — 7:00 PM</option>
                  <option value="Weekend Dance Workout — 8:00 AM">Saturday: Weekend Dance Workout — 8:00 AM</option>
                  <option value="Group Zumba — 9:00 AM">Sunday: Group Zumba — 9:00 AM</option>
                </select>
              </div>

              {/* Slot / Day */}
              <div>
                <label className="block text-xs font-bold uppercase text-white/80 mb-1.5">
                  পছন্দের সময় ও বার *
                </label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#252525] border border-white/15 text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                >
                  <option value="Monday - 7:00 AM">সোমবার সকাল ৭:০০</option>
                  <option value="Wednesday - 6:30 PM">বুধবার সন্ধ্যা ৬:৩০</option>
                  <option value="Friday - 7:00 PM">শুক্রবার সন্ধ্যা ৭:০০</option>
                  <option value="Saturday - 8:00 AM">শনিবার সকাল ৮:০০</option>
                  <option value="Sunday - 9:00 AM">রবিবার সকাল ৯:০০</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase text-white/80 mb-1.5">
                  আপনার নাম (Full Name) *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    required
                    placeholder="উদাঃ অনামিকা রায়"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#252525] border border-white/15 text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase text-white/80 mb-1.5">
                  মোবাইল নম্বর (WhatsApp) *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98301 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#252525] border border-white/15 text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase text-white/80 mb-1.5">
                  ইমেল ঠিকানা (Email)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    placeholder="you@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#252525] border border-white/15 text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase text-white/80 mb-1.5">
                  কোনো শারীরিক সীমাবদ্ধতা বা বার্তা (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="যেমনঃ হাঁটুর ব্যথা বা প্রথমবার জুম্বা করছি..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#252525] border border-white/15 text-white focus:outline-none focus:border-[#FF6B35] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#FF6B35] hover:bg-[#ff7e4f] text-black font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(255,107,53,0.4)] transition-all transform active:scale-95"
                >
                  কনফার্ম বুকিং (ফ্রি ট্রায়াল)
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#B8FF00]/20 border border-[#B8FF00]/40 flex items-center justify-center mx-auto mb-4 text-[#B8FF00]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#B8FF00] font-bold">
              BOOKING CONFIRMED!
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              অভিনন্দন, {name}!
            </h3>
            <p className="text-sm text-white/70 mt-2 max-w-sm mx-auto">
              আপনার ফ্রি জুম্বা ট্রায়াল ক্লাস সফলভাবে সংরক্ষিত হয়েছে।
            </p>

            {/* Reference card */}
            <div className="my-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">রেফারেন্স কোড:</span>
                <span className="font-mono font-bold text-[#FF6B35] text-sm">
                  {bookingRef}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">নির্বাচিত ক্লাস:</span>
                <span className="text-white font-medium">{selectedClass}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">সময় ও স্লট:</span>
                <span className="text-white font-medium">{selectedDay}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">স্টুডিও লোকেশন:</span>
                <span className="text-white font-medium">সাউদার্ন অ্যাভিনিউ, কলকাতা</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-xs text-[#FFF8F0]/90 mb-6">
              💡 <strong>টিপ:</strong> ক্লাসের দিন আরামদায়ক স্নিকার্স, স্পোর্টস পোশাক এবং একটি জলের বোতল সাথে রাখুন।
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider text-xs transition-colors"
            >
              বন্ধ করুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
