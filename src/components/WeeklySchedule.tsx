import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Check, Sparkles } from 'lucide-react';
import { SCHEDULE, ScheduleItem } from '../data/studioData';

interface WeeklyScheduleProps {
  onOpenBooking: (prefillClass?: string) => void;
}

export const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({ onOpenBooking }) => {
  const [filterPeriod, setFilterPeriod] = useState<'All' | 'Morning' | 'Evening'>('All');

  const filteredSchedule = SCHEDULE.filter((item) => {
    if (filterPeriod === 'All') return true;
    return item.period === filterPeriod;
  });

  return (
    <section id="schedule" className="py-20 md:py-28 bg-[#151515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Segmented Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#B8FF00] uppercase font-sans">
              STUDIO TIMETABLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight mt-2">
              সাপ্তাহিক <span className="text-[#FF6B35]">ক্লাস শিডিউল</span>
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#202020] rounded-2xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setFilterPeriod('All')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                filterPeriod === 'All'
                  ? 'bg-[#FF6B35] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              ALL DAYS
            </button>
            <button
              onClick={() => setFilterPeriod('Morning')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                filterPeriod === 'Morning'
                  ? 'bg-[#FF6B35] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              MORNING
            </button>
            <button
              onClick={() => setFilterPeriod('Evening')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                filterPeriod === 'Evening'
                  ? 'bg-[#FF6B35] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              EVENING
            </button>
          </div>
        </div>

        {/* Timetable List / Cards */}
        <div className="space-y-4">
          {filteredSchedule.map((slot: ScheduleItem) => (
            <div
              key={slot.id}
              className="p-5 sm:p-6 rounded-[24px] bg-[#1e1e1e] border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-lg"
            >
              {/* Day & Time Column */}
              <div className="flex items-start sm:items-center gap-4 min-w-[240px]">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF6B35]/10 group-hover:border-[#FF6B35]/30 transition-colors">
                  <Calendar className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {slot.dayBengali}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#B8FF00] font-sans mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot.time}</span>
                  </div>
                </div>
              </div>

              {/* Class Name & Details */}
              <div className="flex-1 md:px-6">
                <div className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#FF6B35] transition-colors font-sans">
                  {slot.classTitle}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60 mt-1">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-white/40" />
                    ইন্সট্রাক্টর: <strong className="text-white/80 font-normal">{slot.trainer}</strong>
                  </span>
                  <span>•</span>
                  <span>{slot.level}</span>
                  <span>•</span>
                  <span className="text-[#FF1493] font-medium">
                    মাত্র {slot.spotsLeft} টি সিট বাকি
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="self-end md:self-auto shrink-0 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                <button
                  onClick={() => onOpenBooking(slot.classTitle)}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#B8FF00] hover:bg-[#cbff24] rounded-full shadow-[0_0_15px_rgba(184,255,0,0.25)] transition-all transform active:scale-95 whitespace-nowrap"
                >
                  <span>CLASS BOOKING</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote callout */}
        <div className="mt-8 text-center text-xs sm:text-sm text-white/50">
          * ক্লাসের ১৫ মিনিট পূর্বে স্টুডিওতে উপস্থিত হওয়া বাঞ্ছনীয়। ড্রেসিং রুম ও লকার সুবিধা সম্পূর্ণ বিনামূল্যে।
        </div>
      </div>
    </section>
  );
};
