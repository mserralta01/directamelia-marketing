'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import FeatureBlock from '@/components/ui/FeatureBlock';
import RiskGauge from '@/components/ui/RiskGauge';
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
