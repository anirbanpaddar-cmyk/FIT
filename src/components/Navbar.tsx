import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (prefillClass?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#151515]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-gradient-to-b from-[#151515]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark / Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] rounded-xl"
          >
            <img
              src="/images/logo.png"
              alt="REFi MiND Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#B8FF00] shadow-[0_0_14px_rgba(184,255,0,0.4)] group-hover:scale-105 transition-transform"
            />
            <span className="text-xl sm:text-2xl font-black tracking-tight font-sans flex items-center gap-1">
              <span className="text-[#B8FF00]">REFi</span>
              <span className="text-[#FF1493]">MiND</span>
            </span>
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold tracking-wide text-[#FFF8F0]/80">
            <a
              href="#"
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B35] hover:after:w-full after:transition-all after:duration-250"
            >
              HOME
            </a>
            <a
              href="#about"
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B35] hover:after:w-full after:transition-all after:duration-250"
            >
              ABOUT
            </a>
            <a
              href="#classes"
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B35] hover:after:w-full after:transition-all after:duration-250"
            >
              CLASSES
            </a>
            <a
              href="#trainers"
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B35] hover:after:w-full after:transition-all after:duration-250"
            >
              TRAINERS
            </a>
            <a
              href="#videos"
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B35] hover:after:w-full after:transition-all after:duration-250"
            >
              VIDEOS
            </a>
            <a
              href="#contact"
              className="hover:text-[#FF6B35] transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B35] hover:after:w-full after:transition-all after:duration-250"
            >
              CONTACT
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#FF6B35] hover:bg-[#ff7b4b] rounded-full shadow-[0_0_20px_rgba(255,107,53,0.35)] hover:shadow-[0_0_28px_rgba(255,107,53,0.6)] transition-all transform active:scale-95 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF6B35]"
            >
              JOIN A CLASS
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#151515] border-b border-white/10 px-4 pt-2 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/90 hover:text-[#FF6B35] rounded-md"
          >
            HOME
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/90 hover:text-[#FF6B35] rounded-md"
          >
            ABOUT
          </a>
          <a
            href="#classes"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/90 hover:text-[#FF6B35] rounded-md"
          >
            CLASSES
          </a>
          <a
            href="#trainers"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/90 hover:text-[#FF6B35] rounded-md"
          >
            TRAINERS
          </a>
          <a
            href="#videos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/90 hover:text-[#FF6B35] rounded-md"
          >
            VIDEOS
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-white/90 hover:text-[#FF6B35] rounded-md"
          >
            CONTACT
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-black bg-[#FF6B35] hover:bg-[#ff7b4b] rounded-full shadow-lg"
            >
              JOIN A CLASS
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
