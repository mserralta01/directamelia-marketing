'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Briefing', 'Ops Status'] as const;
type Tab = typeof tabs[number];

function BriefingTab() {
  return (
    <div className="p-6 text-left font-mono text-sm space-y-4">
      <div>
        <span className="text-brand-400">You:</span>
        <span className="text-slate-300 ml-2">&quot;Thursday, ATL → JFK, G7F, 6 pax, noon departure&quot;</span>
      </div>
      <div className="border-l-2 border-emerald-500/40 pl-4 space-y-2">
        <div><span className="text-emerald-400 font-semibold">Riley — Dispatch:</span> <span className="text-slate-400">Route filed. KATL → KJFK via J75. Fuel: 4,200 lbs. ETE 2h12m.</span></div>
        <div><span className="text-blue-400 font-semibold">Skyler — Weather:</span> <span className="text-slate-400">VFR conditions both ends. Light chop FL350-FL390.</span></div>
        <div><span className="text-purple-400 font-semibold">Hayes — Crew:</span> <span className="text-slate-400">Capt. Morrison &amp; FO Chen qualified, duty-legal, current.</span></div>
        <div><span className="text-yellow-400 font-semibold">Reeves — Maintenance:</span> <span className="text-slate-400">MEL B-4: #2 bleed air. Ops-legal but monitor cabin pressure.</span></div>
        <div><span className="text-orange-400 font-semibold">Parker — Safety:</span> <span className="text-slate-400">Risk: LOW. One advisory — NOTAMs show RWY 4R/22L closed JFK.</span></div>
        <div><span className="text-rose-400 font-semibold">Avery — Compliance:</span> <span className="text-slate-400">Part 91 ops confirmed. All currency requirements met.</span></div>
      </div>
      <div>
        <span className="text-brand-400 font-semibold">Amelia:</span>
        <span className="text-slate-300 ml-2">Flight is <span className="text-emerald-400 font-semibold">APPROVED WITH CONDITIONS</span>. All departments concur. Brief crew on MEL #2 bleed air and JFK runway closure.</span>
      </div>
    </div>
  );
}

function OpsTab() {
  return (
    <div className="p-6 text-left font-mono text-sm space-y-3">
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <span className="text-slate-500 text-xs uppercase tracking-wider">Live Operations</span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />3 Active</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.02]">
          <span className="text-emerald-400">●</span>
          <span className="text-white font-medium">N701GS</span>
          <span className="text-slate-500">KATL → KJFK</span>
          <span className="ml-auto text-emerald-400 text-xs">En Route — FL380</span>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.02]">
          <span className="text-blue-400">●</span>
          <span className="text-white font-medium">N502DA</span>
          <span className="text-slate-500">KMIA → KTEB</span>
          <span className="ml-auto text-blue-400 text-xs">Boarding</span>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.02]">
          <span className="text-amber-400">●</span>
          <span className="text-white font-medium">N388PT</span>
          <span className="text-slate-500">KLAS → KVNY</span>
          <span className="ml-auto text-amber-400 text-xs">Crew Assigned</span>
        </div>
      </div>
      <div className="pt-2 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
        <div><span className="block text-lg font-bold text-white">7</span><span className="text-xs text-slate-500">Aircraft</span></div>
        <div><span className="block text-lg font-bold text-white">12</span><span className="text-xs text-slate-500">Crew</span></div>
        <div><span className="block text-lg font-bold text-white">0</span><span className="text-xs text-slate-500">Alerts</span></div>
      </div>
    </div>
  );
}

export default function BriefingDemo() {
  const [activeTab, setActiveTab] = useState<Tab>('Briefing');

  return (
    <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-3 flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${
                activeTab === tab
                  ? 'bg-white/10 text-white'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'Briefing' ? <BriefingTab /> : <OpsTab />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
