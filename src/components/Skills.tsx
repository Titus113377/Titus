import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Areas' },
    { id: 'Programming', label: 'Programming' },
    { id: 'Web Development', label: 'Web Development' },
    { id: 'AI & Generative Tools', label: 'AI & GenAI' },
    { id: 'Development & Workflow', label: 'Workflow & Tools' },
    { id: 'Currently Learning', label: 'Currently Learning' },
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  // Stage indicator styling (honest representation, no misleading percentages)
  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Active Practice':
        return (
          <span className="text-[11px] font-mono text-emerald-400 font-medium">
            Active Practice
          </span>
        );
      case 'Foundations':
        return (
          <span className="text-[11px] font-mono text-neutral-400 font-medium">
            Foundations
          </span>
        );
      case 'Exploring':
        return (
          <span className="text-[11px] font-mono text-neutral-400 font-medium">
            Active Study
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-mono text-neutral-400">
            {level}
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-neutral-800/60 bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-2">
              Capabilities &amp; Growth
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-xl">
              Honest view of my current technical toolset as a first-year student — organized by practical exposure and active learning goals.
            </p>
          </div>

          {/* Interactive filter tabs / segmented controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-800 text-white shadow-xs'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl bg-neutral-900/30 border border-neutral-800/80 hover:border-neutral-750 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-5 border-b border-neutral-800/70">
                <h3 className="text-base font-semibold text-neutral-100">
                  {cat.title}
                </h3>
                <span className="text-xs text-neutral-500 font-normal">
                  {cat.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-lg bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-medium text-neutral-100">
                        {skill.name}
                      </span>
                      {getLevelBadge(skill.level)}
                    </div>
                    {skill.note && (
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity guarantee note */}
        <div className="mt-8 p-4 rounded-lg bg-neutral-900/20 border border-neutral-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-500">
          <div>
            <strong className="text-neutral-400 font-medium">Transparency Note:</strong> No fake 99% proficiency bars. All skills reflect real hands-on university projects, self-driven scripts, and hackathon prototypes.
          </div>
          <a
            href={SKILL_CATEGORIES[0].skills[0].name === 'Python' ? 'https://github.com/Titus113377/TITUS_PYTHON' : '#'}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-white underline underline-offset-4 whitespace-nowrap"
          >
            Review GitHub Repositories →
          </a>
        </div>
      </div>
    </section>
  );
}
