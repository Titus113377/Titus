import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle interactive node grid visualization (mathematical & minimal)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle points representing computational nodes / tensor grid
    const points: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const count = Math.min(28, Math.floor(width / 22));

    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect near points with faint lines
      ctx.lineWidth = 0.75;
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw point
        ctx.fillStyle = 'rgba(212, 212, 216, 0.45)';
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.18;
            ctx.strokeStyle = `rgba(161, 161, 170, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
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
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden border-b border-neutral-800/60"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status indicator: unboxed clean text with typographic separator (zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs tracking-wider text-neutral-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
              <span>First-Year B.Tech Student</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300">Aspiring AI Engineer</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Building Today.{' '}
              <span className="text-neutral-400 font-normal block sm:inline">
                Engineering Tomorrow.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed font-normal">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-md bg-neutral-100 text-neutral-950 hover:bg-white transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 text-neutral-600 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 text-sm font-medium rounded-md bg-neutral-900 border border-neutral-700/80 text-neutral-200 hover:text-white hover:border-neutral-500 hover:bg-neutral-850 transition-all flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4 text-neutral-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 text-sm font-medium rounded-md bg-transparent border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all flex items-center justify-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-neutral-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>

            {/* Quiet metadata line */}
            <div className="pt-4 flex items-center gap-3 text-xs text-neutral-500">
              <span>Python</span>
              <span aria-hidden="true">·</span>
              <span>Web Development</span>
              <span aria-hidden="true">·</span>
              <span>Generative AI</span>
              <span aria-hidden="true">·</span>
              <span>Hackathons &amp; Ideathons</span>
            </div>
          </div>

          {/* Right Column: Abstract Technology Visualization (Clean, disciplined node frame) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-neutral-800 rounded-xl bg-neutral-900/40 p-5 backdrop-blur-xs overflow-hidden shadow-2xl">
              {/* Header bar of the visual card */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="font-mono text-[11px] text-neutral-400">computation_canvas.py</span>
                </div>
                <span className="font-mono text-[11px] text-neutral-500">active node loop</span>
              </div>

              {/* Dynamic canvas */}
              <div className="relative h-64 sm:h-72 w-full my-3 flex items-center justify-center overflow-hidden rounded-lg bg-neutral-950/70 border border-neutral-800/50">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                
                {/* Minimal central badge */}
                <div className="relative z-10 text-center pointer-events-none p-4 bg-neutral-900/80 border border-neutral-700/60 rounded-lg backdrop-blur-sm max-w-[240px]">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
                    Learning Pathway
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Python → GenAI → Systems
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    Hands-on project validation
                  </div>
                </div>
              </div>

              {/* Subtle footer metrics info */}
              <div className="grid grid-cols-3 gap-2 pt-3 text-center border-t border-neutral-800/80 text-xs">
                <div>
                  <div className="text-neutral-500 text-[11px]">Primary Env</div>
                  <div className="font-medium text-neutral-200 mt-0.5">Python 3.x</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-[11px]">Focus Domain</div>
                  <div className="font-medium text-neutral-200 mt-0.5">AI &amp; Web</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-[11px]">Methodology</div>
                  <div className="font-medium text-neutral-200 mt-0.5">Build First</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
