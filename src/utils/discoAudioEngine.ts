/**
 * Original Retro Indian Disco / Zumba Instrumental Audio Engine
 * Pure Web Audio API synthesis - 126 BPM energetic dance beat with funky bass,
 * punchy kick, disco claps/hats, Indian roto-tom accents, and bright retro synth hook.
 * 100% original, copyright-free instrumental composition.
 */

class DiscoAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private isRunning: boolean = false;
  private intervalId: number | null = null;
  private current16thNote: number = 0;
  private volume: number = 0.8;
  private isMuted: boolean = false;
  private bpm: number = 126;

  public onBeat?: (quarterBeat: number, barNumber: number, step16th: number) => void;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;

      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : this.volume, this.ctx.currentTime);
    }
  }

  public getAnalyserData(): Uint8Array {
    if (!this.analyser) return new Uint8Array(16);
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);
    return data;
  }

  public play() {
    this.init();
    if (this.isRunning) return;
    this.isRunning = true;

    // 16th notes per minute = 126 * 4 = 504 -> ~119.04ms per 16th note
    const stepTimeMs = (60 / this.bpm / 4) * 1000;

    this.intervalId = window.setInterval(() => {
      if (!this.ctx || !this.isRunning) return;
      const time = this.ctx.currentTime + 0.05;
      this.scheduleStep(this.current16thNote, time);

      // Trigger UI synchronization callbacks
      if (this.onBeat) {
        const quarter = Math.floor(this.current16thNote / 4) % 4; // 0, 1, 2, 3
        const bar = Math.floor(this.current16thNote / 16);
        this.onBeat(quarter, bar, this.current16thNote);
      }

      this.current16thNote = (this.current16thNote + 1) % 64; // 4-bar loop (64 sixteenth notes)
    }, stepTimeMs);
  }

  public pause() {
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public stop() {
    this.pause();
    this.current16thNote = 0;
  }

  private scheduleStep(step: number, time: number) {
    if (!this.ctx || !this.masterGain) return;

    // 1. Kick on every quarter note (step 0, 4, 8, 12, 16...)
    if (step % 4 === 0) {
      this.playKick(time);
    }

    // 2. Disco Snare / Clap on beats 2 & 4 (step 4, 12, 20, 28...)
    if (step % 8 === 4) {
      this.playDiscoClap(time);
    }

    // 3. Sizzling Disco Hi-Hat: closed on on-beats, open sizzle on off-beats (step 2, 6, 10, 14...)
    if (step % 4 === 2) {
      this.playOpenHiHat(time);
    } else {
      this.playClosedHiHat(time);
    }

    // Indian Dholak / Timbale Syncopated Slap (classic Indian disco rhythm groove)
    if (step % 8 === 2 || step % 8 === 6) {
      this.playIndianDholakSlap(time);
    }

    // 4. Retro Indian Disco Octave Bassline
    this.playDiscoBass(step, time);

    // 5. Indian Roto-Tom Accents (turnaround at step 28, 30, 60, 62)
    if (step === 28 || step === 30 || step === 60 || step === 62) {
      this.playIndianRotoTom(time, step % 4 === 0 ? 220 : 160);
    }

    // 6. Catchy Bright Retro Synth Hook
    this.playSynthHook(step, time);
  }

  private playKick(time: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(42, time + 0.12);

    gain.gain.setValueAtTime(0.7, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.15);
  }

  private playDiscoClap(time: number) {
    if (!this.ctx || !this.masterGain) return;
    // Layer 1: Noise burst for clap sizzle
    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, time);
    filter.Q.setValueAtTime(2, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.14);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    whiteNoise.start(time);
    whiteNoise.stop(time + 0.14);

    // Layer 2: Snare body
    const bodyOsc = this.ctx.createOscillator();
    const bodyGain = this.ctx.createGain();
    bodyOsc.frequency.setValueAtTime(180, time);
    bodyOsc.frequency.exponentialRampToValueAtTime(90, time + 0.08);

    bodyGain.gain.setValueAtTime(0.3, time);
    bodyGain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(this.masterGain);

    bodyOsc.start(time);
    bodyOsc.stop(time + 0.08);
  }

  private playOpenHiHat(time: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(8000, time);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(6500, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.18);
  }

  private playClosedHiHat(time: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(9500, time);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(8000, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.08, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.05);
  }

  private playIndianDholakSlap(time: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, time);
    osc.frequency.exponentialRampToValueAtTime(110, time + 0.08);

    gain.gain.setValueAtTime(0.18, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.08);
  }

  private playIndianRotoTom(time: number, startFreq: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(startFreq, time);
    osc.frequency.exponentialRampToValueAtTime(startFreq * 0.45, time + 0.2);

    gain.gain.setValueAtTime(0.35, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.22);
  }

  private playDiscoBass(step: number, time: number) {
    if (!this.ctx || !this.masterGain) return;

    // Funky D-minor Indian Disco Bass Progression:
    // Bar 1 (0-15): D
    // Bar 2 (16-31): F -> G
    // Bar 3 (32-47): C -> D
    // Bar 4 (48-63): Bb -> A
    let rootFreq = 73.42; // D2

    const bar = Math.floor(step / 16);
    if (bar === 1) {
      rootFreq = (step % 16 < 8) ? 87.31 : 98.00; // F2 -> G2
    } else if (bar === 2) {
      rootFreq = (step % 16 < 8) ? 65.41 : 73.42; // C2 -> D2
    } else if (bar === 3) {
      rootFreq = (step % 16 < 8) ? 58.27 : 55.00; // Bb1 -> A1
    }

    // Classic disco bounce: octave alternating on 16th notes
    const isHighOctave = (step % 2 === 1);
    const targetFreq = isHighOctave ? rootFreq * 2 : rootFreq;

    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(targetFreq, time);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.setValueAtTime(4, time);
    filter.frequency.setValueAtTime(450, time);
    filter.frequency.exponentialRampToValueAtTime(140, time + 0.1);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.35, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.11);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.11);
  }

  private playSynthHook(step: number, time: number) {
    if (!this.ctx || !this.masterGain) return;

    // Catchy Original Indian Disco Aerobic Riff (Joyful & Rhythmic)
    // Notes: D4 (293.66), F4 (349.23), G4 (392.00), A4 (440.00), C5 (523.25), D5 (587.33)
    const melodyMap: { [key: number]: number } = {
      0: 293.66, // D4
      2: 349.23, // F4
      4: 392.00, // G4
      6: 440.00, // A4
      8: 523.25, // C5
      10: 440.00, // A4
      12: 392.00, // G4
      14: 349.23, // F4
      16: 440.00, // A4
      18: 523.25, // C5
      20: 587.33, // D5
      24: 523.25, // C5
      26: 440.00, // A4
      32: 392.00, // G4
      34: 440.00, // A4
      36: 523.25, // C5
      40: 440.00, // A4
      42: 392.00, // G4
      48: 349.23, // F4
      50: 392.00, // G4
      52: 440.00, // A4
      56: 293.66  // D4
    };

    const freq = melodyMap[step];
    if (!freq) return;

    // Poly synth brass layer
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc2.type = 'square';

    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 1.004, time); // detune for rich disco sheen

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, time);
    filter.frequency.exponentialRampToValueAtTime(700, time + 0.18);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.18, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 0.2);
    osc2.stop(time + 0.2);
  }
}

export const discoEngine = new DiscoAudioEngine();
