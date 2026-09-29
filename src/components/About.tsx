import { Code2, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-24 bg-[#F5F1E8] border-b border-[#E2D9C8]/80 text-[#10131A] relative overflow-hidden">
      {/* Artistic abstract shapes in the background */}
      <svg
        className="absolute right-0 top-1/4 w-96 h-96 opacity-15 pointer-events-none"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320,80 C360,140 380,240 330,300 C280,360 160,380 90,330 C20,280 0,160 50,90 C100,20 280,20 320,80 Z"
          fill="#16A394"
        />
      </svg>
      <div className="absolute left-10 bottom-10 w-72 h-72 rounded-full bg-[#4F7CFF]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section kicker */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#3949AB] font-bold uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#4F7CFF]" />
          <span>Profile &amp; Background</span>
        </div>

        {/* Editorial Big Statement */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18254A] tracking-tight leading-tight max-w-3xl">
            "I learn by{' '}
            <span className="text-gradient-blue-teal underline decoration-[#16A394]/40 underline-offset-8">
              building
            </span>
            , prototype to understand, and grow by solving real problems."
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#10131A]/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am a first-year B.Tech student interested in building practical software and
              exploring artificial intelligence. My current journey focuses on strengthening my
              <strong className="text-[#3949AB] font-semibold"> Python fundamentals</strong>, learning web development,
              experimenting with Generative AI, and turning ideas into working projects.
            </p>
            <p>
              I learn primarily by building. Hackathons and ideathons have given me opportunities
              to experiment with ideas, prototype solutions, and understand how technology can
              address real-world problems under practical time constraints.
            </p>
            <p>
              My long-term goal is to grow into an{' '}
              <span className="font-bold text-[#18254A] bg-[#4F7CFF]/15 px-2 py-0.5 rounded text-[#3949AB]">
                AI Engineer
              </span>{' '}
              capable of building reliable, useful, and intelligent applications.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-[#667085] font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4F7CFF]" />
                <span className="text-[#18254A]">B.Tech Undergraduate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16A394]" />
                <span className="text-[#18254A]">Hands-on Project Builder</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E4A853]" />
                <span className="text-[#18254A]">Hackathon Participant</span>
              </div>
            </div>
          </div>

          {/* Editorial profile information panel */}
          <div
            data-cursor="card"
            className="lg:col-span-5 bg-white/95 rounded-2xl p-7 border border-[#E2D9C8] shadow-xl shadow-[#18254A]/5 space-y-6 backdrop-blur-md"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE1]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#3949AB] font-bold">
                Student Profile Dossier
              </span>
              <span className="text-[11px] font-mono text-[#27AE78] bg-[#27AE78]/10 px-2 py-0.5 rounded-full font-semibold">
                Active Year 1
              </span>
            </div>

            <div className="space-y-4">
              {/* CURRENT STATUS: Blue */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20">
                <div className="p-2 rounded-lg bg-[#4F7CFF] text-white shrink-0 mt-0.5 shadow-sm">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#4F7CFF]">
                    CURRENT STATUS
                  </div>
                  <div className="text-sm font-bold text-[#18254A]">
                    First-Year B.Tech Student
                  </div>
                  <div className="text-xs text-[#667085] mt-0.5">
                    Building core computer science, engineering logic &amp; algorithms.
                  </div>
                </div>
              </div>

              {/* FOCUS: Indigo */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#3949AB]/5 border border-[#3949AB]/20">
                <div className="p-2 rounded-lg bg-[#3949AB] text-white shrink-0 mt-0.5 shadow-sm">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#3949AB]">
                    PRIMARY FOCUS
                  </div>
                  <div className="text-sm font-bold text-[#18254A]">
                    Artificial Intelligence &amp; Software
                  </div>
                  <div className="text-xs text-[#667085] mt-0.5">
                    Python programming, web applications, and GenAI workflows.
                  </div>
                </div>
              </div>

              {/* CURRENTLY LEARNING: Teal */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#16A394]/5 border border-[#16A394]/20">
                <div className="p-2 rounded-lg bg-[#16A394] text-white shrink-0 mt-0.5 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#16A394]">
                    CURRENTLY LEARNING
                  </div>
                  <div className="text-sm font-bold text-[#18254A]">
                    Generative AI &amp; Full Stack Basics
                  </div>
                  <div className="text-xs text-[#667085] mt-0.5">
                    LLM prompting, UI integration, and sustainability prototypes.
                  </div>
                </div>
              </div>

              {/* LONG-TERM GOAL: Amber */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#E4A853]/10 border border-[#E4A853]/30">
                <div className="p-2 rounded-lg bg-[#E4A853] text-[#10131A] shrink-0 mt-0.5 shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#B47517]">
                    LONG-TERM GOAL
                  </div>
                  <div className="text-sm font-bold text-[#18254A]">
                    Professional AI Engineer
                  </div>
                  <div className="text-xs text-[#667085] mt-0.5">
                    Building reliable, scalable, and intelligent production systems.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
