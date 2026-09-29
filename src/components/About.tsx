import { Code2, Compass, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-20 border-b border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section kicker */}
        <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-2">
          Profile &amp; Background
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-10">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-8 space-y-5 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am a first-year B.Tech student interested in building practical software and
              exploring artificial intelligence. My current journey focuses on strengthening my
              Python fundamentals, learning web development, experimenting with Generative AI,
              and turning ideas into working projects.
            </p>
            <p>
              I learn primarily by building. Hackathons and ideathons have given me opportunities
              to experiment with ideas, prototype solutions, and understand how technology can
              address real-world problems under practical time constraints.
            </p>
            <p>
              My long-term goal is to grow into an <span className="text-white font-medium">AI Engineer</span> capable
              of building reliable, useful, and intelligent applications that solve genuine human problems.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span>Undergraduate Engineering Student</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span>Hands-on Project Builder</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span>Continuous Learner in AI &amp; Web</span>
              </div>
            </div>
          </div>

          {/* Pillars card */}
          <div className="lg:col-span-4 bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 pb-3 border-b border-neutral-800">
              How I Approach Learning
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800/80 text-neutral-300 shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-200">Concept to Code</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Never just reading theory; immediately testing loops, APIs, and data structures in real files.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800/80 text-neutral-300 shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-200">Hackathon Experimentation</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Testing problem formulation, team coordination, and MVP prototyping under strict deadlines.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-neutral-800/80 text-neutral-300 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-200">Generative AI Exploration</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Studying how modern foundation models can be integrated into everyday utilities like Waste2Value.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800/70 text-[11px] text-neutral-500 font-mono">
              Current focus: Python 3 · Front-end basics · GenAI tools
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
