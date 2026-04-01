# Direct Amelia Marketing Website v2 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Direct Amelia marketing site from 8 sections to 13, adding complete platform showcase, Part 91/135 dedicated segments, competitive displacement, and converting all CTAs to demo booking — while preserving the existing dark cockpit design system.

**Architecture:** Single-page Next.js 16 app with React 19, Tailwind CSS 4, and Framer Motion. Each section is a self-contained component. Shared UI primitives (SectionHeader, FeatureBlock, GlowCard) are extracted to avoid repetition. Page composition in `page.tsx` renders all sections in order.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4 (using `@theme` in globals.css, NOT tailwind.config.ts), Framer Motion 12, Lucide React icons. Path alias `@/*` maps to `src/*`.

**Important Tailwind 4 note:** This project uses Tailwind CSS v4 with `@tailwindcss/postcss`. Colors are defined in `globals.css` via `@theme { }` blocks. The `tailwind.config.ts` file exists but Tailwind 4 primarily reads `@theme` from CSS. All new color tokens go in `globals.css`.

**Working directory:** `/Users/mattserralta/Development/directamelia-marketing`

**Validation command:** `npm run build` — must pass with zero errors before any commit.

**Branch:** Create `feature/marketing-v2` from current state before starting.

---

## File Structure

### New Files
- `src/components/ui/SectionHeader.tsx` — Reusable section header (label + H2 + sub)
- `src/components/ui/FeatureBlock.tsx` — Two-column text + visual layout (alternating)
- `src/components/ui/GlowCard.tsx` — Card with accent-colored glow border
- `src/components/ui/BriefingDemo.tsx` — Code-rendered terminal demo (extracted from Hero)
- `src/components/ui/ChecklistDemo.tsx` — Animated checklist visual
- `src/components/ui/RiskGauge.tsx` — FRAT risk gauge visual
- `src/components/ui/BeforeAfter.tsx` — Tool replacement comparison
- `src/components/PainPoints.tsx` — Problem statement section
- `src/components/BriefingSystem.tsx` — Evolved How It Works
- `src/components/Platform.tsx` — Complete platform reveal (6 blocks)
- `src/components/Part91.tsx` — Part 91 dedicated section
- `src/components/Part135.tsx` — Part 135 dedicated section
- `src/components/MissionLifecycle.tsx` — Lifecycle + checklists
- `src/components/Replaces.tsx` — Competitive displacement
- `src/components/DemoSection.tsx` — Replaces Pricing (demo CTA)
- `src/components/FinalCTA.tsx` — Emotional closing CTA

### Modified Files
- `src/app/page.tsx` — Updated section composition (13 sections)
- `src/app/layout.tsx` — Updated metadata for SEO
- `src/app/globals.css` — New section accent color tokens + utilities
- `src/components/Navbar.tsx` — Updated nav links + demo CTA
- `src/components/Hero.tsx` — Enhanced subheadline + dual demo + new CTAs
- `src/components/Agents.tsx` — Richer cards with example output snippets
- `src/components/Footer.tsx` — Expanded with more links

### Deleted Files
- `src/components/HowItWorks.tsx` — Replaced by BriefingSystem.tsx
- `src/components/Pricing.tsx` — Replaced by DemoSection.tsx
- `src/components/CTA.tsx` — Replaced by FinalCTA.tsx

---

## Task 0: Branch Setup

**Files:** None

- [ ] **Step 1: Create feature branch**

```bash
cd /Users/mattserralta/Development/directamelia-marketing
git checkout -b feature/marketing-v2
```

- [ ] **Step 2: Verify clean state**

```bash
git status
npm run build
```

Expected: Clean working tree, build passes.

---

## Task 1: Update Design Tokens & Globals

**Files:**
- Modify: `src/app/globals.css`

This task adds section accent colors, new utilities, and animation keyframes needed by later components.

- [ ] **Step 1: Update globals.css with new tokens and utilities**

Replace the entire contents of `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme {
  --color-brand-50: #eef7ff;
  --color-brand-100: #d9edff;
  --color-brand-200: #bce0ff;
  --color-brand-300: #8ecdff;
  --color-brand-400: #59b0ff;
  --color-brand-500: #3490fc;
  --color-brand-600: #1e70f1;
  --color-brand-700: #165ade;
  --color-brand-800: #1849b4;
  --color-brand-900: #1a408e;
  --color-brand-950: #152856;
  --color-slate-925: #0d1320;
  --color-slate-950: #080d19;

  /* Section accent colors */
  --color-ops-accent: #3490fc;
  --color-crew-accent: #8b5cf6;
  --color-fleet-accent: #f59e0b;
  --color-safety-accent: #10b981;
  --color-docs-accent: #06b6d4;
  --color-analytics-accent: #f43f5e;

  /* Animations */
  --animate-fade-in: fadeIn 0.8s ease-out forwards;
  --animate-slide-up: slideUp 0.8s ease-out forwards;
  --animate-float: float 6s ease-in-out infinite;
  --animate-pulse-slow: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-glow: glow 2s ease-in-out infinite alternate;
  --animate-check-in: checkIn 0.4s ease-out forwards;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes slideUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  @keyframes glow {
    0% { box-shadow: 0 0 20px rgba(52, 144, 252, 0.3); }
    100% { box-shadow: 0 0 40px rgba(52, 144, 252, 0.6); }
  }
  @keyframes checkIn {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); opacity: 1; }
  }
}

html {
  scroll-behavior: smooth;
}

body {
  background: #080d19;
  color: #e2e8f0;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0d1320;
}
::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #334155;
}

/* Gradient text utility */
.gradient-text {
  background: linear-gradient(135deg, #59b0ff 0%, #3490fc 50%, #1e70f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-warm {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Noise texture overlay */
.noise-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

/* Grid background */
.grid-bg {
  background-image:
    linear-gradient(rgba(52, 144, 252, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(52, 144, 252, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Glow effects */
.glow-blue {
  box-shadow: 0 0 60px -12px rgba(52, 144, 252, 0.4);
}

.glow-blue-sm {
  box-shadow: 0 0 30px -8px rgba(52, 144, 252, 0.3);
}

/* Section accent glows */
.glow-section-ops { box-shadow: 0 0 80px -20px rgba(52, 144, 252, 0.15); }
.glow-section-crew { box-shadow: 0 0 80px -20px rgba(139, 92, 246, 0.15); }
.glow-section-fleet { box-shadow: 0 0 80px -20px rgba(245, 158, 11, 0.15); }
.glow-section-safety { box-shadow: 0 0 80px -20px rgba(16, 185, 129, 0.15); }
.glow-section-docs { box-shadow: 0 0 80px -20px rgba(6, 182, 212, 0.15); }
.glow-section-analytics { box-shadow: 0 0 80px -20px rgba(244, 63, 94, 0.15); }
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: update design tokens with section accent colors and new utilities"
```

