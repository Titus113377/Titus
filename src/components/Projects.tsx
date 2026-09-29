import { useState } from 'react';
import { Github, ExternalLink, Play, CheckCircle2, Lightbulb, BookOpen } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Waste2ValueMockup } from './Waste2ValueMockup';
import { ProjectSimulators } from './ProjectSimulators';

export function Projects() {
  const [activeSimulatorId, setActiveSimulatorId] = useState<string | null>(null);

  const featuredProject = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const standardProjects = PROJECTS.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-20 border-b border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-2">
            Applied Engineering &amp; Prototypes
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <p className="text-sm text-neutral-400 mt-2 max-w-xl">
            Learning by building real applications. These projects represent my hands-on journey from fundamental logic to AI-assisted concept prototypes.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. FEATURED PROJECT: Waste2Value AI */}
        {/* ========================================================================= */}
        <div className="mb-16 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-lg">
          {/* Featured header badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Featured Project Concept</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">AI / Sustainability / Web App</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Conceptual Case Study */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {featuredProject.name}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              {/* Technologies unboxed list */}
              <div className="pt-1">
                <div className="text-xs font-mono text-neutral-400 uppercase mb-2">
                  Technologies &amp; Tools:
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-neutral-300 font-mono">
                  {featuredProject.technologies.map((tech, i) => (
                    <span key={tech} className="bg-neutral-800/80 px-2.5 py-1 rounded border border-neutral-700/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why I Built It */}
              {featuredProject.whyIBuiltIt && (
                <div className="p-4 rounded-lg bg-neutral-950/60 border border-neutral-800/80 space-y-1.5">
                  <div className="text-xs font-semibold text-neutral-200 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Why I Built It</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {featuredProject.whyIBuiltIt}
                  </p>
                </div>
              )}

              {/* What I Learned */}
              <div>
                <div className="text-xs font-semibold text-neutral-200 flex items-center gap-1.5 mb-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
                  <span>What I Learned from This Project</span>
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {featuredProject.whatILearned.map((learning, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-500 font-mono mt-0.5">›</span>
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
                  className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-md bg-neutral-100 text-neutral-900 hover:bg-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
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
        {/* 2. CORE PYTHON & LOGIC PROJECTS */}
        {/* ========================================================================= */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-neutral-800/80">
            <h3 className="text-lg font-semibold text-white">
              Foundational Python Applications
            </h3>
            <span className="text-xs text-neutral-400 font-mono">
              Live Interactive Simulators Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standardProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl bg-neutral-900/40 border border-neutral-800 p-5 hover:border-neutral-700 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Category metadata: unboxed with bullet */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 mb-2">
                    <span>{project.category}</span>
                  </div>

                  <h4 className="text-base font-semibold text-white group-hover:text-neutral-100 transition-colors">
                    {project.name}
                  </h4>

                  <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="pt-3 flex flex-wrap gap-1.5 text-[11px] font-mono text-neutral-400">
                    {project.technologies.map((t) => (
                      <span key={t} className="bg-neutral-800/60 px-2 py-0.5 rounded border border-neutral-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Key learning point */}
                  <div className="mt-4 pt-3 border-t border-neutral-800/60 text-xs">
                    <span className="text-neutral-400 font-medium block mb-1">Key Takeaway:</span>
                    <span className="text-neutral-400 leading-relaxed block text-[11px]">
                      {project.whatILearned[0]}
                    </span>
                  </div>
                </div>

                {/* Card action controls */}
                <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveSimulatorId(project.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-neutral-200 py-1 px-2.5 rounded bg-neutral-800 hover:bg-neutral-750 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                    <span>Run Logic Simulator</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
                    aria-label={`View ${project.name} code on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
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
