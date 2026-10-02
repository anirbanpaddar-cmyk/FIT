import React from 'react';
import { Award, Star, CheckCircle } from 'lucide-react';
import { TRAINERS, Trainer } from '../data/studioData';

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-20 md:py-28 bg-[#181818] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF6B35] uppercase font-sans">
            EXPERT INSTRUCTORS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight mt-2">
            আমাদের <span className="text-[#B8FF00]">Zumba Trainers</span>
          </h2>
          <p className="text-base text-[#FFF8F0]/70 mt-3 leading-relaxed">
            প্রত্যেক ট্রেনার আন্তর্জাতিকভাবে সার্টিফায়েড, সহমর্মী এবং আপনার ফিটনেস লক্ষ্য অর্জনে নিবেদিত।
          </p>
        </div>

        {/* 3 Professional Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer: Trainer) => (
            <div
              key={trainer.id}
              className="group rounded-[28px] overflow-hidden bg-[#202020] border border-white/10 hover:border-[#FF6B35]/40 transition-all duration-500 shadow-xl flex flex-col"
            >
              {/* Portrait Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#252525]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-transparent opacity-90" />

                {/* Experience Badge on Portrait */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-bold text-[#B8FF00] font-sans">
                    {trainer.experience}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#FF6B35] bg-black/70 px-2.5 py-1 rounded-full border border-white/15">
                    <Star className="w-3 h-3 fill-current" />
                    <span>ZIN™ PRO</span>
                  </div>
                </div>
              </div>

              {/* Trainer Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FF6B35] transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-sans mt-0.5 mb-2">
                    {trainer.englishName}
                  </p>

                  <p className="text-sm font-semibold text-[#FF6B35] mb-4">
                    {trainer.specialization}
                  </p>

                  <p className="text-sm text-[#FFF8F0]/75 leading-relaxed mb-5">
                    {trainer.bioBengali}
                  </p>
                </div>

                {/* Certifications (unboxed, clean metadata) */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2 text-xs text-white/60">
                    {trainer.certifications.map((cert, cIdx) => (
                      <span key={cIdx} className="inline-flex items-center gap-1 text-white/70">
                        <CheckCircle className="w-3 h-3 text-[#B8FF00]" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
