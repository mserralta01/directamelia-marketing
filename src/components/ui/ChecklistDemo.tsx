'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Clock, AlertTriangle } from 'lucide-react';

const items = [
  { label: 'Aircraft registration current', status: 'checked' as const, agent: 'Avery', time: '30d' },
  { label: 'Crew currency verified', status: 'checked' as const, agent: 'Hayes', time: '72h' },
  { label: 'Weather briefing complete', status: 'checked' as const, agent: 'Skyler', time: '24h' },
  { label: 'Weight & balance calculated', status: 'checked' as const, agent: 'Riley', time: '2h' },
  { label: 'MEL items reviewed', status: 'caution' as const, agent: 'Reeves', time: '2h' },
  { label: 'NOTAMs reviewed', status: 'pending' as const, agent: 'Riley', time: 'Pre-dep' },
  { label: 'Passenger manifest confirmed', status: 'pending' as const, agent: '—', time: 'Pre-dep' },
];

export default function ChecklistDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <span className="text-xs text-slate-500 uppercase tracking-wider">Mission Checklist</span>
        <span className="text-xs text-emerald-400">5/7 verified</span>
      </div>
      <div className="p-4 space-y-1">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/[0.02] transition-colors"
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
              item.status === 'checked' ? 'bg-emerald-500/20 text-emerald-400' :
              item.status === 'caution' ? 'bg-amber-500/20 text-amber-400' :
              'bg-white/5 text-slate-600'
            }`}>
              {item.status === 'checked' && <Check className="w-3 h-3" />}
              {item.status === 'caution' && <AlertTriangle className="w-3 h-3" />}
              {item.status === 'pending' && <Clock className="w-3 h-3" />}
            </div>
            <span className={`text-sm flex-1 ${item.status === 'checked' ? 'text-slate-400' : item.status === 'caution' ? 'text-amber-300' : 'text-slate-500'}`}>
              {item.label}
            </span>
            <span className="text-xs text-slate-600 w-16 text-right">{item.time}</span>
            <span className={`text-xs w-14 text-right ${
              item.status === 'checked' ? 'text-emerald-500/60' :
              item.status === 'caution' ? 'text-amber-500/60' :
              'text-slate-600'
            }`}>{item.agent}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
