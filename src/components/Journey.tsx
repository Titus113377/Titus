import { JOURNEY_STAGES } from '../data/portfolioData';

export function Journey() {
  return (
    <section id="journey" className="py-20 border-b border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-2">
            Progression Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            My Journey
          </h2>
          <p className="text-sm text-neutral-400 mt-2 max-w-xl">
            A clear timeline of where I started, what I am currently working on every day, and where I am headed as an aspiring engineer.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-neutral-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
          {JOURNEY_STAGES.map((stage) => {
            const isCurrent = stage.status === 'Current Focus';
            const isGoal = stage.status === 'Long-term Goal';

            return (
              <div key={stage.step} className="relative group">
                {/* Node indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                    isCurrent
                      ? 'bg-emerald-400 border-emerald-500 shadow-sm'
                      : isGoal
                      ? 'bg-neutral-900 border-neutral-600'
                      : 'bg-neutral-800 border-neutral-700'
                  }`}
                />

                <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-neutral-800/60">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-neutral-400 font-semibold">
                        STAGE {stage.step}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {stage.title}
                      </h3>
                    </div>

                    {/* Unboxed status */}
                    <div className="text-xs font-mono">
                      {isCurrent && (
                        <span className="text-emerald-400 font-medium">● Current Focus</span>
                      )}
                      {stage.status === 'Next Step' && (
                        <span className="text-neutral-400">Next Step</span>
                      )}
                      {isGoal && (
                        <span className="text-neutral-400">Long-term Vision</span>
                      )}
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm font-medium text-neutral-300 italic mb-2">
                    "{stage.tagline}"
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
                    {stage.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-800/50 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                    <span className="text-neutral-500 text-[11px] font-mono uppercase">Key Focus:</span>
                    {stage.focusAreas.map((area, i) => (
                      <span key={area} className="text-neutral-300">
                        {area}
                        {i < stage.focusAreas.length - 1 && <span className="text-neutral-600 ml-2">·</span>}
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
