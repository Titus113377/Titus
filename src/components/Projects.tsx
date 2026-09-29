import { useState } from 'react';
import { Github, ExternalLink, Play, Lightbulb, BookOpen, ArrowRight, ShieldCheck, CreditCard, Award, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Waste2ValueMockup } from './Waste2ValueMockup';
import { ProjectSimulators } from './ProjectSimulators';

export function Projects() {
  const [activeSimulatorId, setActiveSimulatorId] = useState<string | null>(null);

  const featuredProject = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const standardProjects = PROJECTS.filter((p) => !p.isFeatured);

  // Artistic color identity mappings for foundational projects
  const getProjectArtStyle = (id: string) => {
    switch (id) {
      case 'voter-eligibility':
        return {
          themeColor: '#4F7CFF', // Blue + Indigo
          secondaryColor: '#3949AB',
          cardBg: 'from-[#10182B] via-[#18254A] to-[#1e3a8a]',
          bannerBg: 'bg-gradient-to-r from-[#3949AB] to-[#4F7CFF]',
          badgeText: 'text-[#4F7CFF] bg-[#4F7CFF]/15 border-[#4F7CFF]/30',
          borderColor: 'border-[#4F7CFF]/30 hover:border-[#4F7CFF]',
          hoverShadow: 'hover:shadow-[0_10px_30px_rgba(79,124,255,0.25)]',
          buttonBg: 'bg-gradient-to-r from-[#3949AB] to-[#4F7CFF] text-white',
          icon: ShieldCheck,
          abstractVisual: (
            <div className="relative h-28 w-full overflow-hidden rounded-xl bg-[#0B1120] flex items-center justify-center p-3 mb-4 border border-[#4F7CFF]/30">
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#4F7CFF]/20 blur-xl" />
              <div className="relative z-10 flex items-center gap-4 text-xs font-mono text-white">
                <div className="px-3 py-1.5 rounded-lg bg-[#3949AB]/80 border border-[#4F7CFF]/40 text-[#FAFAF7]">
                  Age &gt;= 18
                </div>
                <span className="text-[#4F7CFF] font-bold">→</span>
                <div className="px-3 py-1.5 rounded-lg bg-[#27AE78]/25 border border-[#27AE78]/50 text-[#27AE78] font-bold">
                  Eligible Validated
                </div>
              </div>
            </div>
          ),
        };
      case 'atm-management':
        return {
          themeColor: '#E4A853', // Deep Indigo + Amber
          secondaryColor: '#3949AB',
          cardBg: 'from-[#10182B] via-[#18254A] to-[#2E1065]',
          bannerBg: 'bg-gradient-to-r from-[#18254A] to-[#E4A853]',
          badgeText: 'text-[#E4A853] bg-[#E4A853]/15 border-[#E4A853]/30',
          borderColor: 'border-[#E4A853]/30 hover:border-[#E4A853]',
          hoverShadow: 'hover:shadow-[0_10px_30px_rgba(228,168,83,0.25)]',
          buttonBg: 'bg-gradient-to-r from-[#18254A] to-[#E4A853] text-white',
          icon: CreditCard,
          abstractVisual: (
            <div className="relative h-28 w-full overflow-hidden rounded-xl bg-[#0B1120] flex items-center justify-center p-3 mb-4 border border-[#E4A853]/30">
              <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#E4A853]/20 blur-xl" />
              <div className="relative z-10 flex items-center gap-3 text-xs font-mono text-white">
                <div className="px-2.5 py-1.5 rounded bg-[#18254A] border border-slate-700 text-slate-300">
                  PIN Auth
                </div>
                <div className="px-2.5 py-1.5 rounded bg-[#E4A853]/20 border border-[#E4A853]/50 text-[#E4A853] font-bold">
                  ₹ Balance Safe
                </div>
                <div className="px-2.5 py-1.5 rounded bg-[#18254A] border border-slate-700 text-slate-300">
                  Ledger
                </div>
              </div>
            </div>
          ),
        };
      case 'grade-calculator':
      default:
        return {
          themeColor: '#E87961', // Blue + Coral
          secondaryColor: '#4F7CFF',
          cardBg: 'from-[#10182B] via-[#18254A] to-[#450A0A]',
          bannerBg: 'bg-gradient-to-r from-[#4F7CFF] to-[#E87961]',
          badgeText: 'text-[#E87961] bg-[#E87961]/15 border-[#E87961]/30',
          borderColor: 'border-[#E87961]/30 hover:border-[#E87961]',
          hoverShadow: 'hover:shadow-[0_10px_30px_rgba(232,121,97,0.25)]',
          buttonBg: 'bg-gradient-to-r from-[#4F7CFF] to-[#E87961] text-white',
          icon: Award,
          abstractVisual: (
            <div className="relative h-28 w-full overflow-hidden rounded-xl bg-[#0B1120] flex items-center justify-center p-3 mb-4 border border-[#E87961]/30">
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-[#E87961]/20 blur-xl" />
              <div className="relative z-10 flex items-center gap-3 text-xs font-mono text-white">
                <div className="px-2.5 py-1.5 rounded bg-[#4F7CFF]/20 border border-[#4F7CFF]/50 text-[#4F7CFF]">
                  Agg: 88.5%
                </div>
                <span className="text-[#E87961] font-bold">→</span>
                <div className="px-3 py-1.5 rounded bg-[#E87961]/20 border border-[#E87961]/60 text-[#E87961] font-bold">
                  Grade A (9.0 GPA)
                </div>
              </div>
            </div>
          ),
        };
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#F5F1E8] border-b border-[#E2D9C8]/80 text-[#10131A] relative overflow-hidden">
      {/* Background artwork */}
      <div className="absolute -left-20 top-40 w-96 h-96 rounded-full bg-[#4F7CFF]/8 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-40 w-[450px] h-[450px] rounded-full bg-[#16A394]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#3949AB] font-bold uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#16A394]" />
            <span>Applied Engineering &amp; Prototypes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#18254A]">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3 max-w-2xl leading-relaxed">
            Learning by building real applications. From deep circular-economy AI prototypes to structured Python systems with live interactive logic sandboxes.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. FEATURED PROJECT: Waste2Value AI */}
        {/* ========================================================================= */}
        <div
          data-cursor="card"
          className="mb-20 rounded-3xl bg-white p-7 sm:p-9 lg:p-11 border border-[#E2D9C8] shadow-2xl shadow-[#18254A]/10 relative overflow-hidden"
        >
          {/* Decorative colored edge line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#16A394] via-[#27AE78] to-[#4F7CFF]" />

          {/* Featured header badge */}
          <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#16A394] uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#27AE78]" />
            <span>Flagship Prototype Project</span>
            <span className="text-[#667085]">·</span>
            <span className="text-[#3949AB]">AI · Sustainability · Web App</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Conceptual Case Study */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#18254A] tracking-tight">
                  {featuredProject.name}
                </h3>
                <p className="text-sm sm:text-base text-[#10131A]/85 mt-3 leading-relaxed font-normal">
                  {featuredProject.description}
                </p>
              </div>

              {/* Technologies unboxed list */}
              <div>
                <div className="text-xs font-mono text-[#3949AB] font-bold uppercase mb-2">
                  Technologies &amp; Architecture:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono font-semibold">
                  <span className="bg-[#4F7CFF]/15 text-[#3949AB] px-3 py-1 rounded-lg border border-[#4F7CFF]/30">
                    Python
                  </span>
                  <span className="bg-[#16A394]/15 text-[#16A394] px-3 py-1 rounded-lg border border-[#16A394]/30">
                    Generative AI
                  </span>
                  <span className="bg-[#27AE78]/15 text-[#27AE78] px-3 py-1 rounded-lg border border-[#27AE78]/30">
                    Computer Vision Concepts
                  </span>
                  <span className="bg-[#3949AB]/15 text-[#3949AB] px-3 py-1 rounded-lg border border-[#3949AB]/30">
                    Web App UI
                  </span>
                </div>
              </div>

              {/* Why I Built It */}
              {featuredProject.whyIBuiltIt && (
                <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#E2D9C8] space-y-1.5">
                  <div className="text-xs font-bold text-[#18254A] flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-[#E4A853]" />
                    <span>Why I Built It</span>
                  </div>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {featuredProject.whyIBuiltIt}
                  </p>
                </div>
              )}

              {/* What I Learned */}
              <div>
                <div className="text-xs font-bold text-[#18254A] flex items-center gap-1.5 mb-2.5">
                  <BookOpen className="w-4 h-4 text-[#4F7CFF]" />
                  <span>Key Engineering Takeaways:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#10131A]/80">
                  {featuredProject.whatILearned.map((learning, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#16A394] font-bold mt-0.5">›</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action link */}
              <div className="pt-2 flex items-center gap-4">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold px-5 py-3 rounded-xl bg-gradient-to-r from-[#16A394] to-[#27AE78] text-white hover:brightness-110 transition-all shadow-md shadow-[#16A394]/30"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Product Prototype Preview */}
            <div className="lg:col-span-6">
              <Waste2ValueMockup />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CORE PYTHON APPLICATIONS (COLOR-CODED ART PIECES) */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-8 border-b border-[#E2D9C8] gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#18254A]">
                Foundational Python Projects
              </h3>
              <p className="text-xs text-[#667085] mt-1">
                Each project features a dedicated visual identity and live browser logic simulator.
              </p>
            </div>
            <span className="text-xs text-[#27AE78] font-mono font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#27AE78] animate-pulse" />
              <span>Interactive Sandboxes Ready</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {standardProjects.map((project) => {
              const art = getProjectArtStyle(project.id);
              const ProjectIcon = art.icon;

              return (
                <div
                  key={project.id}
                  data-cursor="card"
                  className={`rounded-2xl bg-gradient-to-b ${art.cardBg} border ${art.borderColor} p-6 transition-all duration-300 hover:-translate-y-1.5 ${art.hoverShadow} flex flex-col justify-between text-white group shadow-xl`}
                >
                  <div>
                    {/* Abstract visual art frame */}
                    {art.abstractVisual}

                    {/* Category tag */}
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className={`px-2 py-0.5 rounded-full border text-[10px] font-semibold ${art.badgeText}`}>
                        {project.category}
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">Python 3.x</span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-[#FAFAF7] transition-colors mt-2">
                      {project.name}
                    </h4>

                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="pt-3 flex flex-wrap gap-1.5 text-[11px] font-mono">
                      {project.technologies.map((t) => (
                        <span key={t} className="bg-black/40 px-2 py-0.5 rounded-md border border-white/10 text-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Key learning point */}
                    <div className="mt-4 pt-3 border-t border-white/10 text-xs">
                      <span className="font-semibold text-white block mb-1" style={{ color: art.themeColor }}>
                        What I Learned:
                      </span>
                      <span className="text-slate-300 leading-relaxed block text-[11px]">
                        {project.whatILearned[0]}
                      </span>
                    </div>
                  </div>

                  {/* Card action controls */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveSimulatorId(project.id)}
                      className={`inline-flex items-center gap-2 text-xs font-bold py-2 px-3.5 rounded-xl transition-all cursor-pointer shadow-md ${art.buttonBg} hover:brightness-110`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Test Logic Sandbox</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 text-slate-300 hover:text-white rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
                      aria-label={`View ${project.name} code on GitHub`}
                      title="View repository on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Simulator if active */}
        {activeSimulatorId && (
          <ProjectSimulators
            projectId={activeSimulatorId}
            onClose={() => setActiveSimulatorId(null)}
          />
        )}
      </div>
    </section>
  );
}
