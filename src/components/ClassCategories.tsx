import React from 'react';
import { ArrowUpRight, Flame, Clock, Activity } from 'lucide-react';
import { CLASS_CATEGORIES, ClassCategory } from '../data/studioData';
import { useInView } from '../hooks/useInView';

interface ClassCategoriesProps {
  onSelectClass: (classTitle: string) => void;
}

export const ClassCategories: React.FC<ClassCategoriesProps> = ({ onSelectClass }) => {
  const { ref: gridRef, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="classes" className="py-20 md:py-28 bg-[#151515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#B8FF00] uppercase">
              EXPLORE SESSIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFF8F0] tracking-tight mt-2">
              আপনার জন্য <span className="text-[#FF6B35]">কোন ক্লাস?</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#FFF8F0]/70 max-w-md leading-relaxed">
            প্রত্যেক সদস্যের ফিটনেস লেভেল এবং লক্ষ্য অনুযায়ী বিশেষভাবে কিউরেট করা ৫টি অনন্য সেশন।
          </p>
        </div>

        {/* 5 Large Rounded Cards Grid with Staggered Entrance */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLASS_CATEGORIES.map((item: ClassCategory, idx: number) => {
            return (
              <div
                key={item.id}
                style={{
                  animationDelay: `${idx * 160}ms`,
                  transitionDelay: `${idx * 100}ms`
                }}
                className={`group relative rounded-[28px] overflow-hidden bg-[#1f1f1f] border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-500 shadow-xl flex flex-col justify-between ${
                  isInView ? 'animate-stagger-card opacity-100' : 'opacity-0 translate-y-8'
                } ${idx === 3 ? 'md:col-span-1 lg:col-span-1' : ''} ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Background Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-[#1f1f1f]/50 to-transparent" />

                  {/* Top unboxed metadata badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white/90">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[#B8FF00] font-sans uppercase tracking-wider">
                      {item.intensity}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[#FF6B35] font-sans">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      {item.calories}
                    </span>
                  </div>

                  {/* Tagline callout on image */}
                  <div className="absolute bottom-3 left-5 right-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B8FF00]">
                      {item.tagline}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#1f1f1f]">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FF6B35] transition-colors font-sans tracking-wide">
                        {item.title}
                      </h3>
                      <span className="flex items-center gap-1 text-xs text-white/60 font-sans mt-1">
                        <Clock className="w-3.5 h-3.5" />
                        {item.duration}
                      </span>
                    </div>

                    <p className="text-sm text-[#FFF8F0]/75 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Booking Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-xs text-white/60 font-sans">
                      ফ্রি ট্রায়াল ক্লাস উপলভ্য
                    </div>

                    <button
                      onClick={() => onSelectClass(item.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold tracking-wider text-black bg-[#FF6B35] hover:bg-[#ff7b4b] rounded-full transition-all transform group-hover:translate-x-1"
                    >
                      <span>বুক করুন</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
