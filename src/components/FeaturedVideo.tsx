import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Flame,
  Music,
  Video,
  Sparkles,
  ChevronRight,
  Activity,
  ArrowRight,
  RotateCcw,
  Youtube
} from 'lucide-react';
import { discoEngine } from '../utils/discoAudioEngine';

interface FeaturedVideoProps {
  onOpenBooking: () => void;
  onOpenVideo?: () => void;
}

export const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ onOpenBooking }) => {
  // Video player modes: 'youtube' (requested: https://youtu.be/sl385W665eA) or 'interactive'
  const [playerMode, setPlayerMode] = useState<'youtube' | 'interactive'>('youtube');
  const [isPlaying, setIsPlaying] = useState(false);
  const [youtubeVideoId, setYoutubeVideoId] = useState('sl385W665eA');
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [progress, setProgress] = useState(0); // 0 to 100%
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [activeCam, setActiveCam] = useState<1 | 2 | 3>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [moreSessionsOpen, setMoreSessionsOpen] = useState(false);

  // Real-time beat synchronization states for interactive mode
  const [currentQuarterBeat, setCurrentQuarterBeat] = useState<number>(0);
  const [currentBar, setCurrentBar] = useState<number>(0);
  const [beatPulse, setBeatPulse] = useState(false);
  const [eqLevels, setEqLevels] = useState<number[]>([40, 65, 85, 55, 75, 45]);

  const playerContainerRef = useRef<HTMLDivElement>(null);
  const totalDurationSec = 270; // 4 minutes 30 seconds

  // Camera angles featuring real adult Bengali participants in modern Kolkata studio
  const cameraAngles = {
    1: {
      title: 'CAM 1: WIDE GROUP (সিনক্রোনাইজড স্টেপ-টাচ)',
      image: '/src/assets/images/video_thumbnail_zumba_session_1790949441372.jpg',
      tag: 'Wide Studio View'
    },
    2: {
      title: 'CAM 2: INSTRUCTOR LEAD (অনন্যা সেনগুপ্ত)',
      image: '/src/assets/images/zumba_instructor_camera_angle_1790950324045.jpg',
      tag: 'Instructor Mid-Shot'
    },
    3: {
      title: 'CAM 3: DANCE ENERGY (টিম কোরিওগ্রাফি)',
      image: '/src/assets/images/hero_bengali_zumba_studio_1790949408999.jpg',
      tag: 'Group Dynamics'
    }
  };

  // Choreography step & movement direction based on real-time beat & bar
  const getBeatMovement = (quarter: number, bar: number, sec: number) => {
    const isLeft = quarter === 0 || quarter === 1;
    const footwork = isLeft ? 'বাম দিকে স্টেপ-টাচ (Left Step-Touch)' : 'ডান দিকে স্টেপ-টাচ (Right Step-Touch)';

    let arms = 'হাত ওপরে তুলে তাল মেলান (Arms Up & Reach)';
    const barMod = bar % 4;
    if (barMod === 0) arms = 'সাইড-টু-সাইড রিদমিক গ্লাইড (Side-to-Side Glide)';
    else if (barMod === 1) arms = 'ডাবল হ্যান্ড ক্ল্যাপ ও সোয়ে (Double Hand Clap & Sway)';
    else if (barMod === 2) arms = 'বলিউড হিপ রোল ও বাউন্স (Bolly Hip Roll & Bounce)';
    else arms = 'হালকা জাম্প ও শোল্ডার শিম্মি (Light Cardio Shimmy)';

    let phase = 'ওয়ার্ম-আপ ও স্টেপ-টাচ কম্বিনেশন';
    if (sec > 50 && sec < 130) phase = 'সাইড-টু-সাইড রিদমিক ডান্স ও আর্ম রিচ';
    else if (sec >= 130 && sec < 200) phase = 'গ্রুপ কোরিওগ্রাফি: ডিস্কো ডাবল বাউন্স';
    else if (sec >= 200 && sec < 250) phase = 'হাই-কার্ডিও ভাংড়া-ডিস্কো জাম্প';
    else if (sec >= 250) phase = 'কুল-ডাউন ও রিল্যাক্সড স্ট্রেচ';

    return { footwork, arms, phase, isLeft };
  };

  // Connect beat listener to disco audio engine (used when in interactive mode)
  useEffect(() => {
    discoEngine.onBeat = (quarter, bar, step16th) => {
      setCurrentQuarterBeat(quarter);
      setCurrentBar(bar);
      setBeatPulse(true);
      setTimeout(() => setBeatPulse(false), 90);

      // Automated rhythm-based camera cuts every 8 bars (32 beats)
      if (step16th === 0 && bar % 8 === 0) {
        setActiveCam((prev) => (prev === 1 ? 2 : prev === 2 ? 3 : 1));
      }
    };

    return () => {
      discoEngine.onBeat = undefined;
    };
  }, []);

  // Equalizer & Progress timer effect
  useEffect(() => {
    let animFrame: number;
    let timer: number;

    if (isPlaying) {
      if (playerMode === 'interactive') {
        const updateEq = () => {
          const data = discoEngine.getAnalyserData();
          if (data && data.length >= 6) {
            setEqLevels([
              Math.min(100, Math.max(25, Math.round((data[0] / 255) * 100))),
              Math.min(100, Math.max(30, Math.round((data[1] / 255) * 100))),
              Math.min(100, Math.max(25, Math.round((data[2] / 255) * 100))),
              Math.min(100, Math.max(35, Math.round((data[3] / 255) * 100))),
              Math.min(100, Math.max(30, Math.round((data[4] / 255) * 100))),
              Math.min(100, Math.max(25, Math.round((data[5] / 255) * 100)))
            ]);
          }
          animFrame = requestAnimationFrame(updateEq);
        };
        animFrame = requestAnimationFrame(updateEq);
      } else {
        // Subtle simulated equalizer animation for YouTube playback
        const interval = setInterval(() => {
          setEqLevels([
            40 + Math.floor(Math.random() * 45),
            55 + Math.floor(Math.random() * 40),
            70 + Math.floor(Math.random() * 30),
            45 + Math.floor(Math.random() * 50),
            60 + Math.floor(Math.random() * 35),
            40 + Math.floor(Math.random() * 45)
          ]);
        }, 120);
        return () => clearInterval(interval);
      }

      // Playback counter
      timer = window.setInterval(() => {
        setCurrentTimeSec((prev) => {
          if (prev >= totalDurationSec) {
            if (playerMode === 'interactive') discoEngine.pause();
            setIsPlaying(false);
            return 0;
          }
          const next = prev + 1;
          setProgress((next / totalDurationSec) * 100);
          return next;
        });
      }, 1000);
    } else {
      setEqLevels([20, 25, 20, 30, 20, 25]);
    }

    return () => {
      cancelAnimationFrame(animFrame);
      clearInterval(timer);
    };
  }, [isPlaying, playerMode]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      discoEngine.stop();
    };
  }, []);

  // Play/Pause toggle
  const togglePlay = () => {
    if (!isPlaying) {
      if (playerMode === 'interactive') {
        discoEngine.play();
        discoEngine.setVolume(volume);
        discoEngine.setMute(isMuted);
      }
      setIsPlaying(true);
    } else {
      if (playerMode === 'interactive') {
        discoEngine.pause();
      }
      setIsPlaying(false);
    }
  };

  // Mute toggle
  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (playerMode === 'interactive') {
      discoEngine.setMute(nextMuted);
    }
  };

  // Volume slider
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val === 0) {
      setIsMuted(true);
      if (playerMode === 'interactive') discoEngine.setMute(true);
    } else {
      if (isMuted) setIsMuted(false);
      if (playerMode === 'interactive') {
        discoEngine.setMute(false);
        discoEngine.setVolume(val);
      }
    }
  };

  // Timeline scrub
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    setProgress(ratio * 100);
    setCurrentTimeSec(Math.floor(ratio * totalDurationSec));
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentMovement = getBeatMovement(currentQuarterBeat, currentBar, currentTimeSec);

  return (
    <section id="videos" className="py-20 md:py-28 bg-[#151515] relative overflow-hidden">
      {/* Background ambient lighting sync with beat */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full blur-3xl pointer-events-none transition-all duration-300 ${
          isPlaying
            ? 'bg-gradient-to-r from-[#FF6B35]/25 via-[#FF1493]/25 to-[#B8FF00]/25 scale-105 opacity-100'
            : 'bg-gradient-to-r from-[#FF6B35]/15 via-[#FF1493]/15 to-[#5B21B6]/15 scale-100 opacity-70'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Label & Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          {/* Small label above player: ● LIVE ZUMBA ENERGY */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF453A] mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span>● LIVE ZUMBA ENERGY</span>
          </div>

          {/* Video Title: “আজকের Zumba Beat 🔥” */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#FFF8F0] tracking-tight mt-1">
            আজকের Zumba Beat 🔥
          </h2>

          {/* Bengali Text: “তালে তালে নাচুন • মুভ করুন • Fit থাকুন” */}
          <p className="text-base sm:text-xl font-bold text-[#B8FF00] tracking-wide mt-2">
            তালে তালে নাচুন • মুভ করুন • Fit থাকুন
          </p>

          {/* Buttons: [ ▶ PLAY ZUMBA ] & [ JOIN A CLASS ] */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <button
              onClick={togglePlay}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-black uppercase tracking-wider text-black bg-[#FF6B35] hover:bg-[#ff7b4b] rounded-full shadow-[0_0_25px_rgba(255,107,53,0.5)] transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-black" />
                  <span>PAUSE ZUMBA</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-black" />
                  <span>▶ PLAY ZUMBA</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all active:scale-95"
            >
              <Flame className="w-4 h-4 text-[#FF1493] fill-current" />
              <span>JOIN A CLASS</span>
            </button>
          </div>
        </div>

        {/* Music Visualizer Bar with animated music icon & subtle equalizer */}
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-2 mb-3 text-xs text-white/70">
          <div className="flex items-center gap-3">
            {/* Small animated music icon */}
            <div className="flex items-center gap-2 text-[#B8FF00] font-sans font-bold">
              <div className="p-1 rounded-full bg-white/10">
                <Music
                  className={`w-4 h-4 text-[#B8FF00] transition-transform duration-150 ${
                    isPlaying ? 'scale-125 rotate-6' : 'scale-100'
                  }`}
                />
              </div>
              <span>RETRO INDIAN DISCO ZUMBA</span>
              <span className="text-white/50 font-mono text-[11px]">126 BPM</span>
            </div>

            {/* Subtle animated equalizer animation beside music icon */}
            <div className="flex items-end gap-1 h-5 px-2 py-0.5 rounded bg-black/50 border border-white/10">
              {eqLevels.map((lvl, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full transition-all duration-75"
                  style={{
                    height: isPlaying ? `${Math.max(18, lvl)}%` : '20%',
                    backgroundColor: i % 2 === 0 ? '#B8FF00' : '#FF6B35'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mode Switcher: YouTube Video vs Studio Beat Mode */}
          <div className="flex items-center gap-1.5 bg-[#202020] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => {
                setPlayerMode('youtube');
                if (isPlaying) {
                  discoEngine.pause();
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                playerMode === 'youtube'
                  ? 'bg-[#FF0000] text-white shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>LIVE VIDEO (sl385W665eA)</span>
            </button>
            <button
              onClick={() => {
                setPlayerMode('interactive');
                if (isPlaying) {
                  discoEngine.play();
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                playerMode === 'interactive'
                  ? 'bg-[#FF6B35] text-black shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>STUDIO BEAT MODE</span>
            </button>
          </div>
        </div>

        {/* CINEMATIC VIDEO PLAYER CONTAINER (16:9, Rounded 24px) */}
        <div
          ref={playerContainerRef}
          className={`relative max-w-5xl mx-auto rounded-[24px] overflow-hidden bg-black border border-white/20 transition-all duration-500 ${
            isPlaying
              ? 'shadow-[0_0_60px_rgba(255,107,53,0.4)] ring-1 ring-[#FF6B35]/40'
              : 'shadow-2xl'
          }`}
        >
          {/* 16:9 Aspect Ratio Frame */}
          <div className="relative aspect-video w-full overflow-hidden select-none bg-[#0c0c0c]">
            {playerMode === 'youtube' && isPlaying ? (
              /* REAL YOUTUBE EMBED: https://youtu.be/sl385W665eA */
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&enablejsapi=1&rel=0`}
                title="Zumba Dance Fitness Session"
                className="w-full h-full border-0 rounded-[24px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              /* Poster / Interactive Synchronized Video Feed */
              <>
                <img
                  src={cameraAngles[activeCam].image}
                  alt={cameraAngles[activeCam].title}
                  className={`w-full h-full object-cover object-center transition-all duration-700 ${
                    isPlaying
                      ? beatPulse
                        ? 'scale-[1.045] filter brightness-[1.05] contrast-[1.08]'
                        : 'scale-[1.03] filter brightness-[0.98] contrast-[1.02]'
                      : 'scale-100 filter brightness-[0.75] contrast-[1.0]'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

                {/* Live Camera Feed Tag (Top Left) */}
                <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-bold tracking-wider text-white uppercase">
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isPlaying ? 'bg-red-500 animate-pulse' : 'bg-white/40'
                      }`}
                    />
                    {playerMode === 'youtube'
                      ? 'YOUTUBE: sl385W665eA (LIVE ZUMBA)'
                      : cameraAngles[activeCam].title}
                  </span>
                </div>

                {/* Live Telemetry / Rhythm HUD (Top Right) */}
                <div className="absolute top-4 right-4 flex items-center gap-2 pointer-events-none">
                  <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#B8FF00]">
                    TEMPO: 126 BPM
                  </div>
                  <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#FF6B35] hidden sm:block">
                    BURN: ~450 KCAL/HR
                  </div>
                </div>

                {/* Large Central PLAY Button (before playback or when paused) */}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer z-20 group"
                    onClick={togglePlay}
                  >
                    <div className="relative">
                      <div className="absolute -inset-5 rounded-full bg-[#FF6B35]/40 animate-ping opacity-75 duration-1000" />
                      <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#FF6B35] to-[#FF1493] flex items-center justify-center text-white shadow-[0_0_40px_rgba(255,107,53,0.9)] group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 sm:w-14 sm:h-14 fill-white text-white ml-1.5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Choreography Step Guide HUD (Bottom-Center when interactive) */}
                {isPlaying && playerMode === 'interactive' && (
                  <div className="absolute bottom-20 left-4 right-4 sm:left-6 sm:right-6 pointer-events-none flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
                    <div className="bg-black/80 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-2xl max-w-lg shadow-xl">
                      <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#B8FF00]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-pulse" />
                        <span>{currentMovement.phase}</span>
                      </div>
                      <div className="text-sm sm:text-base font-black text-white flex items-center gap-2 mt-0.5">
                        <span className="text-[#FF6B35]">পদক্ষেপ:</span>
                        <span
                          className={`px-2 py-0.5 rounded transition-colors ${
                            currentMovement.isLeft
                              ? 'bg-[#FF6B35]/30 text-white font-bold'
                              : 'bg-[#B8FF00]/30 text-white font-bold'
                          }`}
                        >
                          {currentMovement.footwork}
                        </span>
                      </div>
                      <div className="text-xs text-white/90 font-medium mt-1">
                        হাতের মুভমেন্ট:{' '}
                        <strong className="text-[#B8FF00] font-semibold">
                          {currentMovement.arms}
                        </strong>
                      </div>
                    </div>

                    <div className="bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-[11px] text-white/80 font-sans hidden sm:block">
                      Kolkata Studio Master Session
                    </div>
                  </div>
                )}

                {/* VIDEO PLAYER BOTTOM CONTROLS BAR (For Poster / Interactive view) */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/95 to-transparent z-30">
                  {/* Interactive Progress Bar */}
                  <div
                    className="w-full bg-white/20 hover:bg-white/30 h-2 rounded-full overflow-hidden cursor-pointer relative mb-3 transition-colors"
                    onClick={handleSeek}
                    title="Click to seek timeline"
                  >
                    <div
                      className="bg-gradient-to-r from-[#FF6B35] via-[#FF1493] to-[#B8FF00] h-full rounded-full transition-all duration-150 relative"
                      style={{ width: `${progress}%` }}
                    >
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md transform scale-100 hover:scale-125 transition-transform" />
                    </div>
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-full hover:bg-white/20 text-white transition-colors focus:outline-none"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 fill-white" />
                        ) : (
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        )}
                      </button>

                      <div className="flex items-center gap-2 group">
                        <button
                          onClick={toggleMute}
                          className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                          title={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted || volume === 0 ? (
                            <VolumeX className="w-4 h-4 text-white/50" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-[#B8FF00]" />
                          )}
                        </button>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="w-16 sm:w-20 h-1.5 bg-white/20 accent-[#FF6B35] rounded-lg cursor-pointer"
                          title="Adjust Volume"
                        />
                      </div>

                      <span className="font-mono text-white/80 tabular-nums text-xs">
                        {formatTime(currentTimeSec)} / {formatTime(totalDurationSec)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-white/60 font-sans hidden md:inline">
                        নাচে ফিট লাইভ স্টুডিও
                      </span>
                      <button
                        onClick={toggleFullscreen}
                        className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
                        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                      >
                        {isFullscreen ? (
                          <Minimize2 className="w-4 h-4" />
                        ) : (
                          <Maximize2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Required Bottom Text: “Music On • Move On • Feel The Energy” */}
        <div className="text-center mt-6">
          <p className="text-base sm:text-lg font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#B8FF00] to-[#FF1493] font-sans">
            Music On • Move On • Feel The Energy
          </p>
        </div>

        {/* Secondary Button Required: “WATCH MORE SESSIONS” */}
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setMoreSessionsOpen(!moreSessionsOpen)}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/15 border border-white/15 rounded-full transition-all"
          >
            <Video className="w-4 h-4 text-[#B8FF00]" />
            <span>WATCH MORE SESSIONS</span>
            <ChevronRight
              className={`w-4 h-4 transition-transform ${moreSessionsOpen ? 'rotate-90' : ''}`}
            />
          </button>
        </div>

        {/* Expandable Session Library Drawer */}
        {moreSessionsOpen && (
          <div className="mt-8 max-w-4xl mx-auto p-6 rounded-[24px] bg-[#1a1a1a] border border-white/10 animate-in fade-in duration-200">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF6B35] mb-4">
              আরও জনপ্রিয় জুম্বা সেশন (Kolkata Studio Archives)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {/* Featured YouTube Video Card */}
              <div
                onClick={() => {
                  setYoutubeVideoId('sl385W665eA');
                  setPlayerMode('youtube');
                  setIsPlaying(true);
                }}
                className={`p-4 rounded-xl border cursor-pointer transition-all group ${
                  youtubeVideoId === 'sl385W665eA' && playerMode === 'youtube'
                    ? 'bg-[#FF0000]/15 border-[#FF0000]'
                    : 'bg-white/5 border-white/10 hover:border-[#FF6B35]'
                }`}
              >
                <div className="aspect-video w-full rounded-lg overflow-hidden mb-2 relative">
                  <img
                    src="/src/assets/images/video_thumbnail_zumba_session_1790949441372.jpg"
                    alt="Featured Session sl385W665eA"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <p className="font-bold text-white group-hover:text-[#FF6B35]">
                  Featured Class: Live Zumba Routine
                </p>
                <span className="text-[11px] text-white/50">YouTube • sl385W665eA • Full Class</span>
              </div>

              <div
                onClick={() => {
                  setPlayerMode('interactive');
                  setActiveCam(2);
                  togglePlay();
                }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#B8FF00] cursor-pointer transition-all group"
              >
                <div className="aspect-video w-full rounded-lg overflow-hidden mb-2">
                  <img
                    src="/src/assets/images/zumba_instructor_camera_angle_1790950324045.jpg"
                    alt="Session 2"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="font-bold text-white group-hover:text-[#B8FF00]">
                  Episode 41: Bolly-Cardio Blast
                </p>
                <span className="text-[11px] text-white/50">132 BPM • 05:15 • High Energy</span>
              </div>

              <div
                onClick={() => {
                  setPlayerMode('interactive');
                  setActiveCam(3);
                  togglePlay();
                }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF1493] cursor-pointer transition-all group"
              >
                <div className="aspect-video w-full rounded-lg overflow-hidden mb-2">
                  <img
                    src="/src/assets/images/hero_bengali_zumba_studio_1790949408999.jpg"
                    alt="Session 3"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="font-bold text-white group-hover:text-[#FF1493]">
                  Episode 40: Latin & Desi Fusion
                </p>
                <span className="text-[11px] text-white/50">128 BPM • 06:00 • Beginner Friendly</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
