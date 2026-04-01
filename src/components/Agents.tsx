'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

const agents = [
  {
    name: 'Hayes',
    role: 'Crew Scheduling & Compliance',
    focus: 'Qualifications, currency, duty/rest limits, fatigue modeling, type ratings',
    example: '"Capt. Morrison current on G-IV. 8h42m remaining in duty window. Fatigue score: LOW."',
    color: 'border-purple-500/30 bg-purple-500/5',
    textColor: 'text-purple-400',
    dotColor: 'bg-purple-400',
  },
  {
    name: 'Skyler',
    role: 'Weather Intelligence',
    focus: 'METARs, TAFs, PIREPs, SIGMETs, turbulence forecasts, ceiling & visibility analysis',
    example: '"KJFK: BKN025, vis 6SM, winds 210/12G18. Improving trend. VFR approach expected."',
    color: 'border-blue-500/30 bg-blue-500/5',
    textColor: 'text-blue-400',
    dotColor: 'bg-blue-400',
  },
  {
    name: 'Riley',
    role: 'Dispatch & Routing',
    focus: 'Route planning, fuel calculations, weight & balance, NOTAMs, TFRs, alternates',
    example: '"KATL→KJFK via J75. Fuel required: 4,200 lbs. ETE 2h12m. NOTAM: RWY 4R/22L closed."',
    color: 'border-emerald-500/30 bg-emerald-500/5',
    textColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
  },
  {
    name: 'Reeves',
    role: 'Maintenance & Airworthiness',
    focus: 'Aircraft status, MEL items, squawk review, inspection tracking, AD compliance',
    example: '"MEL B-4 active: #2 bleed air. Ops-legal per MEL. Next inspection: 47.2 hrs remaining."',
    color: 'border-amber-500/30 bg-amber-500/5',
    textColor: 'text-amber-400',
    dotColor: 'bg-amber-400',
  },
  {
    name: 'Parker',
    role: 'Safety & Risk Assessment',
    focus: 'Cross-domain threat analysis, FRAT scoring, risk mitigation, trend identification',
    example: '"FRAT score: 9/25 — LOW RISK. One advisory: MEL item plus gusty crosswind at destination."',
    color: 'border-orange-500/30 bg-orange-500/5',
    textColor: 'text-orange-400',
    dotColor: 'bg-orange-400',
  },
  {
    name: 'Avery',
    role: 'Legal & Regulatory',
    focus: 'Part 91/135 compliance, CFR citations, duty limit enforcement, operational authority',
    example: '"Part 91 operations confirmed. All 14 CFR 91.409 inspections current. No regulatory conflicts."',
    color: 'border-rose-500/30 bg-rose-500/5',
    textColor: 'text-rose-400',
    dotColor: 'bg-rose-400',
  },
];

function AgentCard({ agent, index }: { agent: typeof agents[number]; index: number }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={cardInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`p-5 rounded-xl border ${agent.color} transition-all duration-300 hover:scale-[1.02]`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className={`w-2.5 h-2.5 rounded-full ${agent.dotColor}`} />
        <div>
          <h3 className="font-semibold text-white">{agent.name}</h3>
          <p className={`text-sm font-medium ${agent.textColor}`}>{agent.role}</p>
        </div>
      </div>
      <p className="text-sm text-slate-400 mb-3">{agent.focus}</p>
      <div className="mt-auto pt-3 border-t border-white/5">
        <p className="text-xs text-slate-500 font-mono leading-relaxed">{agent.example}</p>
      </div>
    </motion.div>
  );
}

export default function Agents() {
  return (
    <section id="agents" className="relative py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(52,144,252,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Meet the Team"
          title="A specialist for every domain. Zero blind spots."
          subtitle="Each agent is an expert in their field. Together, they form a flight department that never sleeps, never forgets, and never takes shortcuts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent, i) => (
            <AgentCard key={agent.name} agent={agent} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-brand-500/20 bg-brand-500/5">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <p className="text-sm text-slate-300">
              <span className="text-brand-400 font-semibold">Then Amelia brings it all together</span> — weighing every input, flagging conflicts, and delivering one clear recommendation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
