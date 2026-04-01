'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface FeatureBlockProps {
  title: string;
  description: string;
  visual: ReactNode;
  reversed?: boolean;
  accentColor?: string;
  glowClass?: string;
}

export default function FeatureBlock({ title, description, visual, reversed = false, accentColor = 'brand-500', glowClass }: FeatureBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
    >
      <div className={reversed ? 'lg:order-2' : ''}>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
      </div>
      <div className={`${reversed ? 'lg:order-1' : ''} ${glowClass || ''}`}>
        {visual}
      </div>
    </motion.div>
  );
}
