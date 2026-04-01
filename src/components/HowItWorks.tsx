'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Upload your mission',
    description: 'Enter your route, aircraft, and crew details -- or just describe your trip in plain language.',
  },
  {
    number: '02',
    title: 'Agents analyze in parallel',
    description: 'Six specialist agents simultaneously review weather, NOTAMs, crew currency, maintenance, safety risks, and regulations.',
  },
  {
    number: '03',
    title: 'Amelia synthesizes',
    description: 'Your AI Director weighs every input, flags conflicts, and delivers one clear GO / NO-GO recommendation with full reasoning.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="relative py-32">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 text-sm font-medium tracking-wide uppercase mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From mission to decision in seconds
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three steps. Six agents. One clear answer.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="flex items-start gap-6"
            >
              <span className="text-3xl font-bold text-brand-400/30 font-mono shrink-0">{step.number}</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
