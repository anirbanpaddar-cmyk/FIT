import React from 'react';
import { Play, Flame, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenVideo }) => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Zumba"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/65 to-[#151515]/35" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#151515]/25 to-[#151515]/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Subtitle / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B8FF00] uppercase mb-5 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#B8FF00]" />
          <span>REFi MiND • ZUMBA FITNESS</span>
        </div>

        {/* Main Bengali Heading with playful dancing typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#FFF8F0] tracking-tight leading-[1.12] mb-4 text-balance max-w-4xl font-bengali">
          <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mb-1 tracking-normal animate-lead-dance">
            নাচের তালে
          </span>
          <span className="inline-flex flex-wrap justify-center gap-x-3 sm:gap-x-4 md:gap-x-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF1493] to-[#B8FF00] animate-gradient-shift drop-shadow-[0_0_35px_rgba(255,107,53,0.45)]">
            <span className="inline-block animate-dance-word-1">ফিটনেসের</span>
            <span className="inline-block animate-dance-word-2">নতুন</span>
            <span className="inline-block animate-dance-word-3">আনন্দ</span>
          </span>
        </h1>

        {/* Short, crisp subtitle (Clean & minimal text) */}
        <p className="text-lg sm:text-2xl font-bold tracking-wide text-white/90 font-sans mb-8">
          Dance. Move. Sweat. Smile.
        </p>

        {/* Clear, High-Impact CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-base font-extrabold tracking-wider uppercase text-black bg-gradient-to-r from-[#FF6B35] to-[#ff7b4b] hover:from-[#ff7b4b] hover:to-[#FF6B35] rounded-full shadow-[0_0_30px_rgba(255,107,53,0.5)] hover:shadow-[0_0_45px_rgba(255,107,53,0.8)] transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
          >
            <span>JOIN A CLASS</span>
            <Flame className="w-5 h-5 text-black fill-current" />
          </button>

          <button
            onClick={onOpenVideo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md rounded-full transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <div className="w-5 h-5 rounded-full bg-[#B8FF00] flex items-center justify-center text-black">
              <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
            </div>
            <span>WATCH SESSION</span>
          </button>
        </div>

        {/* Animated Key Stats (Clean, minimal, unboxed tabular layout) */}
        <div className="w-full max-w-2xl grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/15 text-center">
          <div className="flex flex-col items-center group">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#FF6B35] font-sans tabular-nums group-hover:scale-110 transition-transform">
              500+
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-white/70 uppercase mt-1">
              HAPPY MEMBERS
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-white/15 px-2 group">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#B8FF00] font-sans tabular-nums group-hover:scale-110 transition-transform">
              20+
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-white/70 uppercase mt-1">
              WEEKLY CLASSES
            </span>
          </div>

          <div className="flex flex-col items-center group">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#FF1493] font-sans tabular-nums group-hover:scale-110 transition-transform">
              5+
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-white/70 uppercase mt-1">
              PRO TRAINERS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
