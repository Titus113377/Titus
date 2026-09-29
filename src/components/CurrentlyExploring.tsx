import { Cpu, Network, Server, Binary, Database, Sparkles, Layers } from 'lucide-react';

interface TopicCard {
  title: string;
  category: string;
  description: string;
  topics: string[];
  whyImportant: string;
  color: string;
  icon: typeof Cpu;
  borderClass: string;
  bgGlow: string;
}

export function CurrentlyExploring() {
  const exploringCards: TopicCard[] = [
    {
      title: 'Machine Learning',
      category: 'Foundations',
      description: 'Understanding the mathematical, statistical, and algorithmic principles behind intelligent algorithms.',
      topics: ['Supervised Learning', 'Linear & Logistic Regression', 'Decision Trees', 'Loss Functions'],
      whyImportant: 'Provides the theoretical bedrock essential for model evaluation and fine-tuning.',
      color: '#4F7CFF', // Blue
      icon: Cpu,
      borderClass: 'border-[#4F7CFF]/40 hover:border-[#4F7CFF]',
      bgGlow: 'hover:shadow-[0_10px_30px_rgba(79,124,255,0.25)]',
    },
    {
      title: 'Generative AI & LLMs',
      category: 'Intelligence',
      description: 'Exploring LLM workflows, prompting topologies, context windows, and autonomous tool calling.',
      topics: ['Prompt Engineering', 'RAG Concepts', 'Multimodal Inputs', 'Structured Outputs'],
      whyImportant: 'Enables rapid development of conversational, human-centric software tools.',
      color: '#6366F1', // Indigo
      icon: Sparkles,
      borderClass: 'border-[#6366F1]/40 hover:border-[#6366F1]',
      bgGlow: 'hover:shadow-[0_10px_30px_rgba(99,102,241,0.25)]',
    },
    {
      title: 'AI Engineering',
      category: 'Systems',
      description: 'Learning how experimental models are engineered into reliable, production-ready software systems.',
      topics: ['Inference Latency', 'Evaluation Rubrics', 'Guardrails', 'Reliability Patterns'],
      whyImportant: 'Bridges the gap between research scripts and robust tools users can depend on.',
      color: '#16A394', // Teal
      icon: Network,
      borderClass: 'border-[#16A394]/40 hover:border-[#16A394]',
      bgGlow: 'hover:shadow-[0_10px_30px_rgba(22,163,148,0.25)]',
    },
    {
      title: 'Backend Development',
      category: 'Infrastructure',
      description: 'Strengthening server-side architectures, API design, and asynchronous client communication.',
      topics: ['REST Protocols', 'FastAPI & Python', 'HTTP Lifecycle', 'Database Schemas'],
      whyImportant: 'Essential for hosting AI inference endpoints and managing persistent state.',
      color: '#27AE78', // Emerald
      icon: Server,
      borderClass: 'border-[#27AE78]/40 hover:border-[#27AE78]',
      bgGlow: 'hover:shadow-[0_10px_30px_rgba(39,174,120,0.25)]',
    },
    {
      title: 'APIs & Web Services',
      category: 'Connectivity',
      description: 'Connecting external foundation models, microservices, and third-party data layers seamlessly.',
      topics: ['JSON-LD & Payloads', 'Webhook Pipelines', 'Rate Limiting', 'Authentication'],
      whyImportant: 'Allows modular composition of external data sources into responsive student prototypes.',
      color: '#E4A853', // Amber
      icon: Layers,
      borderClass: 'border-[#E4A853]/40 hover:border-[#E4A853]',
      bgGlow: 'hover:shadow-[0_10px_30px_rgba(228,168,83,0.25)]',
    },
    {
      title: 'Data Structures & Algorithms',
      category: 'Computation',
      description: 'Strengthening computational complexity analysis, rigorous problem solving, and efficient data handling.',
      topics: ['Big-O Notation', 'Arrays & Hash Maps', 'Searching & Sorting', 'Recursion Trees'],
      whyImportant: 'Forms the baseline computational intuition required for high-performance software.',
      color: '#E87961', // Coral
      icon: Binary,
      borderClass: 'border-[#E87961]/40 hover:border-[#E87961]',
      bgGlow: 'hover:shadow-[0_10px_30px_rgba(232,121,97,0.25)]',
    },
  ];

  return (
    <section className="py-24 bg-[#18254A] border-b border-[#3949AB]/40 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#16A394]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] rounded-full bg-[#3949AB]/25 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#22D3EE] font-bold uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E4A853]" />
            <span>Active Study Radar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Currently Exploring
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-xl leading-relaxed">
            Technologies and concepts I am actively reading, coding, and building with outside of university lectures.
          </p>
        </div>

        {/* 6 Floating Colored Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploringCards.map((card, idx) => {
            const Icon = card.icon;
            const isSlowFloat = idx % 2 === 0;

            return (
              <div
                key={card.title}
                data-cursor="card"
                className={`p-7 rounded-3xl bg-[#10182B]/85 border ${card.borderClass} ${card.bgGlow} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between backdrop-blur-md shadow-xl ${
                  isSlowFloat ? 'animate-float-slow' : 'animate-float-delayed'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#3949AB]/30">
                    <span
                      className="text-xs font-mono font-extrabold uppercase tracking-wider"
                      style={{ color: card.color }}
                    >
                      {card.category}
                    </span>
                    <div
                      className="p-2 rounded-xl text-white shadow-md"
                      style={{ backgroundColor: card.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="mt-5 pt-3.5 border-t border-[#3949AB]/30">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-2">
                      Target Focus:
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                      {card.topics.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-[#18254A] border border-[#3949AB]/40 text-slate-200 text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3.5 border-t border-[#3949AB]/30 text-xs text-slate-300 leading-snug">
                  <span className="font-bold text-white" style={{ color: card.color }}>
                    Why It Matters:
                  </span>{' '}
                  {card.whyImportant}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
