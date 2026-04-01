'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import ChecklistDemo from '@/components/ui/ChecklistDemo';

const phases = [
  { label: 'Planning', color: 'bg-brand-500' },
  { label: 'Briefing', color: 'bg-purple-500' },
  { label: 'Dispatch', color: 'bg-emerald-500' },
  { label: 'In-Flight', color: 'bg-blue-500' },
  { label: 'Landed', color: 'bg-amber-500' },
  { label: 'Debrief', color: 'bg-rose-500' },
];

export default function MissionLifecycle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Mission Lifecycle"
          title="Every flight. Start to finish. Nothing missed."
          subtitle="From initial planning through post-flight debrief, Amelia guides your operation through a structured workflow with intelligent checklists that adapt to your timeline."
        />

        <div ref={ref} className="flex items-center justify-center gap-1 md:gap-2 mb-16 flex-wrap">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-1 md:gap-2"
            >
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg border border-white/5 bg-white/[0.02]">
                <span className={`w-2 h-2 rounded-full ${phase.color}`} />
                <span className="text-xs md:text-sm text-slate-300 font-medium">{phase.label}</span>
              </div>
              {i < phases.length - 1 && (
                <svg className="w-4 h-4 text-slate-700 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Living checklists that count down with your mission</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              30-day planning items. 72-hour confirmations. 24-hour crew notifications. 2-hour final checks. Pre-departure verifications. Each item is verified by the appropriate AI agent — and checks itself as conditions are met.
            </p>
            <p className="text-slate-400 leading-relaxed">
              After landing, the debrief captures everything — what each agent recommended, what changed during the flight, and what the operation can learn for next time. Every flight makes the next one smarter.
            </p>
          </div>
          <ChecklistDemo />
        </div>
      </div>
    </section>
  );
}
