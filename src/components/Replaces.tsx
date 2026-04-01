'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import GlowCard from '@/components/ui/GlowCard';
import BeforeAfter from '@/components/ui/BeforeAfter';
import { Plane, ShieldCheck, Radio } from 'lucide-react';

const replacements = [
  {
    icon: Plane,
    title: 'Replaces your flight management platform',
    description: 'Scheduling, dispatch, fleet tracking, crew management, and mission planning — unified in one system that actually connects the dots between them.',
  },
  {
    icon: ShieldCheck,
    title: 'Replaces your SMS',
    description: 'Risk assessment, incident reporting, compliance tracking, and trend analysis — native to every operation. Not a separate tool your team has to remember to open.',
  },
  {
    icon: Radio,
    title: 'Replaces your communication chaos',
    description: 'Briefings, schedules, status updates, and alerts flow through one intelligent interface. No more critical information buried in a group text or lost in an email thread.',
  },
];

export default function Replaces() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Consolidate"
          title="One platform instead of five."
          subtitle="Flight management software. Safety management systems. Scheduling tools. Document storage. Spreadsheet reports. Amelia brings it all under one roof — connected, intelligent, and always current."
        />

        <div className="mb-16">
          <BeforeAfter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {replacements.map((item, i) => (
            <GlowCard key={item.title} delay={i * 0.1}>
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
