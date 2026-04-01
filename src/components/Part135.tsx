'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import GlowCard from '@/components/ui/GlowCard';
import { Clock, Route, ShieldCheck, Scale, Users } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Crew Scheduling That Respects the Regs — and Your People',
    description: 'Part 135 duty limits are intricate. Flight time limitations, rest requirements, 24-hour and 7-day lookbacks, 34-hour rest periods. Amelia tracks all of it in real time and prevents illegal pairings before they happen. Your crew gets predictable schedules they can build their lives around. Your ops team stops playing Tetris with legality.',
  },
  {
    icon: Route,
    title: 'Trip Request to Wheels-Up',
    description: 'From the initial charter request through crew assignment, aircraft selection, briefing, dispatch, and post-flight debrief — one continuous workflow. No handoff gaps. No information lost between steps. Every trip flows through the same intelligent pipeline.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrated Safety Management',
    description: 'FRAT scores for every flight. Safety reporting that your team will actually use. Trend analysis that spots patterns before they become incidents. Auditable, CFR-compliant, and woven into every operation — not a separate system your team forgets to update.',
  },
  {
    icon: Scale,
    title: 'Regulatory Intelligence',
    description: 'Amelia knows 14 CFR Part 135. Every briefing cites applicable regulations. Every crew assignment is checked against subpart F duty limitations. Every aircraft dispatch confirms airworthiness requirements under subpart J. Your compliance posture is documented automatically with every flight.',
  },
  {
    icon: Users,
    title: 'Multi-Crew, Multi-Aircraft Coordination',
    description: 'Fatigue modeling, availability calendars, type rating verification, and what-if scheduling analysis. See who is legal, rested, qualified, and available — across your entire crew roster — before you commit to a trip. Scale your operation without scaling your headcount.',
  },
];

export default function Part135() {
  return (
    <section id="part-135" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(16,185,129,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="For Part 135 Operators"
          title="Operational rigor that scales with your certificate."
          subtitle="Part 135 operations demand precision. Amelia enforces every duty limit, tracks every requirement, and ensures every flight meets the standard — so your team can focus on flying, not paperwork."
          labelColor="text-emerald-400"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <GlowCard key={benefit.title} delay={i * 0.1} className="border-emerald-500/5 hover:border-emerald-500/15">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
