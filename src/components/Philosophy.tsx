import { Sparkles } from 'lucide-react';

export function Philosophy() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#10182B] via-[#141F3C] to-[#18254A] border-b border-[#3949AB]/40 text-white relative overflow-hidden">
      {/* Decorative ambient lighting elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#4F7CFF]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#16A394]/15 blur-3xl pointer-events-none" />

      {/* Abstract poster borders and corner markers */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18254A]/80 border border-[#3949AB]/50 text-xs font-mono tracking-widest text-[#22D3EE] font-bold uppercase mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#E4A853]" />
          <span>Core Operating Philosophy</span>
        </div>

        {/* Large artistic poster typography */}
        <div className="space-y-4 max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2]">
          <div>
            "I learn by{' '}
            <span className="text-[#4F7CFF] underline decoration-[#4F7CFF]/40 underline-offset-8">
              building
            </span>
            ,
          </div>
          <div>
            improve by{' '}
            <span className="text-[#16A394] underline decoration-[#16A394]/40 underline-offset-8">
              experimenting
            </span>
            ,
          </div>
          <div>
            and grow by{' '}
            <span className="text-[#E4A853] underline decoration-[#E4A853]/40 underline-offset-8">
              solving
            </span>{' '}
            real problems."
          </div>
        </div>

        {/* Author badge */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs font-mono text-slate-300">
          <span className="font-bold text-white tracking-wider">TITUS</span>
          <span className="text-[#4F7CFF]">·</span>
          <span className="text-slate-400">First-Year B.Tech Student &amp; Aspiring AI Engineer</span>
        </div>
      </div>
    </section>
  );
}
