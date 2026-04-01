// src/components/BriefingSystem.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Describe your mission',
    description: 'Use natural language. "Thursday, KATL to KJFK, G7F, 6 passengers, noon departure." That\'s all Amelia needs.',
    detail: 'Via the web app, WhatsApp, or API',
  },
  {
    number: '02',
    title: 'Six specialists analyze in parallel',
    description: 'Crew legality, weather, routing, aircraft airworthiness, safety risk, and regulatory compliance — evaluated simultaneously. Each agent streams its findings in real time.',
    detail: 'Full transparency into every agent\'s reasoning',
  },
  {
    number: '03',
    title: 'Amelia synthesizes and recommends',
    description: 'Your Director of Aviation weighs every input, flags conflicts, cross-references regulations, and delivers a clear GO, APPROVED WITH CONDITIONS, or NO-GO — with the evidence behind it.',
    detail: 'Every concern surfaced. Every regulation cited. Nothing hidden.',
  },
  {
    number: '04',
    title: 'Fly with confidence',
    description: 'Brief your crew with a complete mission package. Living checklists track every item from 30 days out to pre-departure. After landing, debrief with full mission replay.',
    detail: 'Every flight makes the next one better',
  },
];

function StepCard({ step, index }: { step: typeof steps[number]; index: number }) {
  const stepRef = useRef(null);
  const stepInView = useInView(stepRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, x: -30 }}
      animate={stepInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex gap-8 items-start"
    >
      <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 items-center justify-center">
        <span className="text-brand-400 font-bold text-sm">{step.number}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
        <p className="text-slate-400 leading-relaxed mb-2">{step.description}</p>
        <p className="text-sm text-brand-400/70">{step.detail}</p>
      </div>
    </motion.div>
  );
}

export default function BriefingSystem() {
  return (
    <section id="how-it-works" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="The AI Briefing System"
          title="Six agents. Ninety seconds. Every angle covered."
          subtitle="Tell Amelia where you're going. She assembles a team of specialists who analyze your flight in parallel — then delivers a clear recommendation with the evidence to back it up."
        />

        <div className="relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
