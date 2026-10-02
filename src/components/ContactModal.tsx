import React, { useState } from 'react';
import { X, Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-[28px] bg-[#1a1a1a] border border-white/20 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B35]">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                যোগাযোগ করুন
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                স্টুডিও ভিজিট বা যেকোনো প্রশ্নের জন্য সরাসরি যোগাযোগ করুন।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold uppercase text-white/80 mb-1">
                  নাম (Name) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="আপনার নাম লিখুন"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#252525] border border-white/15 text-white focus:outline-none focus:border-[#FF6B35]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-white/80 mb-1">
                  ফোন বা হোয়াটসঅ্যাপ নম্বর *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98301 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#252525] border border-white/15 text-white focus:outline-none focus:border-[#FF6B35]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-white/80 mb-1">
                  আপনার মেসেজ (Message)
                </label>
                <textarea
                  rows={3}
                  placeholder="কী বিষয়ে জানতে চান লিখুন..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#252525] border border-white/15 text-white focus:outline-none focus:border-[#FF6B35] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-[#B8FF00] hover:bg-[#cbfd27] text-black font-extrabold uppercase tracking-wider transition-all shadow-lg active:scale-95"
                >
                  মেসেজ পাঠান
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#FF6B35]" />
                +91 98301 24589
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B8FF00]" />
                সাউদার্ন অ্যাভিনিউ, কলকাতা
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#B8FF00]/20 border border-[#B8FF00]/40 flex items-center justify-center mx-auto mb-4 text-[#B8FF00]">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white">
              ধন্যবাদ, {name}!
            </h4>
            <p className="text-sm text-white/70 mt-2">
              আপনার মেসেজটি আমরা পেয়েছি। আমাদের স্টুডিও কো-অর্ডিনেটর খুব শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider"
            >
              ঠিক আছে
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
