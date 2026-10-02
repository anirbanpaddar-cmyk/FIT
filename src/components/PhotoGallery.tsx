import React, { useState } from 'react';
import { Eye, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/studioData';

export const PhotoGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#181818] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF1493] uppercase font-sans">
            MOMENTS IN MOTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight mt-2">
            স্টুডিওর <span className="text-[#FF6B35]">প্রাণবন্ত মুহূর্ত</span>
          </h2>
          <p className="text-base text-[#FFF8F0]/70 mt-3 leading-relaxed">
            ঘাম, হাসি, আর একসাথে নাচার আসল ভালোবাসার প্রতিচ্ছবি।
          </p>
        </div>

        {/* Asymmetric Masonry-style Grid */}
        <div className="grid grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item.image)}
              className={`${item.span} relative group rounded-[28px] overflow-hidden bg-[#222] border border-white/10 hover:border-white/25 shadow-xl cursor-pointer h-72 sm:h-84 md:h-96`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Hover Zoom icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-[#B8FF00]" />
              </div>

              {/* Text label overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-xl font-bold text-white group-hover:text-[#FF6B35] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/70 mt-1 font-sans">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt="Enlarged gallery view"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
