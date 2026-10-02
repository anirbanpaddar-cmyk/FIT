import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Link2, Sparkles, Music } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [embedUrl, setEmbedUrl] = useState('');
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const audioContextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Synthesized energetic workout beat using Web Audio API
  useEffect(() => {
    if (!isOpen || !isPlaying || isMuted) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // 128 BPM = ~468ms per beat
      const playBeat = () => {
        const now = ctx.currentTime;
        // Kick
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.12);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);

        // Hi-hat
        const hihat = ctx.createOscillator();
        const hihatGain = ctx.createGain();
        hihat.type = 'triangle';
        hihat.connect(hihatGain);
        hihatGain.connect(ctx.destination);
        hihat.frequency.setValueAtTime(4000, now + 0.23);
        hihatGain.gain.setValueAtTime(0.08, now + 0.23);
        hihatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
        hihat.start(now + 0.23);
        hihat.stop(now + 0.32);
      };

      timerRef.current = window.setInterval(playBeat, 468);
    } catch {
      // Audio not permitted without gesture or fallback
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, isPlaying, isMuted]);

  // Video progress counter simulation
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 500);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (embedUrl.includes('youtube.com') || embedUrl.includes('youtu.be')) {
      const match = embedUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (match && match[1]) {
        setActiveEmbed(`https://www.youtube.com/embed/${match[1]}?autoplay=1`);
      }
    } else if (embedUrl.includes('vimeo.com')) {
      const match = embedUrl.match(/vimeo\.com\/(\d+)/);
      if (match && match[1]) {
        setActiveEmbed(`https://player.vimeo.com/video/${match[1]}?autoplay=1`);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-[28px] bg-[#161616] border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FF1493] animate-pulse" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                আজকের Zumba Session — লাইভ ক্লাস ডেমো
              </h4>
              <p className="text-xs text-white/50 font-sans">
                Move with the beat • 128 BPM Rhythmic Cardio
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Area */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          {activeEmbed ? (
            <iframe
              src={activeEmbed}
              title="Class Zumba Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Dynamic Action Snapshot */}
              <img
                src="/images/video-01.jpg"
                alt="Zumba synchronized movements"
                className={`w-full h-full object-cover object-center filter ${
                  isPlaying ? 'brightness-[0.95]' : 'brightness-[0.6]'
                } transition-all duration-300`}
                referrerPolicy="no-referrer"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Live Beat Visualizer Overlay */}
              {isPlaying && (
                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                  <Music className="w-4 h-4 text-[#B8FF00] animate-bounce" />
                  <span className="text-xs font-mono font-bold text-[#B8FF00]">
                    TEMPO 128 BPM
                  </span>
                  <div className="flex items-end gap-1 h-3 ml-2">
                    <span className="w-1 bg-[#B8FF00] h-3 animate-pulse" />
                    <span className="w-1 bg-[#FF6B35] h-2 animate-pulse delay-75" />
                    <span className="w-1 bg-[#FF1493] h-3 animate-pulse delay-150" />
                  </div>
                </div>
              )}

              {/* Center Play/Pause Indicator on click */}
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {!isPlaying && (
                  <div className="w-20 h-20 rounded-full bg-[#FF6B35] flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,107,53,0.8)]">
                    <Play className="w-10 h-10 fill-current ml-1" />
                  </div>
                )}
              </div>

              {/* Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                {/* Progress bar */}
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-3 cursor-pointer">
                  <div
                    className="bg-gradient-to-r from-[#FF6B35] to-[#B8FF00] h-full rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      )}
                    </button>

                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-white/60" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-[#B8FF00]" />
                      )}
                    </button>

                    <span className="font-mono text-white/75">
                      03:45 / 12:30
                    </span>
                  </div>

                  <div className="text-[11px] text-white/60 font-sans hidden sm:block">
                    গ্রুপ কোরিওগ্রাফি • ইন্সট্রাক্টর অনন্যা সেনগুপ্ত
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Step Guide & Custom Video Embed Input */}
        <div className="p-5 sm:p-6 bg-[#1a1a1a] border-t border-white/10 space-y-4">
          {/* Choreography Steps */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#FF6B35] mb-2 font-sans">
              CHOREOGRAPHY BREAKDOWN (৪টি মৌলিক ধাপ)
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div
                onClick={() => setCurrentStep(1)}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                  currentStep === 1
                    ? 'bg-[#FF6B35]/20 border-[#FF6B35] text-white font-bold'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                1. Merengue March
                <span className="block text-[10px] text-white/50 font-normal">হিপ সোয়ে ও স্টেপ</span>
              </div>
              <div
                onClick={() => setCurrentStep(2)}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                  currentStep === 2
                    ? 'bg-[#B8FF00]/20 border-[#B8FF00] text-white font-bold'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                2. Salsa Side-Tap
                <span className="block text-[10px] text-white/50 font-normal">আর্ম রিচ ও কোর</span>
              </div>
              <div
                onClick={() => setCurrentStep(3)}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                  currentStep === 3
                    ? 'bg-[#FF1493]/20 border-[#FF1493] text-white font-bold'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                3. Cumbia Slide
                <span className="block text-[10px] text-white/50 font-normal">রিভার্স ফুট গ্লাইড</span>
              </div>
              <div
                onClick={() => setCurrentStep(4)}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                  currentStep === 4
                    ? 'bg-[#FF6B35]/20 border-[#FF6B35] text-white font-bold'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                4. Bolly-Reggaeton
                <span className="block text-[10px] text-white/50 font-normal">হাই কার্ডিও স্টম্প</span>
              </div>
            </div>
          </div>

          {/* Embed Real Video Option for Studio Admin */}
          <form onSubmit={handleApplyUrl} className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-white/10">
            <div className="relative flex-1">
              <Link2 className="absolute left-3 top-3 w-4 h-4 text-white/40" />
              <input
                type="url"
                placeholder="ইউটিউব বা ভিমিও ক্লাসের লিংক যোগ করুন (Optional)..."
                value={embedUrl}
                onChange={(e) => setEmbedUrl(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#222] border border-white/15 text-white focus:outline-none focus:border-[#B8FF00]"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-bold uppercase rounded-xl bg-white/10 hover:bg-white/20 text-white whitespace-nowrap transition-colors"
            >
              প্লে করুন
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#FF6B35] hover:bg-[#ff7b4b] text-black whitespace-nowrap transition-all shadow-md"
            >
              JOIN THIS CLASS
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
