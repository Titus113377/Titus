import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Globe, Brain, Wrench, Compass, Sparkles } from 'lucide-react';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'Programming', label: 'Programming', color: '#4F7CFF' },
    { id: 'Web Development', label: 'Web Dev', color: '#6366F1' },
    { id: 'AI & Generative Tools', label: 'AI & GenAI', color: '#16A394' },
    { id: 'Development & Workflow', label: 'Workflow', color: '#E4A853' },
    { id: 'Currently Learning', label: 'Roadmap', color: '#27AE78' },
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  // Category thematic styling
  const getCategoryTheme = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('programming')) {
      return {
        accent: '#4F7CFF',
        badge: 'text-[#4F7CFF] bg-[#4F7CFF]/15 border-[#4F7CFF]/30',
        hoverBorder: 'hover:border-[#4F7CFF]',
        hoverShadow: 'hover:shadow-[0_0_20px_rgba(79,124,255,0.25)]',
        icon: Terminal,
      };
    }
    if (t.includes('web')) {
      return {
        accent: '#818CF8',
        badge: 'text-[#818CF8] bg-[#818CF8]/15 border-[#818CF8]/30',
        hoverBorder: 'hover:border-[#818CF8]',
        hoverShadow: 'hover:shadow-[0_0_20px_rgba(129,140,248,0.25)]',
        icon: Globe,
      };
    }
    if (t.includes('ai') || t.includes('generative')) {
      return {
        accent: '#16A394',
        badge: 'text-[#16A394] bg-[#16A394]/15 border-[#16A394]/30',
        hoverBorder: 'hover:border-[#16A394]',
        hoverShadow: 'hover:shadow-[0_0_20px_rgba(22,163,148,0.25)]',
        icon: Brain,
      };
    }
    if (t.includes('workflow') || t.includes('development')) {
      return {
        accent: '#E4A853',
        badge: 'text-[#E4A853] bg-[#E4A853]/15 border-[#E4A853]/30',
        hoverBorder: 'hover:border-[#E4A853]',
        hoverShadow: 'hover:shadow-[0_0_20px_rgba(228,168,83,0.25)]',
        icon: Wrench,
      };
    }
    return {
      accent: '#27AE78',
      badge: 'text-[#27AE78] bg-[#27AE78]/15 border-[#27AE78]/30',
      hoverBorder: 'hover:border-[#27AE78]',
      hoverShadow: 'hover:shadow-[0_0_20px_rgba(39,174,120,0.25)]',
      icon: Compass,
    };
  };

  return (
    <section id="skills" className="py-24 bg-[#18254A] border-b border-[#3949AB]/40 text-white relative overflow-hidden">
      {/* Subtle atmospheric gradient orbs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-[#3949AB]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#16A394]/20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F7CFF] font-bold uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#16A394]" />
              <span>Technology Constellation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              An honest, vibrant view of my foundational toolset as an aspiring AI engineer—categorized by practical execution.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#10182B]/80 border border-[#3949AB]/50 rounded-xl self-start md:self-auto backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#3949AB] to-[#4F7CFF] text-white shadow-[0_0_12px_rgba(79,124,255,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-[#18254A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {displayedCategories.map((cat) => {
            const theme = getCategoryTheme(cat.title);
            const CatIcon = theme.icon;

            return (
              <div
                key={cat.title}
                data-cursor="card"
                className="p-6 sm:p-7 rounded-2xl bg-[#10182B]/75 border border-[#3949AB]/35 backdrop-blur-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#3949AB]/30">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2.5 rounded-xl text-white shadow-md"
                      style={{ backgroundColor: theme.accent }}
                    >
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-4 rounded-xl bg-[#18254A]/60 border border-[#3949AB]/30 transition-all duration-300 hover:-translate-y-1 ${theme.hoverBorder} ${theme.hoverShadow} flex flex-col justify-between group`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm font-bold text-white group-hover:text-[#FAFAF7] transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold ${theme.badge}`}>
                          {skill.level}
                        </span>
                      </div>
                      {skill.note && (
                        <p className="text-xs text-slate-300 leading-relaxed mt-1">
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Authenticity banner */}
        <div className="mt-10 p-5 rounded-xl bg-gradient-to-r from-[#10182B]/90 via-[#18254A]/90 to-[#10182B]/90 border border-[#4F7CFF]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#E4A853] shrink-0" />
            <span>
              <strong className="text-white font-semibold">Honest Skill Progression:</strong> No inflated 99% master bars. Every skill reflects hands-on code committed to repositories.
            </span>
          </div>
          <a
            href="https://github.com/Titus113377/TITUS_PYTHON"
            target="_blank"
            rel="noreferrer"
            className="text-[#4F7CFF] hover:text-[#22D3EE] font-semibold underline underline-offset-4 whitespace-nowrap"
          >
            Review GitHub Commits →
          </a>
        </div>
      </div>
    </section>
  );
}
