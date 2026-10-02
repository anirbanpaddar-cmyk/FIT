import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer id="contact" className="bg-[#101010] text-[#FFF8F0]/70 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="REFi MiND Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#B8FF00] shadow-[0_0_18px_rgba(184,255,0,0.5)]"
              />
              <h3 className="text-3xl font-black tracking-tight font-sans flex items-center gap-1">
                <span className="text-[#B8FF00]">REFi</span>
                <span className="text-[#FF1493]">MiND</span>
              </h3>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#FF6B35] font-bold font-sans mt-2">
              REFi MiND — ZUMBA & DANCE FITNESS
            </p>
            <p className="text-sm text-white/70 mt-4 max-w-sm leading-relaxed">
              কলকাতার আধুনিক ও প্রফেশনাল জুম্বা ও ডান্স ফিটনেস স্টুডিও। সহজ মুভমেন্ট, 
              অনাবিল আনন্দ এবং একদল হাসিমুখ বন্ধুদের সাথে সুস্থ থাকার নতুন দিগন্ত।
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#FF1493] hover:text-[#FF1493] hover:bg-[#FF1493]/10 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#1877F2] hover:text-[#1877F2] hover:bg-[#1877F2]/10 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#FF0000] hover:text-[#FF0000] hover:bg-[#FF0000]/10 flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF6B35] transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-[#FF6B35] transition-colors">
                  Class Categories
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-[#FF6B35] transition-colors">
                  Certified Trainers
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-[#FF6B35] transition-colors">
                  Weekly Timetable
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-[#FF6B35] transition-colors">
                  Class Videos
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans mb-4">
              Studio Location & Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                <span>
                  ৪২/এ, সাউদার্ন অ্যাভিনিউ (লেকের কাছে), কালীঘাট, কলকাতা — ৭০০০২৯
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B8FF00] shrink-0" />
                <span className="font-sans tabular-nums font-medium text-white">
                  +91 98301 24589 / +91 98302 67890
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF1493] shrink-0" />
                <span className="font-sans">hello@nachefit.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white/50 shrink-0" />
                <span>সোম - রবি: সকাল ৬:৩০ - রাত ৮:৩০</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#FF6B35] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                বুকিং বা তথ্যের জন্য যোগাযোগ করুন
              </button>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} REFi MiND — ZUMBA & DANCE FITNESS. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-[#FF1493] fill-current" /> for healthy smiles in Kolkata
          </p>
        </div>
      </div>
    </footer>
  );
};
