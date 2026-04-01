'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const riskFactors = [
  { label: 'Weather', score: 2, max: 5, color: 'bg-emerald-500' },
  { label: 'Crew Fatigue', score: 1, max: 5, color: 'bg-emerald-500' },
  { label: 'Aircraft MEL', score: 3, max: 5, color: 'bg-amber-500' },
  { label: 'Airport Conditions', score: 2, max: 5, color: 'bg-emerald-500' },
  { label: 'Regulatory', score: 1, max: 5, color: 'bg-emerald-500' },
];

export default function RiskGauge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const totalScore = riskFactors.reduce((sum, f) => sum + f.score, 0);
  const maxScore = riskFactors.reduce((sum, f) => sum + f.max, 0);

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <span className="text-xs text-slate-500 uppercase tracking-wider">Flight Risk Assessment</span>
        <span className="text-xs text-emerald-400 font-medium">LOW RISK</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative w-28 h-28 rounded-full border-4 border-emerald-500/30 flex items-center justify-center"
          >
            <div className="text-center">
              <span className="text-3xl font-bold text-white">{totalScore}</span>
              <span className="text-sm text-slate-500">/{maxScore}</span>
            </div>
          </motion.div>
        </div>
        <div className="space-y-3">
          {riskFactors.map((factor, i) => (
            <motion.div
              key={factor.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs text-slate-500 w-28">{factor.label}</span>
              <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${(factor.score / factor.max) * 100}%` } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className={`h-full rounded-full ${factor.color}`}
                />
              </div>
              <span className="text-xs text-slate-600 w-8 text-right">{factor.score}/{factor.max}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
