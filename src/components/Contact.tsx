import { useState } from 'react';
import { Github, Linkedin, Copy, Check, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-[#10182B] via-[#18254A] to-[#0A3D38] text-white relative overflow-hidden border-b border-[#3949AB]/40"
    >
      {/* Radiant atmospheric lighting orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#4F7CFF]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[#16A394]/25 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10182B]/80 border border-[#3949AB]/50 text-xs font-mono tracking-widest text-[#22D3EE] font-bold uppercase mb-4 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#E4A853]" />
          <span>Collaboration &amp; Connect</span>
        </div>

        {/* Big artistic headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
          Let's Build Something.
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto leading-relaxed mb-10 font-normal">
          I'm always interested in learning, building, collaborating on hackathon ideas, and exploring new horizons in AI and software engineering.
        </p>

        {/* Primary Action Buttons: High-Contrast & Vibrant */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor="card"
            className="px-7 py-4 rounded-2xl bg-[#10182B]/90 border border-[#4F7CFF]/50 text-white hover:bg-[#18254A] hover:border-[#4F7CFF] transition-all font-bold text-sm flex items-center gap-3 shadow-[0_0_20px_rgba(79,124,255,0.3)] hover:scale-105"
          >
            <Github className="w-5 h-5 text-[#4F7CFF]" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor="card"
            className="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#3949AB] via-[#4F7CFF] to-[#16A394] text-white hover:brightness-110 transition-all font-bold text-sm flex items-center gap-3 shadow-[0_0_25px_rgba(22,163,148,0.45)] hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Quick Email Copy Row */}
        <div className="mt-12 pt-8 border-t border-[#3949AB]/30 inline-flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-300">
          <span>Direct contact email:</span>
          <div className="flex items-center gap-2 bg-[#10182B]/80 px-4 py-2 rounded-xl border border-[#3949AB]/40 font-mono text-[#F5F1E8]">
            <span>{PERSONAL_INFO.email}</span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-1 hover:text-[#4F7CFF] transition-colors cursor-pointer"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copied ? <Check className="w-4 h-4 text-[#27AE78]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          {copied && <span className="text-[#27AE78] font-bold text-xs">Copied to clipboard!</span>}
        </div>
      </div>
    </section>
  );
}
