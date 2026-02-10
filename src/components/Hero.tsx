'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,144,252,0.08)_0%,transparent_70%)]" />
      
      {/* Animated orbs */}
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
          Six AI specialists analyze every flight from every angle — crew, weather, 
          dispatch, maintenance, safety, and compliance. Catch what humans miss.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://app.directamelia.com/signup"
            className="group relative px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl transition-all duration-300 font-medium text-base glow-blue-sm hover:glow-blue"
          >
            Start Free Trial
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl transition-all duration-300 font-medium text-base hover:bg-white/5"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Terminal-style demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-slate-500">Briefing Room — Direct Amelia</span>
            </div>
            <div className="p-6 text-left font-mono text-sm space-y-4">
              <div>
                <span className="text-brand-400">You:</span>
                <span className="text-slate-300 ml-2">&quot;Thursday, ATL → JFK, G7F, 6 pax, noon departure&quot;</span>
              </div>
              <div className="border-l-2 border-emerald-500/40 pl-4 space-y-2">
                <div><span className="text-emerald-400 font-semibold">✓ Dispatch:</span> <span className="text-slate-400">Route filed. KATL → KJFK via J75. Fuel: 4,200 lbs. ETE 2h12m.</span></div>
                <div><span className="text-blue-400 font-semibold">✓ Weather:</span> <span className="text-slate-400">VFR conditions both ends. Light chop FL350-FL390.</span></div>
                <div><span className="text-purple-400 font-semibold">✓ Crew:</span> <span className="text-slate-400">Capt. Morrison & FO Chen qualified, duty-legal, current.</span></div>
                <div><span className="text-yellow-400 font-semibold">⚠ Maintenance:</span> <span className="text-slate-400">MEL B-4: #2 bleed air. Ops-legal but monitor cabin pressure.</span></div>
                <div><span className="text-orange-400 font-semibold">✓ Safety:</span> <span className="text-slate-400">Risk: LOW. One advisory — NOTAMs show RWY 4R/22L closed JFK.</span></div>
              </div>
              <div>
                <span className="text-brand-400 font-semibold">Amelia:</span>
                <span className="text-slate-300 ml-2">Flight is <span className="text-emerald-400 font-semibold">GO</span>. All departments concur. One item to brief: MEL on #2 bleed air.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 pb-12"
        >
          <p className="text-sm text-slate-500 mb-4">Built for aviation professionals</p>
          <div className="flex items-center justify-center gap-8 text-slate-600">
            <span className="text-sm font-medium">Part 91</span>
            <span className="text-slate-700">•</span>
            <span className="text-sm font-medium">Part 135</span>
            <span className="text-slate-700">•</span>
            <span className="text-sm font-medium">Flight Departments</span>
            <span className="text-slate-700">•</span>
            <span className="text-sm font-medium">Charter Operators</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
