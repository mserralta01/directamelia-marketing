'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle: string;
  labelColor?: string;
}

export default function SectionHeader({ label, title, subtitle, labelColor = 'text-brand-400' }: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className={`${labelColor} text-sm font-medium tracking-wide uppercase mb-3`}>{label}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
}
