import { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Dynamic intelligent digital ecosystem canvas (Indigo, Blue, Teal, Emerald, Amber)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 540);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes with palette colors: Blue (#4F7CFF), Teal (#16A394), Emerald (#27AE78), Amber (#E4A853), Indigo (#6366F1)
    const colors = [
      '#4F7CFF', // Creative Blue
      '#16A394', // Teal
      '#27AE78', // Emerald
      '#6366F1', // Indigo
      '#E4A853', // Amber highlight
    ];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      orbitAngle: number;
      orbitSpeed: number;
      orbitDistance: number;
      pulseOffset: number;
    }

    const particles: Particle[] = [];
    const count = Math.min(32, Math.floor(width / 18));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.2,
        color: colors[i % colors.length],
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() - 0.5) * 0.012,
        orbitDistance: Math.random() * 30 + 10,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective gradient mesh
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particles slowly with organic orbital drift
        p1.orbitAngle += p1.orbitSpeed;
        p1.x += p1.vx + Math.cos(p1.orbitAngle) * 0.2;
        p1.y += p1.vy + Math.sin(p1.orbitAngle) * 0.2;

        if (p1.x < 10 || p1.x > width - 10) p1.vx *= -1;
        if (p1.y < 10 || p1.y > height - 10) p1.vy *= -1;

        // Draw particle node with color glow
        const pulsingRadius = p1.radius + Math.sin(time * 2 + p1.pulseOffset) * 0.4;
        ctx.fillStyle = p1.color;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(1, pulsingRadius), 0, Math.PI * 2);
        ctx.fill();

        // Connect near nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.35;
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, p1.color);
            grad.addColorStop(1, p2.color);

            ctx.strokeStyle = grad;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#10182B]"
    >
      {/* Layered Atmospheric Glows: Blue, Indigo, Teal */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4F7CFF]/18 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[480px] h-[480px] bg-[#18254A]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[420px] h-[420px] bg-[#16A394]/14 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle organic vector lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="85%" cy="30%" r="280" fill="none" stroke="#4F7CFF" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="85%" cy="30%" r="420" fill="none" stroke="#16A394" strokeWidth="1" strokeDasharray="3 8" />
        <path d="M-100,500 Q400,200 900,450 T1800,300" fill="none" stroke="#3949AB" strokeWidth="1.5" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status indicator with soft emerald pulse */}
            <div className="animate-hero-badge flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#18254A]/80 border border-[#3949AB]/40 text-xs tracking-wide text-slate-300 backdrop-blur-sm">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#27AE78] shadow-[0_0_8px_#27AE78] animate-pulse" />
              <span className="font-medium text-[#F5F1E8]">First-Year B.Tech Student</span>
              <span aria-hidden="true" className="text-[#4F7CFF]">·</span>
              <span className="text-[#4F7CFF] font-medium">Aspiring AI Engineer</span>
            </div>

            {/* Headline with artistic gradient treatment */}
            <h1 className="animate-hero-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAFAF7] leading-[1.12]">
              Building Today.{' '}
              <span className="text-gradient-blue-teal block sm:inline font-extrabold">
                Engineering Tomorrow.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-hero-subtitle text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Action buttons with rich gradient and hover transitions */}
            <div className="animate-hero-ctas pt-3 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#3949AB] via-[#4F7CFF] to-[#16A394] text-white hover:brightness-110 transition-all shadow-[0_0_20px_-3px_rgba(79,124,255,0.45)] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-medium rounded-xl bg-[#18254A]/70 border border-[#3949AB]/50 text-slate-200 hover:text-white hover:border-[#4F7CFF] hover:bg-[#18254A] transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Github className="w-4 h-4 text-[#4F7CFF]" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-medium rounded-xl bg-transparent border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#16A394] hover:bg-[#16A394]/10 transition-all flex items-center justify-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-[#16A394]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Storytelling Color Dots */}
            <div className="animate-hero-meta pt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4F7CFF]" />
                <span className="text-slate-300">Python &amp; Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#16A394]" />
                <span className="text-slate-300">Generative AI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#27AE78]" />
                <span className="text-slate-300">Waste2Value AI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E4A853]" />
                <span className="text-slate-300">Hackathons</span>
              </div>
            </div>
          </div>

          {/* Right Column: Intelligent Digital Ecosystem Canvas (Rich Art Direction) */}
          <div className="lg:col-span-5 relative animate-hero-visual" data-cursor="card">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#18254A]/90 to-[#10182B]/95 p-6 border border-[#3949AB]/40 backdrop-blur-md shadow-2xl shadow-[#10182B]">
              {/* Header bar of the visual card */}
              <div className="flex items-center justify-between pb-4 border-b border-[#3949AB]/30 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4F7CFF]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16A394]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E4A853]" />
                  <span className="font-mono text-xs text-slate-300 ml-1">intelligent_ecosystem.ai</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-[#27AE78]">
                  <Sparkles className="w-3 h-3" />
                  <span>neural mesh</span>
                </div>
              </div>

              {/* Dynamic canvas */}
              <div className="relative h-64 sm:h-72 w-full my-4 flex items-center justify-center overflow-hidden rounded-xl bg-[#0B1120] border border-[#3949AB]/30">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

                {/* Central artistic glass capsule */}
                <div className="relative z-10 text-center pointer-events-none p-4 bg-[#18254A]/80 border border-[#4F7CFF]/40 rounded-xl backdrop-blur-md max-w-[240px] shadow-[0_0_25px_rgba(79,124,255,0.25)]">
                  <div className="text-[11px] font-mono text-[#4F7CFF] uppercase tracking-widest mb-1 font-semibold">
                    Core Trajectory
                  </div>
                  <div className="text-sm font-bold text-white">
                    Python → GenAI → Systems
                  </div>
                  <div className="text-[11px] text-[#27AE78] font-medium mt-1">
                    Hands-on Project Building
                  </div>
                </div>
              </div>

              {/* Colorful metrics bottom row */}
              <div className="grid grid-cols-3 gap-3 pt-3 text-center border-t border-[#3949AB]/30 text-xs">
                <div className="p-2 rounded-lg bg-[#10182B]/60 border border-[#4F7CFF]/20">
                  <div className="text-[#4F7CFF] text-[11px] font-medium">Core Lang</div>
                  <div className="font-bold text-white mt-0.5">Python 3.x</div>
                </div>
                <div className="p-2 rounded-lg bg-[#10182B]/60 border border-[#16A394]/20">
                  <div className="text-[#16A394] text-[11px] font-medium">Specialty</div>
                  <div className="font-bold text-white mt-0.5">GenAI &amp; Web</div>
                </div>
                <div className="p-2 rounded-lg bg-[#10182B]/60 border border-[#E4A853]/20">
                  <div className="text-[#E4A853] text-[11px] font-medium">Method</div>
                  <div className="font-bold text-white mt-0.5">Rapid Build</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
