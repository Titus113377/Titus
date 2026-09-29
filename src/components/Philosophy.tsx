import { PHILOSOPHY } from '../data/portfolioData';

export function Philosophy() {
  return (
    <section className="py-24 border-b border-neutral-800/60 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-4">
          Core Operating Principle
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-relaxed max-w-3xl mx-auto text-balance">
          {PHILOSOPHY.quote}
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400">
          <span>Titus</span>
          <span>·</span>
          <span>First-Year Engineering &amp; AI Builder</span>
        </div>
      </div>
    </section>
  );
}
