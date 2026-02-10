'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Tell Amelia your mission',
    description: 'Use natural language. "Thursday, ATL to JFK, G7F, 6 passengers, noon departure." That\'s it.',
    detail: 'Via the web app, WhatsApp, or API',
  },
  {
    number: '02',
    title: 'Agents analyze in parallel',
    description: 'Six specialist agents evaluate the flight simultaneously — crew legality, weather, routing, aircraft status, safety risks, and regulatory compliance.',
    detail: 'Full transparency into each agent\'s reasoning',
  },
  {
    number: '03',
    title: 'Amelia synthesizes & recommends',
    description: 'Your Director of Aviation combines all inputs, highlights conflicts, and delivers a clear GO / NO-GO recommendation with supporting evidence.',
    detail: 'Every concern surfaced, nothing hidden',
  },
  {
    number: '04',
    title: 'Fly with confidence',
    description: 'Brief your crew with a comprehensive mission package. After landing, debrief with full mission replay to continuously improve.',
    detail: 'Living checklists keep you on track',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-brand-400 text-sm font-medium tracking-wide uppercase mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From request to runway
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A complete flight department in your pocket. Four steps to safer operations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const stepRef = useRef(null);
              const stepInView = useInView(stepRef, { once: true, margin: '-50px' });

              return (
                <motion.div
                  key={step.number}
                  ref={stepRef}
                  initial={{ opacity: 0, x: -30 }}
                  animate={stepInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
