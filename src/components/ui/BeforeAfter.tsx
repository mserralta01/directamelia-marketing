'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Cloud, ShieldCheck, FolderOpen, FileSpreadsheet, MessageSquare, Plane } from 'lucide-react';

const beforeTools = [
  { icon: Calendar, label: 'Scheduling App' },
  { icon: Cloud, label: 'Weather Service' },
  { icon: ShieldCheck, label: 'SMS Software' },
  { icon: FolderOpen, label: 'Document Storage' },
  { icon: FileSpreadsheet, label: 'Spreadsheets' },
  { icon: MessageSquare, label: 'Group Texts' },
];

export default function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
      {/* Before */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-2xl border border-red-500/10 bg-red-500/[0.02]"
      >
        <p className="text-sm text-red-400/70 uppercase tracking-wider mb-4 font-medium">Before</p>
        <div className="grid grid-cols-2 gap-3">
          {beforeTools.map((tool) => (
            <div key={tool.label} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <tool.icon className="w-4 h-4 text-slate-600" />
              <span className="text-xs text-slate-500">{tool.label}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-600 mt-4 text-center">Disconnected. Redundant. Fragile.</p>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="hidden md:flex items-center justify-center text-brand-400"
      >
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none"><path d="M0 12h36m0 0l-8-8m8 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </motion.div>

      {/* After */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-6 rounded-2xl border border-brand-500/20 bg-brand-500/[0.03] glow-blue-sm"
      >
        <p className="text-sm text-brand-400/70 uppercase tracking-wider mb-4 font-medium">After</p>
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
            <Plane className="w-8 h-8 text-white" />
          </div>
          <span className="text-lg font-semibold text-white">Direct Amelia</span>
          <p className="text-xs text-slate-400 text-center">Scheduling. Dispatch. Fleet. Safety. Compliance. Documents. Analytics.</p>
        </div>
        <p className="text-xs text-brand-400/60 mt-4 text-center">Connected. Intelligent. Complete.</p>
      </motion.div>
    </div>
  );
}
