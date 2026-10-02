import React from 'react';
import { Sparkles, Heart, Zap, Smile } from 'lucide-react';

export const WhyJoinUs: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#121212]">
      {/* Darkened Cinematic Background Image with adult Bengali women doing Zumba subtly visible */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/class_dance_fitness_1790949545069.jpg"
          alt="Adult Bengali women doing Zumba workout in background"
          className="w-full h-full object-cover object-center filter brightness-[0.20] contrast-[1.1] saturate-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay to ensure orbs remain the central luminous hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/85 to-[#121212]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B8FF00] uppercase mb-4">
          <Sparkles className="w-4 h-4 text-[#B8FF00]" />
          <span>REFi MiND EXPERIENCE</span>
        </div>

        {/* Section Title: “WHY ZUMBA WITH US?” */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#FFF8F0] tracking-tight uppercase font-sans">
          WHY ZUMBA WITH US?
        </h2>

        {/* Bengali Subtitle: “নাচের তালে ফিটনেসের আনন্দ” */}
        <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#B8FF00] to-[#FF1493] tracking-wide mt-3 mb-16">
          নাচের তালে ফিটনেসের আনন্দ
        </p>

        {/* THREE LARGE 3D GLOWING ENERGY ORBS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto mb-16 items-center">
          {/* ORB 1 — FEEL ENERGIZED (Vibrant Orange, Coral, Red & Pink 3D Energy Sphere) */}
          <div className="relative mx-auto flex flex-col items-center">
            {/* Floating Light Particles around Orb 1 */}
            <div className="absolute -top-3 left-8 w-2 h-2 rounded-full bg-[#FF6B35] shadow-[0_0_10px_#FF6B35] animate-particle-a pointer-events-none" />
            <div className="absolute top-12 -right-2 w-1.5 h-1.5 rounded-full bg-[#FF8C00] shadow-[0_0_8px_#FF8C00] animate-particle-b pointer-events-none" />
            <div className="absolute -bottom-2 left-16 w-2 h-2 rounded-full bg-[#FF1493] shadow-[0_0_10px_#FF1493] animate-particle-a delay-300 pointer-events-none" />

            {/* Main 3D Sphere Container */}
            <div
              className="relative w-68 h-68 sm:w-76 sm:h-76 lg:w-82 lg:h-82 rounded-full overflow-hidden flex flex-col items-center justify-center p-8 transition-transform duration-500 hover:scale-105 cursor-default select-none animate-orb-pulse"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #FFE5D4 0%, #FF8C00 22%, #FF4500 48%, #FF1493 75%, #420A14 100%)',
                boxShadow: '0 0 50px rgba(255,107,53,0.55), 0 0 100px rgba(255,69,0,0.35), inset -18px -18px 45px rgba(0,0,0,0.85), inset 14px 14px 35px rgba(255,255,255,0.45)'
              }}
            >
              {/* Dynamic Internal Swirling Energy Layer */}
              <div
                className="absolute inset-0 rounded-full mix-blend-overlay opacity-60 animate-orb-swirl pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(255,255,255,0.6), rgba(255,107,53,0.2), rgba(255,20,147,0.7), rgba(255,255,255,0.6))'
                }}
              />

              {/* Glossy 3D Curved Specular Highlight (Top-Left Arc) */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 38% 22%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.2) 30%, transparent 60%)'
                }}
              />

              {/* Bottom Rim Ambient Reflection */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 92%, rgba(255,255,255,0.25) 0%, transparent 50%)'
                }}
              />

              {/* Content Inside Orb 1 */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/30 flex items-center justify-center mb-3 shadow-md">
                  <Zap className="w-5 h-5 text-white fill-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-wider leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  FEEL <br />
                  <span className="text-[#FFE066]">ENERGIZED</span>
                </h3>

                <p className="text-xs sm:text-sm text-white/95 font-medium mt-3 max-w-[200px] leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  শরীরকে active রাখুন, প্রতিদিনের এনার্জি বাড়ান।
                </p>
              </div>
            </div>
          </div>

          {/* ORB 2 — MOVE TOGETHER (Electric Lime, Neon Green, Yellow & Turquoise 3D Energy Sphere) */}
          <div className="relative mx-auto flex flex-col items-center md:-translate-y-4">
            {/* Floating Light Particles around Orb 2 */}
            <div className="absolute -top-4 right-10 w-2.5 h-2.5 rounded-full bg-[#B8FF00] shadow-[0_0_12px_#B8FF00] animate-particle-b pointer-events-none" />
            <div className="absolute top-16 -left-3 w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-particle-a pointer-events-none" />
            <div className="absolute -bottom-3 right-14 w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_10px_#00F5D4] animate-particle-b delay-200 pointer-events-none" />

            {/* Main 3D Sphere Container */}
            <div
              className="relative w-68 h-68 sm:w-76 sm:h-76 lg:w-82 lg:h-82 rounded-full overflow-hidden flex flex-col items-center justify-center p-8 transition-transform duration-500 hover:scale-105 cursor-default select-none animate-orb-pulse delay-150"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #F8FFDE 0%, #D8FF00 22%, #39FF14 48%, #00F5D4 75%, #083321 100%)',
                boxShadow: '0 0 50px rgba(184,255,0,0.55), 0 0 100px rgba(57,255,20,0.35), inset -18px -18px 45px rgba(0,0,0,0.85), inset 14px 14px 35px rgba(255,255,255,0.5)'
              }}
            >
              {/* Dynamic Internal Swirling Energy Layer */}
              <div
                className="absolute inset-0 rounded-full mix-blend-overlay opacity-60 animate-orb-swirl pointer-events-none"
                style={{
                  background: 'conic-gradient(from 120deg, rgba(255,255,255,0.65), rgba(184,255,0,0.25), rgba(0,245,212,0.7), rgba(255,255,255,0.65))'
                }}
              />

              {/* Glossy 3D Curved Specular Highlight (Top-Left Arc) */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 38% 22%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.22) 30%, transparent 60%)'
                }}
              />

              {/* Bottom Rim Ambient Reflection */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 92%, rgba(255,255,255,0.25) 0%, transparent 50%)'
                }}
              />

              {/* Content Inside Orb 2 */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center mb-3 shadow-md">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-black font-sans tracking-wider leading-tight drop-shadow-[0_1px_8px_rgba(255,255,255,0.5)]">
                  MOVE <br />
                  <span className="text-[#0B3C2B]">TOGETHER</span>
                </h3>

                <p className="text-xs sm:text-sm text-black font-bold mt-3 max-w-[200px] leading-relaxed drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]">
                  একসাথে নাচুন, আনন্দ ভাগ করে নিন।
                </p>
              </div>
            </div>
          </div>

          {/* ORB 3 — BUILD CONFIDENCE (Hot Pink, Magenta, Purple & Orange 3D Energy Sphere) */}
          <div className="relative mx-auto flex flex-col items-center">
            {/* Floating Light Particles around Orb 3 */}
            <div className="absolute -top-3 left-10 w-2 h-2 rounded-full bg-[#FF1493] shadow-[0_0_10px_#FF1493] animate-particle-a pointer-events-none" />
            <div className="absolute top-14 -right-3 w-2 h-2 rounded-full bg-[#C70039] shadow-[0_0_8px_#C70039] animate-particle-b pointer-events-none" />
            <div className="absolute -bottom-2 right-12 w-1.5 h-1.5 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35] animate-particle-a delay-150 pointer-events-none" />

            {/* Main 3D Sphere Container */}
            <div
              className="relative w-68 h-68 sm:w-76 sm:h-76 lg:w-82 lg:h-82 rounded-full overflow-hidden flex flex-col items-center justify-center p-8 transition-transform duration-500 hover:scale-105 cursor-default select-none animate-orb-pulse delay-300"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #FFE6F5 0%, #FF1493 22%, #C70039 48%, #7209B7 75%, #240046 100%)',
                boxShadow: '0 0 50px rgba(255,20,147,0.55), 0 0 100px rgba(114,9,183,0.35), inset -18px -18px 45px rgba(0,0,0,0.85), inset 14px 14px 35px rgba(255,255,255,0.45)'
              }}
            >
              {/* Dynamic Internal Swirling Energy Layer */}
              <div
                className="absolute inset-0 rounded-full mix-blend-overlay opacity-60 animate-orb-swirl pointer-events-none"
                style={{
                  background: 'conic-gradient(from 240deg, rgba(255,255,255,0.6), rgba(255,20,147,0.2), rgba(114,9,183,0.7), rgba(255,255,255,0.6))'
                }}
              />

              {/* Glossy 3D Curved Specular Highlight (Top-Left Arc) */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 38% 22%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.2) 30%, transparent 60%)'
                }}
              />

              {/* Bottom Rim Ambient Reflection */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 92%, rgba(255,255,255,0.25) 0%, transparent 50%)'
                }}
              />

              {/* Content Inside Orb 3 */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/30 flex items-center justify-center mb-3 shadow-md">
                  <Smile className="w-5 h-5 text-white fill-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-wider leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  BUILD <br />
                  <span className="text-[#FFB3D9]">CONFIDENCE</span>
                </h3>

                <p className="text-xs sm:text-sm text-white/95 font-medium mt-3 max-w-[200px] leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  নাচের মাধ্যমে নিজের confidence বাড়ান।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Quote Below */}
        <div className="max-w-2xl mx-auto pt-6 border-t border-white/10">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFF8F0] tracking-wide">
            “আপনার <span className="text-[#FF6B35]">fitness journey</span>-কে আনন্দময় করে তুলুন।”
          </p>
        </div>
      </div>
    </section>
  );
};
