/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ClassCategories } from './components/ClassCategories';
import { FeaturedVideo } from './components/FeaturedVideo';
import { WhyJoinUs } from './components/WhyJoinUs';
import { Trainers } from './components/Trainers';
import { WeeklySchedule } from './components/WeeklySchedule';
import { PhotoGallery } from './components/PhotoGallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { VideoModal } from './components/VideoModal';
import { ContactModal } from './components/ContactModal';
import { Calendar, Flame } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledClass, setPrefilledClass] = useState<string | undefined>(undefined);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenBooking = (className?: string) => {
    setPrefilledClass(className);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#151515] text-[#FFF8F0] selection:bg-[#FF6B35] selection:text-white relative">
      {/* Sticky Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* Section 1: Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenVideo={() => {
            const el = document.getElementById('videos');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              setVideoModalOpen(true);
            }
          }}
        />

        {/* Section 2: About */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* Section 3: Class Categories */}
        <ClassCategories onSelectClass={(cls) => handleOpenBooking(cls)} />

        {/* Section 4: Live Zumba Video Experience */}
        <FeaturedVideo
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 5: Why Join Us */}
        <WhyJoinUs />

        {/* Section 6: Trainers */}
        <Trainers />

        {/* Section 7: Weekly Schedule */}
        <WeeklySchedule onOpenBooking={(slot) => handleOpenBooking(slot)} />

        {/* Section 8: Photo Gallery */}
        <PhotoGallery />

        {/* Section 9: Testimonials */}
        <Testimonials />

        {/* Section 10: FAQ */}
        <FAQ />

        {/* Section 11: Final CTA */}
        <FinalCTA
          onOpenBooking={() => handleOpenBooking()}
          onOpenContact={() => setContactModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Class Booking CTA on Mobile / Tablet for ease of conversion */}
      <div className="fixed bottom-4 right-4 z-30 sm:hidden">
        <button
          onClick={() => handleOpenBooking()}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#FF6B35] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_25px_rgba(255,107,53,0.6)] active:scale-95 transition-transform"
        >
          <Flame className="w-4 h-4 fill-black" />
          <span>JOIN CLASS</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefillClass={prefilledClass}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenBooking={() => {
          setVideoModalOpen(false);
          handleOpenBooking();
        }}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
