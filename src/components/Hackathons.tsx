import { Flame, Lightbulb, Users, Clock, ArrowRight } from 'lucide-react';

export function Hackathons() {
  const experiences = [
    {
      type: 'HACKATHONS',
      title: 'Rapid Prototyping Under Deadlines',
      cycle: ['Problem', 'Idea', 'Prototype', 'Iteration'],
      description:
        'Translating theoretical programming concepts into working code within strict 24–48 hour timeframes. Experiencing the value of minimum viable products (MVPs), debugging under pressure, and pragmatic technical trade-offs.',
      learnings: [
        'Breaking complex challenges into achievable micro-features',
        'Leveraging AI-assisted development tools to accelerate boilerplate',
        'Effective code sharing, git branches, and synchronous debugging',
      ],
      icon: Flame,
    },
    {
      type: 'IDEATHONS',
      title: 'Problem Framing & Concept Defense',
      cycle: ['Observation', 'Concept', 'Solution', 'Presentation'],
      description:
        'Focusing on the "why" before writing the first line of code. Identifying underserved problems in sustainability, civic utilities, or student life, and structuring viable technical architecture proposals.',
      learnings: [
        'Formulating precise problem statements instead of vague ideas',
        'Evaluating feasibility, technical constraints, and user touchpoints',
        'Communicating technical concepts clearly to diverse audiences',
      ],
      icon: Lightbulb,
    },
  ];

  return (
    <section id="hackathons" className="py-20 border-b border-neutral-800/60 bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-2">
            Practical Innovation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Beyond the Classroom
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-2xl leading-relaxed">
            Hackathons and ideathons have been an important part of my learning journey. They have
            helped me move from simply learning concepts to thinking about problems, designing
            solutions, and building prototypes under real time constraints.
          </p>
        </div>

        {/* 2-Column Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.type}
                className="p-6 sm:p-8 rounded-xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs">
                    <span className="font-mono text-neutral-300 font-semibold tracking-wider">
                      {item.type}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mt-4">
                    {item.title}
                  </h3>

                  {/* Cycle Flow */}
                  <div className="my-4 py-2.5 px-3 rounded-lg bg-neutral-950/70 border border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-300 overflow-x-auto">
                    {item.cycle.map((step, idx) => (
                      <div key={step} className="flex items-center gap-1.5 shrink-0">
                        <span className="text-neutral-200 font-medium">{step}</span>
                        {idx < item.cycle.length - 1 && (
                          <span className="text-neutral-600">→</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-neutral-800/80">
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      Key Takeaways:
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-400">
                      {item.learnings.map((l, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-neutral-500 font-mono mt-0.5">›</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-neutral-800/60 flex items-center gap-2 text-xs text-neutral-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Time-constrained execution · Collaborative learning</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
