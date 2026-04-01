'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Your team deserves a flight department that works as hard as they do.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Dispatchers who finish on time. Pilots who trust their schedules.
              Maintenance that sees problems coming. Owners who see the real numbers.
              One platform that brings your entire operation together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:matt@directamelia.com?subject=Direct%20Amelia%20Demo%20Request&body=Hi%2C%20I'd%20like%20to%20schedule%20a%20demo%20of%20Direct%20Amelia.%0A%0AMy%20operation%3A%0A-%20Part%2091%20%2F%20Part%20135%3A%20%0A-%20Number%20of%20aircraft%3A%20%0A-%20Number%20of%20crew%3A%20%0A%0ABest%20time%20to%20connect%3A%20"
                className="px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl transition-all duration-300 font-medium glow-blue-sm hover:glow-blue"
              >
                Book a Demo →
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
