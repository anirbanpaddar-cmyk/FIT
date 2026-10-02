import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/studioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#151515] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#B8FF00] uppercase font-sans">
            MEMBER STORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight mt-2">
            আমাদের সাথে <span className="text-[#FF1493]">যারা নেচেছেন</span>
          </h2>
          <p className="text-base text-[#FFF8F0]/70 mt-3 leading-relaxed">
            সাধারণ সদস্য থেকে নিয়মিত ডান্সার—প্রত্যেকের আনন্দ ও রূপান্তরের গল্প।
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t: Testimonial) => (
            <div
              key={t.id}
              className="p-8 rounded-[28px] bg-[#1c1c1c] border border-white/10 hover:border-[#FF6B35]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-[#FF6B35] mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Bengali */}
                <blockquote className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
                  {t.quoteBengali}
                </blockquote>
              </div>

              {/* Author info (zero-pill unboxed metadata) */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF6B35] to-[#FF1493] flex items-center justify-center text-white font-bold text-lg font-sans">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#FF6B35] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-white/50">{t.role}</p>
                  <p className="text-[11px] text-[#B8FF00] font-sans mt-0.5">{t.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
