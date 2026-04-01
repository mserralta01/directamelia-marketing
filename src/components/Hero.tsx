'use client';

import { motion } from 'framer-motion';
import BriefingDemo from '@/components/ui/BriefingDemo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,144,252,0.08)_0%,transparent_70%)]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-600/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-400 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Now in Early Access
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-white">Your AI</span>
          <br />
          <span className="gradient-text">Director of Aviation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          One platform. Six AI specialists. Every flight briefed, every crew
          scheduled, every aircraft tracked, every risk assessed. The flight
          department that never cuts corners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="group relative px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl transition-all duration-300 font-medium text-base glow-blue-sm hover:glow-blue"
          >
            Book a Demo
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#platform"
            className="px-8 py-3.5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl transition-all duration-300 font-medium text-base hover:bg-white/5"
          >
            See the Platform
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <BriefingDemo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 pb-12"
        >
          <p className="text-sm text-slate-500 mb-4">Built for aviation professionals</p>
          <div className="flex items-center justify-center gap-8 text-slate-600 flex-wrap">
            <span className="text-sm font-medium">Part 91 Flight Departments</span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-sm font-medium">Part 135 Charter Operators</span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-sm font-medium">Every Seat in the Operation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
