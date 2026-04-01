'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { Settings, Handshake, Zap } from 'lucide-react';

const valueProps = [
  {
    icon: Settings,
    title: 'Tailored to your operation',
    description: 'We configure the demo around your aircraft, your routes, and your crew size. You see your operation — not a generic walkthrough.',
  },
  {
    icon: Handshake,
    title: 'No strings attached',
    description: 'Explore the platform. Ask the hard questions. Take your time deciding. This is about whether Amelia fits your operation, not a sales pitch.',
  },
  {
    icon: Zap,
    title: 'Clarity in 30 minutes',
    description: 'You will leave the call knowing exactly what Amelia does for your specific fleet, your crew, and your operational challenges.',
  },
];

export default function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="relative py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,144,252,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Get Started"
          title="See what changes in 30 minutes."
          subtitle="Every flight department is different. Walk us through your operation and we'll show you exactly how Amelia fits — which agents matter most for your fleet, how scheduling works for your crew size, and what your safety posture looks like with AI backing every decision."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                <prop.icon className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{prop.title}</h3>
              <p className="text-sm text-slate-400">{prop.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="mailto:matt@directamelia.com?subject=Direct%20Amelia%20Demo%20Request&body=Hi%2C%20I'd%20like%20to%20schedule%20a%20demo%20of%20Direct%20Amelia.%0A%0AMy%20operation%3A%0A-%20Part%2091%20%2F%20Part%20135%3A%20%0A-%20Number%20of%20aircraft%3A%20%0A-%20Number%20of%20crew%3A%20%0A%0ABest%20time%20to%20connect%3A%20"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl transition-all duration-300 font-semibold text-lg glow-blue-sm hover:glow-blue"
          >
            Book a Demo →
          </a>
          <p className="mt-4 text-sm text-slate-500">
            Or reach out directly — <a href="mailto:matt@directamelia.com" className="text-brand-400 hover:text-brand-300 transition-colors">matt@directamelia.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