---

## Task 2: Shared UI Primitives

**Files:**
- Create: `src/components/ui/SectionHeader.tsx`
- Create: `src/components/ui/FeatureBlock.tsx`
- Create: `src/components/ui/GlowCard.tsx`

These three components are used across 8+ sections. Build them first.

- [ ] **Step 1: Create SectionHeader**

```tsx
// src/components/ui/SectionHeader.tsx
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
```

- [ ] **Step 2: Create FeatureBlock**

```tsx
// src/components/ui/FeatureBlock.tsx
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
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:direction-rtl' : ''}`}
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
```

- [ ] **Step 3: Create GlowCard**

```tsx
// src/components/ui/GlowCard.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function GlowCard({ children, delay = 0, className = '' }: GlowCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-white/10 ${className}`}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: Build passes (components are not yet imported anywhere, but must compile).

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add shared UI primitives — SectionHeader, FeatureBlock, GlowCard"
```

---

## Task 3: Code-Rendered Visual Components

**Files:**
- Create: `src/components/ui/BriefingDemo.tsx`
- Create: `src/components/ui/ChecklistDemo.tsx`
- Create: `src/components/ui/RiskGauge.tsx`
- Create: `src/components/ui/BeforeAfter.tsx`

These are the stylized product illustrations used across multiple sections.

- [ ] **Step 1: Create BriefingDemo**

This is extracted and enhanced from the current Hero terminal demo. It supports two tabs: Briefing and Ops Status.

```tsx
// src/components/ui/BriefingDemo.tsx
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
```

- [ ] **Step 2: Create ChecklistDemo**

```tsx
// src/components/ui/ChecklistDemo.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Clock, AlertTriangle } from 'lucide-react';

const items = [
  { label: 'Aircraft registration current', status: 'checked' as const, agent: 'Avery', time: '30d' },
  { label: 'Crew currency verified', status: 'checked' as const, agent: 'Hayes', time: '72h' },
  { label: 'Weather briefing complete', status: 'checked' as const, agent: 'Skyler', time: '24h' },
  { label: 'Weight & balance calculated', status: 'checked' as const, agent: 'Riley', time: '2h' },
  { label: 'MEL items reviewed', status: 'caution' as const, agent: 'Reeves', time: '2h' },
  { label: 'NOTAMs reviewed', status: 'pending' as const, agent: 'Riley', time: 'Pre-dep' },
  { label: 'Passenger manifest confirmed', status: 'pending' as const, agent: '—', time: 'Pre-dep' },
];

export default function ChecklistDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <span className="text-xs text-slate-500 uppercase tracking-wider">Mission Checklist</span>
        <span className="text-xs text-emerald-400">5/7 verified</span>
      </div>
      <div className="p-4 space-y-1">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/[0.02] transition-colors"
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
              item.status === 'checked' ? 'bg-emerald-500/20 text-emerald-400' :
              item.status === 'caution' ? 'bg-amber-500/20 text-amber-400' :
              'bg-white/5 text-slate-600'
            }`}>
              {item.status === 'checked' && <Check className="w-3 h-3" />}
              {item.status === 'caution' && <AlertTriangle className="w-3 h-3" />}
              {item.status === 'pending' && <Clock className="w-3 h-3" />}
            </div>
            <span className={`text-sm flex-1 ${item.status === 'checked' ? 'text-slate-400' : item.status === 'caution' ? 'text-amber-300' : 'text-slate-500'}`}>
              {item.label}
            </span>
            <span className="text-xs text-slate-600 w-16 text-right">{item.time}</span>
            <span className={`text-xs w-14 text-right ${
              item.status === 'checked' ? 'text-emerald-500/60' :
              item.status === 'caution' ? 'text-amber-500/60' :
              'text-slate-600'
            }`}>{item.agent}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create RiskGauge**

```tsx
// src/components/ui/RiskGauge.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const riskFactors = [
  { label: 'Weather', score: 2, max: 5, color: 'bg-emerald-500' },
  { label: 'Crew Fatigue', score: 1, max: 5, color: 'bg-emerald-500' },
  { label: 'Aircraft MEL', score: 3, max: 5, color: 'bg-amber-500' },
  { label: 'Airport Conditions', score: 2, max: 5, color: 'bg-emerald-500' },
  { label: 'Regulatory', score: 1, max: 5, color: 'bg-emerald-500' },
];

