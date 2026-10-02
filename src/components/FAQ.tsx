import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_LIST, FAQItem } from '../data/studioData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#181818] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF6B35] uppercase font-sans">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight mt-2">
            সাধারণ <span className="text-[#B8FF00]">জিজ্ঞাসা ও উত্তর</span>
          </h2>
          <p className="text-base text-[#FFF8F0]/70 mt-3">
            ক্লাস শুরুর আগে যা জানা প্রয়োজন
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((item: FAQItem) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-[24px] bg-[#202020] border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#FF6B35]/20 text-[#FF6B35]' : 'text-white/60'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#FFF8F0]/80 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
