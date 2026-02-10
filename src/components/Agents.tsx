'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const agents = [
  {
    name: 'Hayes',
    role: 'Dispatch',
    emoji: '🗺️',
    focus: 'Route planning, fuel calculations, weight & balance, NOTAMs',
    color: 'border-emerald-500/30 bg-emerald-500/5',
    textColor: 'text-emerald-400',
  },
  {
    name: 'Skyler',
    role: 'Weather',
    emoji: '🌦️',
    focus: 'METARs, TAFs, PIREPs, SIGMETs, turbulence forecasts',
    color: 'border-blue-500/30 bg-blue-500/5',
    textColor: 'text-blue-400',
  },
  {
    name: 'Riley',
    role: 'Crew',
    emoji: '👨‍✈️',
    focus: 'Qualifications, currency, duty/rest limits, scheduling',
    color: 'border-purple-500/30 bg-purple-500/5',
    textColor: 'text-purple-400',
  },
  {
    name: 'Reeves',
    role: 'Maintenance',
    emoji: '🔧',
    focus: 'Aircraft status, MELs, squawks, inspection due dates',
    color: 'border-yellow-500/30 bg-yellow-500/5',
    textColor: 'text-yellow-400',
  },
  {
    name: 'Parker',
    role: 'Safety',
    emoji: '🛡️',
    focus: 'Overall risk assessment, threat modeling, mitigation',
    color: 'border-orange-500/30 bg-orange-500/5',
    textColor: 'text-orange-400',
  },
  {
    name: 'Avery',
    role: 'Compliance',
    emoji: '⚖️',
    focus: 'Part 91/135 rules, duty limits, regulatory requirements',
    color: 'border-rose-500/30 bg-rose-500/5',
    textColor: 'text-rose-400',
  },
];

export default function Agents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="agents" className="relative py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(52,144,252,0.04)_0%,transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 text-sm font-medium tracking-wide uppercase mb-3">Meet the Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Six agents. Zero blind spots.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each agent is an expert in their domain. Together, they form a complete flight department that never sleeps, never forgets, and never cuts corners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

            return (
              <motion.div
                key={agent.name}
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`p-5 rounded-xl border ${agent.color} transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{agent.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-white">{agent.name}</h3>
                    <p className={`text-sm font-medium ${agent.textColor}`}>{agent.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400">{agent.focus}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
