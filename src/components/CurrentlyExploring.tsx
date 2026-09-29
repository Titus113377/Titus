import { Binary, Cpu, Network, Server, GitFork } from 'lucide-react';
import { EXPLORING_TOPICS } from '../data/portfolioData';

export function CurrentlyExploring() {
  const icons = [Cpu, SparklesIcon, Network, Server, Binary];

  return (
    <section className="py-20 border-b border-neutral-800/60 bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-2">
            Active Study Radar
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Currently Exploring
          </h2>
          <p className="text-sm text-neutral-400 mt-2 max-w-xl">
            Concepts and domains I am actively reading, coding, and experimenting with outside of class.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPLORING_TOPICS.map((topic, idx) => {
            return (
              <div
                key={topic.title}
                className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800/70">
                    <span className="text-xs font-mono text-neutral-400">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400/90">
                      In Progress
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                    {topic.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-800/60">
                    <div className="text-[11px] font-mono text-neutral-500 uppercase mb-2">
                      Key Topics:
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs text-neutral-300 font-mono">
                      {topic.topics.map((t) => (
                        <span key={t} className="bg-neutral-800/70 px-2 py-0.5 rounded text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800/60 text-[11px] text-neutral-400 leading-snug">
                  <span className="text-neutral-500 font-medium">Why: </span>
                  {topic.whyImportant}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}
