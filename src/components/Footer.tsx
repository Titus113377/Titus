import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-[#10182B] text-slate-400 text-xs relative overflow-hidden">
      {/* Top subtle gradient hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4F7CFF] via-[#16A394] via-[#27AE78] to-[#E4A853]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#18254A]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4F7CFF] shadow-[0_0_8px_#4F7CFF]" />
              <span className="text-lg font-extrabold text-[#F5F1E8] tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <div className="text-xs text-slate-300 mt-1.5">
              First-Year B.Tech Student · Aspiring AI Engineer
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-[#4F7CFF] transition-colors flex items-center gap-1.5 font-medium"
            >
              <Github className="w-4 h-4 text-[#4F7CFF]" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-[#16A394] transition-colors flex items-center gap-1.5 font-medium"
            >
              <Linkedin className="w-4 h-4 text-[#16A394]" />
              <span>LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#18254A] border border-[#3949AB]/40 hover:border-[#4F7CFF] text-slate-200 hover:text-white transition-all ml-2 cursor-pointer shadow-sm hover:scale-110"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#4F7CFF]" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
          <div className="text-[#F5F1E8]/80 font-medium">
            © 2026 Titus. Built while learning &amp; engineering.
          </div>
          <div className="font-mono text-[11px] flex items-center gap-2">
            <span className="text-[#4F7CFF]">Python</span>
            <span>·</span>
            <span className="text-[#16A394]">Generative AI</span>
            <span>·</span>
            <span className="text-[#E4A853]">Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
