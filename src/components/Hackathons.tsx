import { Flame, Lightbulb, Clock, Sparkles, ArrowRight } from 'lucide-react';

export function Hackathons() {
  const ideathonSteps = [
    { name: 'IDEA', color: '#4F7CFF', bg: 'bg-[#4F7CFF]/15 border-[#4F7CFF]/40 text-[#4F7CFF]', label: 'Observation' },
    { name: 'EXPERIMENT', color: '#6366F1', bg: 'bg-[#6366F1]/15 border-[#6366F1]/40 text-[#818CF8]', label: 'Technical Spike' },
    { name: 'PROTOTYPE', color: '#16A394', bg: 'bg-[#16A394]/15 border-[#16A394]/40 text-[#16A394]', label: 'MVP Build' },
    { name: 'ITERATE', color: '#E4A853', bg: 'bg-[#E4A853]/15 border-[#E4A853]/40 text-[#E4A853]', label: 'Feedback Polish' },
    { name: 'PRESENT', color: '#E87961', bg: 'bg-[#E87961]/15 border-[#E87961]/40 text-[#E87961]', label: 'Defense & Demo' },
  ];

  return (
    <section id="hackathons" className="py-24 bg-[#18254A] border-b border-[#3949AB]/40 text-white relative overflow-hidden">
      {/* Warm amber + creative blue background glow */}
      <div className="absolute top-10 -right-20 w-[480px] h-[480px] rounded-full bg-[#E4A853]/12 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[480px] h-[480px] rounded-full bg-[#3949AB]/30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E4A853] font-bold uppercase mb-2">
            <Flame className="w-4 h-4 text-[#E87961]" />
            <span>High-Intensity Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Beyond the Classroom
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 max-w-2xl leading-relaxed">
            Hackathons and ideathons have been an essential part of my learning journey. They have helped me move from simply learning concepts to thinking about problems, designing solutions, and building prototypes under real time constraints.
          </p>
        </div>

        {/* 2-Column Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: HACKATHONS */}
          <div
            data-cursor="card"
            className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#10182B] via-[#141E38] to-[#18254A] border border-[#E4A853]/35 shadow-xl flex flex-col justify-between hover:border-[#E4A853] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#3949AB]/30 text-xs">
                <span className="font-mono text-[#E4A853] font-bold tracking-wider text-sm flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#E4A853]" />
                  HACKATHONS
                </span>
                <span className="font-mono text-[11px] text-slate-400 bg-black/40 px-2.5 py-1 rounded-full">
                  24–48h Sprints
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mt-4">
                Rapid Prototyping Under Deadlines
              </h3>

              {/* Cycle Flow */}
              <div className="my-5 p-3 rounded-xl bg-[#0B1120] border border-[#3949AB]/40 flex items-center justify-between text-xs font-mono text-slate-200 overflow-x-auto gap-2">
                <span className="text-[#4F7CFF] font-bold">Problem</span>
                <span className="text-slate-500">→</span>
                <span className="text-[#818CF8] font-bold">Idea</span>
                <span className="text-slate-500">→</span>
                <span className="text-[#16A394] font-bold">Prototype</span>
                <span className="text-slate-500">→</span>
                <span className="text-[#E4A853] font-bold">Iteration</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Translating theoretical programming concepts into working code within strict 24–48 hour timeframes. Experiencing the value of minimum viable products (MVPs), debugging under pressure, and pragmatic technical trade-offs.
              </p>

              <div className="mt-5 pt-4 border-t border-[#3949AB]/30">
                <div className="text-xs font-mono text-[#E4A853] uppercase tracking-wider font-bold mb-2.5">
                  Key Learnings:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E4A853] font-bold">›</span>
                    <span>Decomposing complex real-world prompts into shippable core micro-features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E4A853] font-bold">›</span>
                    <span>Using AI-assisted development tools to speed up boilerplate and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E4A853] font-bold">›</span>
                    <span>Effective git coordination, modular separation, and live demo testing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#3949AB]/30 flex items-center gap-2 text-xs text-[#E4A853] font-mono">
              <Clock className="w-3.5 h-3.5 text-[#E4A853]" />
              <span>Time-constrained execution · Collaborative learning</span>
            </div>
          </div>

          {/* Card 2: IDEATHONS */}
          <div
            data-cursor="card"
            className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#10182B] via-[#141E38] to-[#18254A] border border-[#4F7CFF]/35 shadow-xl flex flex-col justify-between hover:border-[#4F7CFF] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#3949AB]/30 text-xs">
                <span className="font-mono text-[#4F7CFF] font-bold tracking-wider text-sm flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#4F7CFF]" />
                  IDEATHONS
                </span>
                <span className="font-mono text-[11px] text-slate-400 bg-black/40 px-2.5 py-1 rounded-full">
                  Concept &amp; Defense
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mt-4">
                Problem Framing &amp; Concept Defense
              </h3>

              {/* Cycle Flow */}
              <div className="my-5 p-3 rounded-xl bg-[#0B1120] border border-[#3949AB]/40 flex items-center justify-between text-xs font-mono text-slate-200 overflow-x-auto gap-2">
                <span className="text-[#4F7CFF] font-bold">Observation</span>
                <span className="text-slate-500">→</span>
                <span className="text-[#818CF8] font-bold">Concept</span>
                <span className="text-slate-500">→</span>
                <span className="text-[#16A394] font-bold">Solution</span>
                <span className="text-slate-500">→</span>
                <span className="text-[#E87961] font-bold">Presentation</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Focusing on the "why" before writing the first line of code. Identifying underserved problems in sustainability, civic utilities, or student life, and structuring viable technical architecture proposals.
              </p>

              <div className="mt-5 pt-4 border-t border-[#3949AB]/30">
                <div className="text-xs font-mono text-[#4F7CFF] uppercase tracking-wider font-bold mb-2.5">
                  Key Learnings:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F7CFF] font-bold">›</span>
                    <span>Formulating concrete problem statements instead of broad, unfocused ideas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F7CFF] font-bold">›</span>
                    <span>Evaluating technical feasibility, API costs, and realistic user touchpoints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F7CFF] font-bold">›</span>
                    <span>Communicating technical concepts clearly to faculty, mentors, and peers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#3949AB]/30 flex items-center gap-2 text-xs text-[#4F7CFF] font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#4F7CFF]" />
              <span>Architectural vision · Concept pitch readiness</span>
            </div>
          </div>
        </div>

        {/* Semantic Visual Metaphor Banner: Idea → Experiment → Prototype → Iterate → Present */}
        <div className="p-6 rounded-2xl bg-[#10182B]/85 border border-[#3949AB]/40 backdrop-blur-md">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 font-semibold text-center">
            My Innovation Lifecycle Pipeline
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {ideathonSteps.map((step, idx) => (
              <div
                key={step.name}
                className={`p-3.5 rounded-xl border ${step.bg} flex flex-col items-center text-center transition-transform hover:-translate-y-1`}
              >
                <div className="text-sm font-extrabold tracking-wider">{step.name}</div>
                <div className="text-[11px] text-slate-300 mt-1">{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
