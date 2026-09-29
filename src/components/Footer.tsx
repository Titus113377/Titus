import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-neutral-950 text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-850">
          <div>
            <div className="text-base font-bold text-neutral-100 tracking-tight">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              First-Year B.Tech Student · Aspiring AI Engineer
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors ml-2 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-400">
          <div>
            © 2026 Titus. Built while learning.
          </div>
          <div className="font-mono text-[11px] text-neutral-400">
            Python · Web · GenAI
          </div>
        </div>
      </div>
    </footer>
  );
}
