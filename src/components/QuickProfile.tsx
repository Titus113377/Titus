import { GraduationCap, Cpu, Layers, Award, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function QuickProfile() {
  const profileItems = [
    {
      label: 'CURRENT STATUS',
      value: PERSONAL_INFO.currentStatus.status,
      detail: 'Undergraduate Engineering',
      icon: GraduationCap,
    },
    {
      label: 'PRIMARY FOCUS',
      value: PERSONAL_INFO.currentStatus.focus,
      detail: 'Theory + Practical Prototyping',
      icon: Cpu,
    },
    {
      label: 'CURRENT STACK',
      value: PERSONAL_INFO.currentStatus.currentStack.join(' · '),
      detail: 'Active Daily Practice',
      icon: Layers,
    },
    {
      label: 'EXPERIENCE',
      value: PERSONAL_INFO.currentStatus.experience.join(' · '),
      detail: 'Real Projects & Rapid Building',
      icon: Award,
    },
    {
      label: 'CAREER GOAL',
      value: PERSONAL_INFO.currentStatus.goal,
      detail: 'Building Reliable Intelligent Systems',
      icon: Target,
    },
  ];

  return (
    <section className="py-12 border-b border-neutral-800/60 bg-neutral-950/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {profileItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-neutral-500 mb-2.5">
                    <span className="text-[11px] font-mono tracking-wider text-neutral-400">
                      {item.label}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="text-sm font-semibold text-neutral-100 leading-snug">
                    {item.value}
                  </div>
                </div>
                <div className="text-[11px] text-neutral-500 mt-2.5 pt-2 border-t border-neutral-800/50">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
