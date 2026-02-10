'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative text-center p-12 md:p-20 rounded-3xl border border-brand-500/20 bg-gradient-to-b from-brand-500/5 to-transparent overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,144,252,0.1)_0%,transparent_70%)]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready for safer flights?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
              Join the early access program and experience what it&apos;s like to have an AI flight department backing every mission.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.directamelia.com/signup"
                className="px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl transition-all duration-300 font-medium glow-blue-sm hover:glow-blue"
              >
                Start Free Trial →
              </a>
              <a
                href="mailto:matt@directamelia.com"
                className="px-8 py-3.5 text-slate-300 hover:text-white transition-colors font-medium"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
