'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'during early access',
    description: 'Perfect for individual pilots and small operations.',
    features: [
      '1 aircraft',
      '2 crew members',
      'AI mission briefings',
      'Basic document upload',
      'Part 91 operations',
    ],
    cta: 'Get Started Free',
    href: 'https://app.directamelia.com/signup',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For flight departments that demand the best.',
    features: [
      'Unlimited aircraft',
      'Unlimited crew',
      'All 6 AI agents',
      'Smart document analysis',
      'WhatsApp integration',
      'Living checklists',
      'Mission replay & debrief',
      'Part 91 & Part 135',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    href: 'https://app.directamelia.com/signup',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large operators and management companies.',
    features: [
      'Everything in Professional',
      'Multi-tenant operations',
      'Custom agent configuration',
      'API access',
      'SSO / SAML',
      'Dedicated support',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    href: 'mailto:matt@directamelia.com',
    highlighted: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 text-sm font-medium tracking-wide uppercase mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Start free during early access. Scale when you&apos;re ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

            return (
              <motion.div
                key={plan.name}
                ref={cardRef}
                initial={{ opacity: 0, y: 30 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  plan.highlighted
                    ? 'border-brand-500/40 bg-brand-500/5 glow-blue-sm'
                    : 'border-white/5 bg-white/[0.02]'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-600 text-white text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-400 mb-6">{plan.description}</p>
                
                <a
                  href={plan.href}
                  className={`block w-full py-2.5 rounded-xl text-center text-sm font-medium transition-all duration-300 mb-6 ${
                    plan.highlighted
                      ? 'bg-brand-600 hover:bg-brand-500 text-white'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-brand-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
