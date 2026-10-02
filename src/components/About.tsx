import React from 'react';
import { CheckCircle2, ArrowRight, HeartHandshake, Zap, Music2, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const { ref: aboutRef, isInView } = useInView({ threshold: 0.1 });

  const featurePoints = [
    {
      title: 'Beginner Friendly',
      subtitle: 'পূর্বে কোনো নাচের অভিজ্ঞতার প্রয়োজন নেই',
      icon: HeartHandshake,
      color: 'text-[#B8FF00]'
    },
    {
      title: 'Group Energy',
      subtitle: 'একসাথে নাচার অপূর্ব উদ্দীপনা ও টিম স্পিরিট',
      icon: Zap,
      color: 'text-[#FF6B35]'
    },
    {
      title: 'Fun Cardio',
      subtitle: 'আনন্দে ভরপুর রিদমে দ্রুত ক্যালরি বার্ন',
      icon: Music2,
      color: 'text-[#FF1493]'
    },
    {
      title: 'Flexible Class Timing',
      subtitle: 'সকাল ও সন্ধ্যার সুবিধাজনক ক্লাসের সময়',
      icon: Clock,
      color: 'text-[#B8FF00]'
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 md:py-28 bg-[#181818] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#5B21B6]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FF6B35]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Energetic Bengali women Zumba group image with subtle floating animation */}
          <div className={`lg:col-span-6 relative transition-all duration-700 ${
            isInView ? 'animate-slide-left opacity-100' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-2xl bg-[#202020] group animate-float-slow">
              <img
                src="/src/assets/images/about_zumba_group_energy_1790949424704.jpg"
                alt="Bengali women laughing and exercising in Zumba group class"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Dynamic tag overlay on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#B8FF00] font-bold">
                    COMMUNITY FIRST
                  </p>
                  <p className="text-sm font-semibold text-white">
                    কলকাতার সবচেয়ে প্রাণবন্ত ওমেন-ফ্রেন্ডলি স্টুডিও
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-white/60">Rating</span>
                  <p className="text-sm font-bold text-[#FF6B35]">★ 4.9 / 5.0</p>
                </div>
              </div>
            </div>

            {/* Decorative accent element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-3xl bg-[#FF6B35]/20 -z-10 blur-xl" />
          </div>

          {/* Right Column: Bengali text & feature points */}
          <div className={`lg:col-span-6 flex flex-col justify-center transition-all duration-700 ${
            isInView ? 'animate-slide-right opacity-100' : 'opacity-0 translate-x-8'
          }`}>
            {/* Section Eyebrow */}
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF6B35] uppercase mb-2">
              ABOUT REFi MiND
            </span>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFF8F0] tracking-tight leading-tight mb-4">
              জুম্বা মানেই <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF1493]">
                শুধু ব্যায়াম নয়
              </span>
            </h2>

            {/* Shortened, punchy body copy */}
            <p className="text-base sm:text-lg text-[#FFF8F0]/85 leading-relaxed mb-6 font-medium">
              মিউজিকের ছন্দে সহজ ও আনন্দময় ডান্স-ফিটনেস মুভমেন্ট—নিজের গতিতে হাসিমুখে সুস্থ থাকুন।
            </p>

            {/* Feature Points Grid with Staggered Entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {featurePoints.map((feat, index) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={index}
                    style={{
                      animationDelay: `${index * 140 + 200}ms`
                    }}
                    className={`p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all flex items-start gap-3.5 ${
                      isInView ? 'animate-stagger-card opacity-100' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="mt-0.5 p-2 rounded-xl bg-white/5 shrink-0">
                      <IconComponent className={`w-5 h-5 ${feat.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        ✓ {feat.title}
                      </h4>
                      <p className="text-xs text-[#FFF8F0]/65 mt-1 leading-normal">
                        {feat.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action button */}
            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-black bg-[#B8FF00] hover:bg-[#c9ff26] rounded-full shadow-[0_0_20px_rgba(184,255,0,0.3)] hover:shadow-[0_0_28px_rgba(184,255,0,0.6)] transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>ফ্রি ট্রায়াল বুক করুন</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