export default function RiskGauge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const totalScore = riskFactors.reduce((sum, f) => sum + f.score, 0);
  const maxScore = riskFactors.reduce((sum, f) => sum + f.max, 0);

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <span className="text-xs text-slate-500 uppercase tracking-wider">Flight Risk Assessment</span>
        <span className="text-xs text-emerald-400 font-medium">LOW RISK</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative w-28 h-28 rounded-full border-4 border-emerald-500/30 flex items-center justify-center"
          >
            <div className="text-center">
              <span className="text-3xl font-bold text-white">{totalScore}</span>
              <span className="text-sm text-slate-500">/{maxScore}</span>
            </div>
          </motion.div>
        </div>
        <div className="space-y-3">
          {riskFactors.map((factor, i) => (
            <motion.div
              key={factor.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs text-slate-500 w-28">{factor.label}</span>
              <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${(factor.score / factor.max) * 100}%` } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className={`h-full rounded-full ${factor.color}`}
                />
              </div>
              <span className="text-xs text-slate-600 w-8 text-right">{factor.score}/{factor.max}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create BeforeAfter**

```tsx
// src/components/ui/BeforeAfter.tsx
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
```

- [ ] **Step 5: Verify build**

```bash
npm run build
```

Expected: Build passes.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/BriefingDemo.tsx src/components/ui/ChecklistDemo.tsx src/components/ui/RiskGauge.tsx src/components/ui/BeforeAfter.tsx
git commit -m "feat: add code-rendered visual components — BriefingDemo, ChecklistDemo, RiskGauge, BeforeAfter"
```

---

## Task 4: Update Layout Metadata

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update SEO metadata**

Replace the contents of `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Direct Amelia — AI-Powered Flight Department Management | Part 91 & Part 135",
  description: "The AI Director of Aviation that runs your entire flight department. Six specialist agents handle briefings, crew scheduling, fleet management, safety, compliance, and analytics. Built for Part 91 flight departments and Part 135 charter operators.",
  keywords: ["aviation management software", "flight department management", "AI flight operations", "Part 91 software", "Part 135 operations", "crew scheduling aviation", "flight safety management system", "aircraft maintenance tracking", "aviation compliance", "mission briefing AI"],
  openGraph: {
    title: "Direct Amelia — AI-Powered Flight Department Management",
    description: "Six AI specialists run your entire flight department — briefings, crew scheduling, fleet management, safety, compliance, and analytics.",
    url: "https://directamelia.com",
    siteName: "Direct Amelia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Amelia — AI-Powered Flight Department Management",
    description: "Six AI specialists run your entire flight department — briefings, crew scheduling, fleet management, safety, compliance, and analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Build & commit**

```bash
npm run build
git add src/app/layout.tsx
git commit -m "feat: update metadata for SEO — Part 91/135 targeting"
```

---

## Task 5: Update Navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Replace Navbar with updated links and demo CTA**

Replace the entire contents of `src/components/Navbar.tsx`:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Platform', href: '#platform' },
    { label: 'Part 91', href: '#part-91' },
    { label: 'Part 135', href: '#part-135' },
    { label: 'Agents', href: '#agents' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
            <Plane className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-white">Direct Amelia</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.directamelia.com/login"
            className="text-sm text-slate-300 hover:text-white transition-colors"
          >
            Sign In
          </a>
          <a
            href="#pricing"
            className="text-sm px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-lg transition-colors font-medium"
          >
            Book a Demo
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-400 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-slate-400 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/5 flex flex-col gap-3">
                <a href="https://app.directamelia.com/login" className="text-sm text-slate-300">Sign In</a>
                <a href="#pricing" className="text-sm px-4 py-2 bg-brand-600 text-white rounded-lg text-center font-medium">
                  Book a Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
```

- [ ] **Step 2: Build & commit**

```bash
npm run build
git add src/components/Navbar.tsx
git commit -m "feat: update Navbar with platform/Part91/Part135 links and demo CTA"
```

---

## Task 6: Update Hero

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Replace Hero with enhanced version**

Replace the entire contents of `src/components/Hero.tsx`:

```tsx
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
```

- [ ] **Step 2: Build & commit**

```bash
npm run build
git add src/components/Hero.tsx
git commit -m "feat: enhance Hero with platform messaging, dual-tab demo, and demo CTA"
```

---

## Task 7: PainPoints Section

**Files:**
- Create: `src/components/PainPoints.tsx`

- [ ] **Step 1: Create PainPoints component**

```tsx
// src/components/PainPoints.tsx
'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import GlowCard from '@/components/ui/GlowCard';
import { Unplug, CalendarClock, ShieldAlert } from 'lucide-react';

const pains = [
  {
    icon: Unplug,
    title: 'Five tools, none of them talking',
    description: 'Scheduling in one app, weather in another, maintenance in a spreadsheet, safety reports in a filing cabinet. Your operation is scattered across a dozen systems that have no idea the others exist.',
    iconColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: CalendarClock,
    title: 'Crew scheduling that costs you weekends',
    description: 'Building a legal schedule takes hours. Then someone calls in, a duty limit slips, and the whole thing unravels. Your crew deserves predictability. Your dispatchers deserve their sanity.',
    iconColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: ShieldAlert,
    title: 'Compliance held together by memory',
    description: 'Medicals expire. Currency lapses. Duty limits get crossed. Someone catches it — until the day nobody does. And that is always the day it matters most.',
    iconColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
];

export default function PainPoints() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="The Problem"
          title="Running a flight department shouldn't feel like this"
          subtitle="If any of this sounds familiar, you're not alone. Every flight department hits these walls."
          labelColor="text-red-400/80"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <GlowCard key={pain.title} delay={i * 0.1} className="border-red-500/5 hover:border-red-500/10">
              <div className={`w-12 h-12 rounded-xl ${pain.bgColor} flex items-center justify-center mb-4`}>
                <pain.icon className={`w-6 h-6 ${pain.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{pain.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{pain.description}</p>
            </GlowCard>
          ))}
        </div>

        <p className="text-center text-slate-500 text-lg mt-16">There&apos;s a better way to run a flight department.</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build & commit**

```bash
npm run build
git add src/components/PainPoints.tsx
git commit -m "feat: add PainPoints section — problem statement with three pain cards"
```

---

## Task 8: BriefingSystem Section

**Files:**
- Create: `src/components/BriefingSystem.tsx`
- Delete: `src/components/HowItWorks.tsx`

- [ ] **Step 1: Create BriefingSystem (replaces HowItWorks)**

```tsx
// src/components/BriefingSystem.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Describe your mission',
    description: 'Use natural language. "Thursday, KATL to KJFK, G7F, 6 passengers, noon departure." That\'s all Amelia needs.',
    detail: 'Via the web app, WhatsApp, or API',
  },
  {
    number: '02',
    title: 'Six specialists analyze in parallel',
    description: 'Crew legality, weather, routing, aircraft airworthiness, safety risk, and regulatory compliance — evaluated simultaneously. Each agent streams its findings in real time.',
    detail: 'Full transparency into every agent\'s reasoning',
  },
  {
    number: '03',
    title: 'Amelia synthesizes and recommends',
    description: 'Your Director of Aviation weighs every input, flags conflicts, cross-references regulations, and delivers a clear GO, APPROVED WITH CONDITIONS, or NO-GO — with the evidence behind it.',
    detail: 'Every concern surfaced. Every regulation cited. Nothing hidden.',
  },
  {
    number: '04',
    title: 'Fly with confidence',
    description: 'Brief your crew with a complete mission package. Living checklists track every item from 30 days out to pre-departure. After landing, debrief with full mission replay.',
    detail: 'Every flight makes the next one better',
  },
];

export default function BriefingSystem() {
  return (
    <section id="how-it-works" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="The AI Briefing System"
          title="Six agents. Ninety seconds. Every angle covered."
          subtitle="Tell Amelia where you're going. She assembles a team of specialists who analyze your flight in parallel — then delivers a clear recommendation with the evidence to back it up."
        />

        <div className="relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const stepRef = useRef(null);
              const stepInView = useInView(stepRef, { once: true, margin: '-50px' });

              return (
                <motion.div
                  key={step.number}
                  ref={stepRef}
                  initial={{ opacity: 0, x: -30 }}
                  animate={stepInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex gap-8 items-start"
                >
                  <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 items-center justify-center">
                    <span className="text-brand-400 font-bold text-sm">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-2">{step.description}</p>
                    <p className="text-sm text-brand-400/70">{step.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Delete HowItWorks**

```bash
rm src/components/HowItWorks.tsx
```

- [ ] **Step 3: Build & commit**

```bash
npm run build
git add src/components/BriefingSystem.tsx
git add -u src/components/HowItWorks.tsx
git commit -m "feat: replace HowItWorks with BriefingSystem — richer 4-step briefing flow"
```

Note: The build may fail here because `page.tsx` still imports HowItWorks. That's expected — we'll fix it in Task 14 when we wire everything together. If the build fails, skip the build check and commit anyway. The final wiring task (Task 14) will make everything compile.

---

## Task 9: Update Agents Section

**Files:**
- Modify: `src/components/Agents.tsx`

- [ ] **Step 1: Replace Agents with richer cards including output snippets**

Replace the entire contents of `src/components/Agents.tsx`:

```tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

const agents = [
  {
    name: 'Hayes',
    role: 'Crew Scheduling & Compliance',
    focus: 'Qualifications, currency, duty/rest limits, fatigue modeling, type ratings',
    example: '"Capt. Morrison current on G-IV. 8h42m remaining in duty window. Fatigue score: LOW."',
    color: 'border-purple-500/30 bg-purple-500/5',
    textColor: 'text-purple-400',
    dotColor: 'bg-purple-400',
  },
  {
    name: 'Skyler',
    role: 'Weather Intelligence',
    focus: 'METARs, TAFs, PIREPs, SIGMETs, turbulence forecasts, ceiling & visibility analysis',
    example: '"KJFK: BKN025, vis 6SM, winds 210/12G18. Improving trend. VFR approach expected."',
    color: 'border-blue-500/30 bg-blue-500/5',
    textColor: 'text-blue-400',
    dotColor: 'bg-blue-400',
  },
  {
    name: 'Riley',
    role: 'Dispatch & Routing',
    focus: 'Route planning, fuel calculations, weight & balance, NOTAMs, TFRs, alternates',
    example: '"KATL→KJFK via J75. Fuel required: 4,200 lbs. ETE 2h12m. NOTAM: RWY 4R/22L closed."',
    color: 'border-emerald-500/30 bg-emerald-500/5',
    textColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
  },
  {
    name: 'Reeves',
    role: 'Maintenance & Airworthiness',
    focus: 'Aircraft status, MEL items, squawk review, inspection tracking, AD compliance',
    example: '"MEL B-4 active: #2 bleed air. Ops-legal per MEL. Next inspection: 47.2 hrs remaining."',
    color: 'border-amber-500/30 bg-amber-500/5',
    textColor: 'text-amber-400',
    dotColor: 'bg-amber-400',
  },
  {
    name: 'Parker',
    role: 'Safety & Risk Assessment',
    focus: 'Cross-domain threat analysis, FRAT scoring, risk mitigation, trend identification',
    example: '"FRAT score: 9/25 — LOW RISK. One advisory: MEL item plus gusty crosswind at destination."',
    color: 'border-orange-500/30 bg-orange-500/5',
    textColor: 'text-orange-400',
    dotColor: 'bg-orange-400',
  },
  {
    name: 'Avery',
    role: 'Legal & Regulatory',
    focus: 'Part 91/135 compliance, CFR citations, duty limit enforcement, operational authority',
    example: '"Part 91 operations confirmed. All 14 CFR 91.409 inspections current. No regulatory conflicts."',
    color: 'border-rose-500/30 bg-rose-500/5',
    textColor: 'text-rose-400',
    dotColor: 'bg-rose-400',
  },
];

export default function Agents() {
  return (
    <section id="agents" className="relative py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(52,144,252,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Meet the Team"
          title="A specialist for every domain. Zero blind spots."
          subtitle="Each agent is an expert in their field. Together, they form a flight department that never sleeps, never forgets, and never takes shortcuts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

            return (
              <motion.div
                key={agent.name}
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`p-5 rounded-xl border ${agent.color} transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${agent.dotColor}`} />
                  <div>
                    <h3 className="font-semibold text-white">{agent.name}</h3>
                    <p className={`text-sm font-medium ${agent.textColor}`}>{agent.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-3">{agent.focus}</p>
                <div className="mt-auto pt-3 border-t border-white/5">
                  <p className="text-xs text-slate-500 font-mono leading-relaxed">{agent.example}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-brand-500/20 bg-brand-500/5">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <p className="text-sm text-slate-300">
              <span className="text-brand-400 font-semibold">Then Amelia brings it all together</span> — weighing every input, flagging conflicts, and delivering one clear recommendation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build & commit**

```bash
npm run build
git add src/components/Agents.tsx
git commit -m "feat: enhance Agents section with output snippets and synthesis callout"
```

---

## Task 10: Platform Reveal Section

**Files:**
- Create: `src/components/Platform.tsx`

This is the largest new section — six platform feature blocks with alternating layout.

- [ ] **Step 1: Create Platform component**

```tsx
// src/components/Platform.tsx
'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import FeatureBlock from '@/components/ui/FeatureBlock';
import RiskGauge from '@/components/ui/RiskGauge';
import ChecklistDemo from '@/components/ui/ChecklistDemo';
import { Map, Users, Wrench, FileText, BarChart3 } from 'lucide-react';

function OpsVisual() {
  return (
    <div className="rounded-2xl border border-blue-500/20 bg-slate-900/80 p-5 glow-section-ops">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-2"><Map className="w-3.5 h-3.5" /> Operations Center</span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Live</span>
      </div>
      <div className="aspect-[16/9] rounded-xl bg-slate-950/50 border border-white/5 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,144,252,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <div className="absolute top-4 left-6 text-[10px] text-emerald-400/60 ml-4">N701GS — FL380</div>
        <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-12 right-12 text-[10px] text-blue-400/60 mr-4">N502DA — Boarding</div>
        <div className="absolute bottom-8 left-1/3 w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="text-xs text-slate-600 mt-8">Screenshot placeholder: Live operations map</div>
      </div>
    </div>
  );
}

function CrewVisual() {
  const crew = [
    { name: 'Capt. Morrison', status: 'Available', duty: '8h42m remaining', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { name: 'FO Chen', status: 'Available', duty: '10h15m remaining', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { name: 'FO Rodriguez', status: 'On Duty', duty: '3h10m remaining', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'FA Williams', status: 'Rest Required', duty: 'Available 0800Z', color: 'text-amber-400', bg: 'bg-amber-500/10' },
  ];
  return (
    <div className="rounded-2xl border border-purple-500/20 bg-slate-900/80 p-5 glow-section-crew">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-2"><Users className="w-3.5 h-3.5" /> Crew Status</span>
        <span className="text-xs text-purple-400">4 crew members</span>
      </div>
      <div className="space-y-2">
        {crew.map((c) => (
          <div key={c.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
            <div className={`w-8 h-8 rounded-full ${c.bg} flex items-center justify-center`}>
              <Users className={`w-4 h-4 ${c.color}`} />
            </div>
            <div className="flex-1">
              <span className="text-sm text-white font-medium">{c.name}</span>
              <span className={`ml-2 text-xs ${c.color}`}>{c.status}</span>
            </div>
            <span className="text-xs text-slate-600">{c.duty}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FleetVisual() {
  const aircraft = [
    { tail: 'N701GS', type: 'G-IV', status: 'En Route', hours: '247.3h to insp', statusColor: 'text-emerald-400' },
    { tail: 'N502DA', type: 'Citation X', status: 'Available', hours: '89.1h to insp', statusColor: 'text-emerald-400' },
    { tail: 'N388PT', type: 'King Air 350', status: 'MEL Active', hours: '12.4h to insp', statusColor: 'text-amber-400' },
  ];
  return (
    <div className="rounded-2xl border border-amber-500/20 bg-slate-900/80 p-5 glow-section-fleet">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-2"><Wrench className="w-3.5 h-3.5" /> Fleet Health</span>
        <span className="text-xs text-amber-400">3 aircraft</span>
      </div>
      <div className="space-y-2">
        {aircraft.map((a) => (
          <div key={a.tail} className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
            <div>
              <span className="text-sm text-white font-mono font-medium">{a.tail}</span>
              <span className="text-xs text-slate-500 ml-2">{a.type}</span>
            </div>
            <span className={`text-xs ${a.statusColor}`}>{a.status}</span>
            <span className="text-xs text-slate-600">{a.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DocsVisual() {
  const docs = [
    { name: 'Insurance Certificate.pdf', type: 'Insurance', status: 'Extracted', expires: 'Oct 2026' },
    { name: 'N701GS_Registration.pdf', type: 'Registration', status: 'Extracted', expires: 'Dec 2027' },
    { name: 'Flight_Ops_Manual_v3.pdf', type: 'SOP', status: 'Knowledge base updated', expires: '—' },
  ];
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-5 glow-section-docs">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-2"><FileText className="w-3.5 h-3.5" /> Document Intelligence</span>
      </div>
      <div className="space-y-2">
        {docs.map((d) => (
          <div key={d.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
            <FileText className="w-4 h-4 text-cyan-400/60 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">{d.name}</p>
              <p className="text-xs text-slate-500">{d.type} • {d.status}</p>
            </div>
            <span className="text-xs text-slate-600 flex-shrink-0">{d.expires}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="rounded-2xl border border-rose-500/20 bg-slate-900/80 p-5 glow-section-analytics">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-2"><BarChart3 className="w-3.5 h-3.5" /> Owner Portal</span>
        <span className="text-xs text-rose-400">March 2026</span>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
          <p className="text-lg font-bold text-white">47.2</p>
          <p className="text-xs text-slate-500">Flight Hours</p>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
          <p className="text-lg font-bold text-white">23</p>
          <p className="text-xs text-slate-500">Missions</p>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
          <p className="text-lg font-bold text-white">$4,312</p>
          <p className="text-xs text-slate-500">Cost/Hr Avg</p>
        </div>
      </div>
      <div className="aspect-[2/1] rounded-xl bg-slate-950/50 border border-white/5 flex items-center justify-center">
        <span className="text-xs text-slate-600">Screenshot placeholder: Utilization heatmap</span>
      </div>
    </div>
  );
}

export default function Platform() {
  return (
    <section id="platform" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,144,252,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="The Complete Platform"
          title="More than briefings. This is your entire operation."
          subtitle="Amelia doesn't just analyze flights — she runs your flight department. Scheduling, dispatch, fleet management, safety, compliance, documents, and analytics. All connected. All intelligent."
        />

        <div className="space-y-24">
          <FeatureBlock
            title="Operations Center"
            description="See your entire operation at a glance. Real-time aircraft positions, weather overlays, TFR boundaries, and active mission status — all on one screen. Know where every aircraft is, what every crew member is doing, and what's coming next."
            visual={<OpsVisual />}
          />

          <FeatureBlock
            title="Crew Scheduling"
            description="The scheduling system your crew has been asking for. Duty limits, rest requirements, currency, fatigue scores, and availability — all in one view. Build legal, fair schedules in minutes instead of hours. Your pilots plan their lives around schedules they can trust. Your dispatchers stop rebuilding the puzzle every time something changes."
            visual={<CrewVisual />}
            reversed
          />

          <FeatureBlock
            title="Fleet & Maintenance"
            description="Every aircraft, every squawk, every inspection — tracked and visible. Predictive maintenance flags issues before they ground your fleet. MEL items flow directly into briefings so nothing flies under the radar. Your maintenance team sees what's coming instead of reacting to what already broke."
            visual={<FleetVisual />}
          />

          <FeatureBlock
            title="Safety Management"
            description="Your SMS, built in — not bolted on. Every flight is risk-assessed. Every incident is tracked. Every trend is visible. Quantified safety culture with Flight Risk Assessment scores, compliance dashboards, and AI-powered trend analysis. Safety isn't a separate system collecting dust — it's woven into every operation."
            visual={<RiskGauge />}
            reversed
          />

          <FeatureBlock
            title="Document Intelligence"
            description="Drop in a PDF. Amelia reads it, classifies it, extracts the data, and files it where it belongs. Insurance certificates, registration documents, crew certificates, SOPs, and manuals — processed in seconds. Expirations are tracked automatically. Your knowledge base builds itself."
            visual={<DocsVisual />}
          />

          <FeatureBlock
            title="Analytics & Owner Portal"
            description="Real numbers for real decisions. Flight hour utilization, cost-per-mission breakdowns, fleet efficiency metrics, and AI-generated operational reports. Aircraft owners get the transparency they expect — delivered automatically, not assembled manually at month-end."
            visual={<AnalyticsVisual />}
            reversed
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build & commit**

```bash
npm run build
git add src/components/Platform.tsx
git commit -m "feat: add Platform reveal section — 6 feature blocks with code-rendered visuals"
```

---

## Task 11: Part 91 and Part 135 Sections

**Files:**
- Create: `src/components/Part91.tsx`
- Create: `src/components/Part135.tsx`

- [ ] **Step 1: Create Part91 component**

```tsx
// src/components/Part91.tsx
'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import GlowCard from '@/components/ui/GlowCard';
import { Eye, ShieldCheck, Plane, FileText, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: 'Owner Visibility',
    description: 'Aircraft owners invest millions. They deserve real-time insight into how their asset is performing — utilization rates, cost trends, maintenance health, and operational summaries delivered automatically. No more assembling reports by hand.',
  },
  {
    icon: ShieldCheck,
    title: 'Currency & Compliance That Tracks Itself',
    description: 'Medical expirations, flight reviews, type currency, instrument proficiency checks — Amelia monitors every requirement for every crew member and surfaces issues weeks before they become problems. Not after.',
  },
  {
    icon: Plane,
    title: 'Professional Briefings for Every Flight',
    description: 'Six specialists evaluate every mission the way a major flight department would. Weather, routing, crew legality, aircraft status, safety risk, and regulatory compliance — analyzed in parallel, synthesized in seconds. Even a single-aircraft operation flies with the diligence of a Fortune 500 fleet.',
  },
  {
    icon: FileText,
    title: 'Documents That Manage Themselves',
    description: 'Insurance certificates, airworthiness directives, registration renewals — uploaded once, tracked forever. AI monitors expiration dates and alerts you before anything lapses. Your filing cabinet is now intelligent.',
  },
  {
    icon: DollarSign,
    title: 'True Operating Costs',
    description: 'Fuel, maintenance, crew expenses, hangar fees — broken down by aircraft, by route, by time period. Make fleet decisions based on data, not intuition. See exactly what each flight hour costs and where the money goes.',
  },
];

export default function Part91() {
  return (
    <section id="part-91" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(52,144,252,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="For Part 91 Flight Departments"
          title="The discipline of a world-class flight department. Without the overhead."
          subtitle="Whether you operate one aircraft or ten, Amelia brings the operational rigor, safety culture, and professional standards that used to require a team of twenty."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <GlowCard key={benefit.title} delay={i * 0.1} className="border-brand-500/5 hover:border-brand-500/15">
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create Part135 component**

```tsx
// src/components/Part135.tsx
'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import GlowCard from '@/components/ui/GlowCard';
import { Clock, Route, ShieldCheck, Scale, Users } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Crew Scheduling That Respects the Regs — and Your People',
    description: 'Part 135 duty limits are intricate. Flight time limitations, rest requirements, 24-hour and 7-day lookbacks, 34-hour rest periods. Amelia tracks all of it in real time and prevents illegal pairings before they happen. Your crew gets predictable schedules they can build their lives around. Your ops team stops playing Tetris with legality.',
  },
  {
    icon: Route,
    title: 'Trip Request to Wheels-Up',
    description: 'From the initial charter request through crew assignment, aircraft selection, briefing, dispatch, and post-flight debrief — one continuous workflow. No handoff gaps. No information lost between steps. Every trip flows through the same intelligent pipeline.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrated Safety Management',
    description: 'FRAT scores for every flight. Safety reporting that your team will actually use. Trend analysis that spots patterns before they become incidents. Auditable, CFR-compliant, and woven into every operation — not a separate system your team forgets to update.',
  },
  {
    icon: Scale,
    title: 'Regulatory Intelligence',
    description: 'Amelia knows 14 CFR Part 135. Every briefing cites applicable regulations. Every crew assignment is checked against subpart F duty limitations. Every aircraft dispatch confirms airworthiness requirements under subpart J. Your compliance posture is documented automatically with every flight.',
  },
  {
    icon: Users,
    title: 'Multi-Crew, Multi-Aircraft Coordination',
    description: 'Fatigue modeling, availability calendars, type rating verification, and what-if scheduling analysis. See who is legal, rested, qualified, and available — across your entire crew roster — before you commit to a trip. Scale your operation without scaling your headcount.',
  },
];

export default function Part135() {
  return (
    <section id="part-135" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(16,185,129,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="For Part 135 Operators"
          title="Operational rigor that scales with your certificate."
          subtitle="Part 135 operations demand precision. Amelia enforces every duty limit, tracks every requirement, and ensures every flight meets the standard — so your team can focus on flying, not paperwork."
          labelColor="text-emerald-400"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <GlowCard key={benefit.title} delay={i * 0.1} className="border-emerald-500/5 hover:border-emerald-500/15">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Build & commit**

```bash
npm run build
git add src/components/Part91.tsx src/components/Part135.tsx
git commit -m "feat: add dedicated Part 91 and Part 135 sections with tailored benefits"
```

---

## Task 12: Replaces, MissionLifecycle, DemoSection, FinalCTA

**Files:**
- Create: `src/components/Replaces.tsx`
- Create: `src/components/MissionLifecycle.tsx`
- Create: `src/components/DemoSection.tsx`
- Create: `src/components/FinalCTA.tsx`
- Delete: `src/components/Pricing.tsx`
- Delete: `src/components/CTA.tsx`

- [ ] **Step 1: Create Replaces component**

```tsx
// src/components/Replaces.tsx
'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import GlowCard from '@/components/ui/GlowCard';
import BeforeAfter from '@/components/ui/BeforeAfter';
import { Plane, ShieldCheck, Radio } from 'lucide-react';

const replacements = [
  {
    icon: Plane,
    title: 'Replaces your flight management platform',
    description: 'Scheduling, dispatch, fleet tracking, crew management, and mission planning — unified in one system that actually connects the dots between them.',
  },
  {
    icon: ShieldCheck,
    title: 'Replaces your SMS',
    description: 'Risk assessment, incident reporting, compliance tracking, and trend analysis — native to every operation. Not a separate tool your team has to remember to open.',
  },
  {
    icon: Radio,
    title: 'Replaces your communication chaos',
    description: 'Briefings, schedules, status updates, and alerts flow through one intelligent interface. No more critical information buried in a group text or lost in an email thread.',
  },
];

export default function Replaces() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Consolidate"
          title="One platform instead of five."
          subtitle="Flight management software. Safety management systems. Scheduling tools. Document storage. Spreadsheet reports. Amelia brings it all under one roof — connected, intelligent, and always current."
        />

        <div className="mb-16">
          <BeforeAfter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {replacements.map((item, i) => (
            <GlowCard key={item.title} delay={i * 0.1}>
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create MissionLifecycle component**

```tsx
// src/components/MissionLifecycle.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import ChecklistDemo from '@/components/ui/ChecklistDemo';

const phases = [
  { label: 'Planning', color: 'bg-brand-500' },
  { label: 'Briefing', color: 'bg-purple-500' },
  { label: 'Dispatch', color: 'bg-emerald-500' },
  { label: 'In-Flight', color: 'bg-blue-500' },
  { label: 'Landed', color: 'bg-amber-500' },
  { label: 'Debrief', color: 'bg-rose-500' },
];

export default function MissionLifecycle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Mission Lifecycle"
          title="Every flight. Start to finish. Nothing missed."
          subtitle="From initial planning through post-flight debrief, Amelia guides your operation through a structured workflow with intelligent checklists that adapt to your timeline."
        />

        {/* Phase timeline */}
        <div ref={ref} className="flex items-center justify-center gap-1 md:gap-2 mb-16 flex-wrap">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-1 md:gap-2"
            >
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg border border-white/5 bg-white/[0.02]">
                <span className={`w-2 h-2 rounded-full ${phase.color}`} />
                <span className="text-xs md:text-sm text-slate-300 font-medium">{phase.label}</span>
              </div>
              {i < phases.length - 1 && (
                <svg className="w-4 h-4 text-slate-700 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              )}
            </motion.div>
          ))}
        </div>

        {/* Checklist feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Living checklists that count down with your mission</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              30-day planning items. 72-hour confirmations. 24-hour crew notifications. 2-hour final checks. Pre-departure verifications. Each item is verified by the appropriate AI agent — and checks itself as conditions are met.
            </p>
            <p className="text-slate-400 leading-relaxed">
              After landing, the debrief captures everything — what each agent recommended, what changed during the flight, and what the operation can learn for next time. Every flight makes the next one smarter.
            </p>
          </div>
          <ChecklistDemo />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create DemoSection (replaces Pricing)**

```tsx
// src/components/DemoSection.tsx
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.title}
              ref={ref}
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
            Book a Demo
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="mt-4 text-sm text-slate-500">
            Or reach out directly — <a href="mailto:matt@directamelia.com" className="text-brand-400 hover:text-brand-300 transition-colors">matt@directamelia.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create FinalCTA (replaces CTA)**

```tsx
// src/components/FinalCTA.tsx
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
```

- [ ] **Step 5: Delete old Pricing and CTA**

```bash
rm src/components/Pricing.tsx src/components/CTA.tsx
```

- [ ] **Step 6: Build & commit**

```bash
npm run build
git add src/components/Replaces.tsx src/components/MissionLifecycle.tsx src/components/DemoSection.tsx src/components/FinalCTA.tsx
git add -u src/components/Pricing.tsx src/components/CTA.tsx
git commit -m "feat: add Replaces, MissionLifecycle, DemoSection, FinalCTA — remove old Pricing and CTA"
```

Note: Build may fail until page.tsx is updated in Task 14.

---

## Task 13: Update Footer

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Replace Footer with expanded version**

```tsx
// src/components/Footer.tsx
import { Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <Plane className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-white">Direct Amelia</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              The AI Director of Aviation that runs your entire flight department.
            </p>
          </div>

          {/* Platform */}
          <div>
            <p className="text-sm font-medium text-white mb-3">Platform</p>
            <ul className="space-y-2">
              <li><a href="#platform" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Operations Center</a></li>
              <li><a href="#platform" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Crew Scheduling</a></li>
              <li><a href="#platform" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Fleet Management</a></li>
              <li><a href="#platform" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Safety & Compliance</a></li>
              <li><a href="#agents" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">AI Agents</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-sm font-medium text-white mb-3">Solutions</p>
            <ul className="space-y-2">
              <li><a href="#part-91" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Part 91 Flight Departments</a></li>
              <li><a href="#part-135" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Part 135 Charter Operators</a></li>
              <li><a href="#pricing" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Book a Demo</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium text-white mb-3">Contact</p>
            <ul className="space-y-2">
              <li><a href="mailto:matt@directamelia.com" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">matt@directamelia.com</a></li>
              <li><a href="https://app.directamelia.com" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Sign In to App</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Direct Amelia. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Build & commit**

```bash
npm run build
git add src/components/Footer.tsx
git commit -m "feat: expand Footer with platform links, solutions, and contact columns"
```

---

## Task 14: Wire Everything Together in page.tsx

**Files:**
- Modify: `src/app/page.tsx`

This is the final wiring task — all components now exist and need to be composed into the page.

- [ ] **Step 1: Update page.tsx with all 13 sections**

Replace the entire contents of `src/app/page.tsx`:

```tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import BriefingSystem from '@/components/BriefingSystem';
import Agents from '@/components/Agents';
import Platform from '@/components/Platform';
import Part91 from '@/components/Part91';
import Part135 from '@/components/Part135';
import MissionLifecycle from '@/components/MissionLifecycle';
import Replaces from '@/components/Replaces';
import DemoSection from '@/components/DemoSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <BriefingSystem />
      <Agents />
      <Platform />
      <Part91 />
      <Part135 />
      <MissionLifecycle />
      <Replaces />
      <DemoSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Remove old unused imports**

The old `Features.tsx` is no longer imported. It can be kept for reference or deleted. If deleting:

```bash
rm src/components/Features.tsx
```

- [ ] **Step 3: Full build verification**

```bash
npm run build
```

Expected: Build passes with zero errors. All 13 sections render.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git add -u src/components/Features.tsx
git commit -m "feat: wire all 13 sections into page.tsx — complete marketing site v2"
```

---

## Task 15: Visual QA & Polish

**Files:** Various — fixes found during QA

- [ ] **Step 1: Start dev server and review**

```bash
cd /Users/mattserralta/Development/directamelia-marketing
npm run dev
```

Open `http://localhost:3000` in a browser.

- [ ] **Step 2: Check each section visually**

Walk through all 13 sections and verify:
- Animations trigger on scroll
- Colors match the accent scheme (blue ops, purple crew, amber fleet, emerald safety, cyan docs, rose analytics)
- Mobile responsive layout works
- No overlapping text or broken layouts
- All CTAs point to `#pricing` or the mailto link
- Terminal demo tabs switch correctly

- [ ] **Step 3: Fix any issues found**

Apply fixes as needed. Common issues to watch for:
- Framer Motion `useRef`/`useInView` inside `.map()` — these need to be extracted to child components if React strict mode complains
- Tailwind classes that don't exist in v4 — verify all custom colors are in `@theme`

- [ ] **Step 4: Final build**

```bash
npm run build
```

- [ ] **Step 5: Commit fixes**

```bash
git add -A
git commit -m "fix: visual QA polish and responsive fixes"
```
