'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import GlowCard from '@/components/ui/GlowCard';
import { Eye, ShieldCheck, Plane, FileText, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: 'Owner Visibility',
    description: 'Aircraft owners invest millions. They deserve real-time insight into how their asset is performing — utilization rates, cost trends, maintenance health, and operational summaries delivered automatically. No more assembling reports by hand.',
  },
  {
    icon: ShieldCheck,
    title: 'Currency & Compliance That Tracks Itself',
    description: 'Medical expirations, flight reviews, type currency, instrument proficiency checks — Amelia monitors every requirement for every crew member and surfaces issues weeks before they become problems. Not after.',
  },
  {
    icon: Plane,
    title: 'Professional Briefings for Every Flight',
    description: 'Six specialists evaluate every mission the way a major flight department would. Weather, routing, crew legality, aircraft status, safety risk, and regulatory compliance — analyzed in parallel, synthesized in seconds. Even a single-aircraft operation flies with the diligence of a Fortune 500 fleet.',
  },
  {
    icon: FileText,
    title: 'Documents That Manage Themselves',
    description: 'Insurance certificates, airworthiness directives, registration renewals — uploaded once, tracked forever. AI monitors expiration dates and alerts you before anything lapses. Your filing cabinet is now intelligent.',
  },
  {
    icon: DollarSign,
    title: 'True Operating Costs',
    description: 'Fuel, maintenance, crew expenses, hangar fees — broken down by aircraft, by route, by time period. Make fleet decisions based on data, not intuition. See exactly what each flight hour costs and where the money goes.',
  },
];

export default function Part91() {
  return (
    <section id="part-91" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(52,144,252,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="For Part 91 Flight Departments"
          title="The discipline of a world-class flight department. Without the overhead."
          subtitle="Whether you operate one aircraft or ten, Amelia brings the operational rigor, safety culture, and professional standards that used to require a team of twenty."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <GlowCard key={benefit.title} delay={i * 0.1} className="border-brand-500/5 hover:border-brand-500/15">
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 text-brand-400" />
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
