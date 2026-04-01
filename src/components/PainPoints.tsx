'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import GlowCard from '@/components/ui/GlowCard';
import { Unplug, CalendarClock, ShieldAlert } from 'lucide-react';

const pains = [
  {
    icon: Unplug,
    title: 'Five tools, none of them talking',
    description: 'Scheduling in one app, weather in another, maintenance in a spreadsheet, safety reports in a filing cabinet. Your operation is scattered across a dozen systems that have no idea the others exist.',
    iconColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: CalendarClock,
    title: 'Crew scheduling that costs you weekends',
    description: 'Building a legal schedule takes hours. Then someone calls in, a duty limit slips, and the whole thing unravels. Your crew deserves predictability. Your dispatchers deserve their sanity.',
    iconColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: ShieldAlert,
    title: 'Compliance held together by memory',
    description: 'Medicals expire. Currency lapses. Duty limits get crossed. Someone catches it — until the day nobody does. And that is always the day it matters most.',
    iconColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
];

export default function PainPoints() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="The Problem"
          title="Running a flight department shouldn't feel like this"
          subtitle="If any of this sounds familiar, you're not alone. Every flight department hits these walls."
          labelColor="text-red-400/80"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <GlowCard key={pain.title} delay={i * 0.1} className="border-red-500/5 hover:border-red-500/10">
              <div className={`w-12 h-12 rounded-xl ${pain.bgColor} flex items-center justify-center mb-4`}>
                <pain.icon className={`w-6 h-6 ${pain.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{pain.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{pain.description}</p>
            </GlowCard>
          ))}
        </div>

        <p className="text-center text-slate-500 text-lg mt-16">There&apos;s a better way to run a flight department.</p>
      </div>
    </section>
  );
}
