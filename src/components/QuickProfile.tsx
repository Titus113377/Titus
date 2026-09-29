import { GraduationCap, Cpu, Layers, Award, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function QuickProfile() {
  const profileItems = [
    {
      label: 'CURRENT STATUS',
      value: PERSONAL_INFO.currentStatus.status,
      detail: 'Undergraduate Engineering',
      icon: GraduationCap,
      color: '#4F7CFF', // Blue
      bgBorder: 'border-[#4F7CFF]/30 hover:border-[#4F7CFF]',
      accentBg: 'bg-[#4F7CFF]/10 text-[#4F7CFF]',
    },
    {
      label: 'PRIMARY FOCUS',
      value: PERSONAL_INFO.currentStatus.focus,
      detail: 'Theory + Practical Prototyping',
      icon: Cpu,
      color: '#3949AB', // Indigo
      bgBorder: 'border-[#3949AB]/30 hover:border-[#3949AB]',
      accentBg: 'bg-[#3949AB]/10 text-[#3949AB]',
    },
    {
      label: 'CURRENT STACK',
      value: PERSONAL_INFO.currentStatus.currentStack.join(' · '),
      detail: 'Active Daily Practice',
      icon: Layers,
      color: '#16A394', // Teal
      bgBorder: 'border-[#16A394]/30 hover:border-[#16A394]',
      accentBg: 'bg-[#16A394]/10 text-[#16A394]',
    },
    {
      label: 'EXPERIENCE',
      value: PERSONAL_INFO.currentStatus.experience.join(' · '),
      detail: 'Real Projects & Rapid Building',
      icon: Award,
      color: '#E87961', // Coral
      bgBorder: 'border-[#E87961]/30 hover:border-[#E87961]',
      accentBg: 'bg-[#E87961]/10 text-[#E87961]',
    },
    {
      label: 'CAREER GOAL',
      value: PERSONAL_INFO.currentStatus.goal,
      detail: 'Building Reliable Intelligent Systems',
      icon: Target,
      color: '#E4A853', // Amber
      bgBorder: 'border-[#E4A853]/30 hover:border-[#E4A853]',
      accentBg: 'bg-[#E4A853]/10 text-[#E4A853]',
    },
  ];

  return (
    <section className="py-12 bg-[#F5F1E8] border-b border-[#E2D9C8]/80 text-[#10131A] relative overflow-hidden">
      {/* Subtle organic artistic background circle */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#16A394]/8 pointer-events-none blur-2xl" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#4F7CFF]/8 pointer-events-none blur-2xl" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {profileItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                data-cursor="card"
                className={`p-5 rounded-2xl bg-white/90 border ${item.bgBorder} transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between backdrop-blur-xs`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[11px] font-mono tracking-wider font-semibold"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </span>
                    <div className={`p-1.5 rounded-lg ${item.accentBg}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="text-sm font-bold text-[#18254A] leading-snug">
                    {item.value}
                  </div>
                </div>
                <div className="text-[11px] text-[#667085] mt-3 pt-2.5 border-t border-[#F0EAE1]">
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
