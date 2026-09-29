import { JOURNEY_STAGES } from '../data/portfolioData';

export function Journey() {
  // Vibrant stage color progression: Blue → Indigo → Teal → Emerald → Amber
  const stageColors = [
    { text: '#4F7CFF', bg: 'bg-[#4F7CFF]', border: 'border-[#4F7CFF]', glow: 'shadow-[0_0_12px_#4F7CFF]', light: 'bg-[#4F7CFF]/10 text-[#4F7CFF]' },
    { text: '#6366F1', bg: 'bg-[#6366F1]', border: 'border-[#6366F1]', glow: 'shadow-[0_0_12px_#6366F1]', light: 'bg-[#6366F1]/10 text-[#818CF8]' },
    { text: '#16A394', bg: 'bg-[#16A394]', border: 'border-[#16A394]', glow: 'shadow-[0_0_12px_#16A394]', light: 'bg-[#16A394]/10 text-[#16A394]' },
    { text: '#27AE78', bg: 'bg-[#27AE78]', border: 'border-[#27AE78]', glow: 'shadow-[0_0_12px_#27AE78]', light: 'bg-[#27AE78]/10 text-[#27AE78]' },
    { text: '#E4A853', bg: 'bg-[#E4A853]', border: 'border-[#E4A853]', glow: 'shadow-[0_0_12px_#E4A853]', light: 'bg-[#E4A853]/10 text-[#E4A853]' },
  ];

  return (
    <section id="journey" className="py-24 bg-[#10182B] border-b border-[#3949AB]/40 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] rounded-full bg-[#4F7CFF]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] rounded-full bg-[#E4A853]/12 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F7CFF] font-bold uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#27AE78]" />
            <span>Progression Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            My Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-xl leading-relaxed">
            A color-mapped roadmap: from first-year college fundamentals to hands-on software building and the long-term vision of becoming an AI engineer.
          </p>
        </div>

        {/* Timeline List with Gradient Connecting Line (Blue → Indigo → Teal → Emerald → Amber) */}
        <div className="relative ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {/* Continuous gradient spine */}
          <div className="absolute left-[7px] top-4 bottom-4 w-1 bg-gradient-to-b from-[#4F7CFF] via-[#16A394] via-[#27AE78] to-[#E4A853] rounded-full shadow-[0_0_8px_rgba(79,124,255,0.4)]" />

          {JOURNEY_STAGES.map((stage, idx) => {
            const colors = stageColors[idx % stageColors.length];
            const isCurrent = stage.status === 'Current Focus';

            return (
              <div key={stage.step} className="relative group">
                {/* Node indicator with pulse glow */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full border-2 ${colors.border} ${colors.bg} ${colors.glow} transition-transform group-hover:scale-125 z-10`}
                />

                <div
                  data-cursor="card"
                  className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#18254A]/90 to-[#10182B]/95 border border-[#3949AB]/40 hover:border-[#4F7CFF]/60 transition-all duration-300 backdrop-blur-md shadow-xl hover:-translate-y-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-[#3949AB]/30">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md"
                        style={{ color: colors.text, backgroundColor: `${colors.text}18` }}
                      >
                        STAGE {stage.step}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {stage.title}
                      </h3>
                    </div>

                    <div className="text-xs font-mono font-semibold">
                      {isCurrent ? (
                        <span className="text-[#27AE78] bg-[#27AE78]/15 px-3 py-1 rounded-full border border-[#27AE78]/30 flex items-center gap-1.5 w-fit">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#27AE78] animate-ping" />
                          <span>Current Focus</span>
                        </span>
                      ) : stage.status === 'Next Step' ? (
                        <span className="text-[#4F7CFF] bg-[#4F7CFF]/15 px-3 py-1 rounded-full border border-[#4F7CFF]/30 w-fit">
                          Next Step
                        </span>
                      ) : (
                        <span className="text-[#E4A853] bg-[#E4A853]/15 px-3 py-1 rounded-full border border-[#E4A853]/30 w-fit">
                          Long-term Vision
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className="text-xs sm:text-sm font-semibold italic mb-3"
                    style={{ color: colors.text }}
                  >
                    "{stage.tagline}"
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                    {stage.description}
                  </p>

                  <div className="mt-5 pt-3.5 border-t border-[#3949AB]/30 flex flex-wrap items-center gap-2.5 text-xs">
                    <span className="text-slate-400 font-mono text-[11px] uppercase font-semibold">
                      Focal Areas:
                    </span>
                    {stage.focusAreas.map((area, i) => (
                      <span
                        key={area}
                        className="px-2.5 py-0.5 rounded-md bg-[#10182B] border border-slate-700/60 text-slate-200 font-mono text-[11px]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
