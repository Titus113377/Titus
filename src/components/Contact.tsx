import { useState } from 'react';
import { Github, Linkedin, Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-800/60 bg-neutral-950/60">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
          Get in Touch
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Let's Connect
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed mb-10">
          I'm always interested in learning, building, collaborating, and exploring new ideas in AI and technology.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white hover:bg-neutral-800 hover:border-neutral-500 transition-all font-medium text-sm flex items-center gap-2.5 shadow-xs"
          >
            <Github className="w-4 h-4 text-neutral-300" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400" />
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-lg bg-neutral-100 text-neutral-950 hover:bg-white transition-all font-semibold text-sm flex items-center gap-2.5 shadow-sm"
          >
            <Linkedin className="w-4 h-4 text-neutral-800" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-600" />
          </a>
        </div>

        {/* Quick Email Copy Row */}
        <div className="mt-8 pt-8 border-t border-neutral-800/60 inline-flex flex-col sm:flex-row items-center gap-3 text-xs text-neutral-400">
          <span>Direct contact email:</span>
          <div className="flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded-md border border-neutral-800 font-mono text-neutral-200">
            <span>{PERSONAL_INFO.email}</span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-1 hover:text-white transition-colors cursor-pointer"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          {copied && <span className="text-emerald-400 text-xs">Copied to clipboard!</span>}
        </div>
      </div>
    </section>
  );
}
