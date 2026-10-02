import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, Flame } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking, onOpenContact }) => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[#FF6B35] via-[#FF1493] to-[#5B21B6]">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8FF00]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Subtitle / Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B8FF00] mb-6">
          <Sparkles className="w-4 h-4 text-[#B8FF00]" />
          <span>START YOUR MOVE TODAY</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.2] mb-4 text-balance drop-shadow-lg">
          তাহলে আজই শুরু হোক আপনার <br />
          নতুন fitness journey!
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl font-bold tracking-wide text-white/95 mb-10 drop-shadow">
          নাচুন • নড়ুন • হাসুন • Fit থাকুন
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-sm font-black tracking-wider uppercase text-black bg-white hover:bg-[#FFF8F0] rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>JOIN A CLASS</span>
            <Flame className="w-4 h-4 fill-black text-black" />
          </button>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase text-white bg-black/40 hover:bg-black/60 border border-white/30 backdrop-blur-md rounded-full transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-[#B8FF00]" />
            <span>CONTACT US</span>
          </button>
        </div>
      </div>
    </section>
  );
};
