# Direct Amelia Marketing Website v2 — Design Spec

**Date**: 2026-04-01
**Status**: Pending approval
**Scope**: Complete redesign of directamelia-marketing single-page site

---

## Strategic Positioning

### Primary Narrative
**"AI-First, Platform-Deep"** — Lead with Amelia as an AI Director of Aviation (the hook no competitor can match), then reveal she runs a complete flight department platform underneath. Every section builds toward a single conversion: book a demo.

### Competitive Positioning
Direct Amelia replaces three categories of software:
1. **Flight management platforms** (SDK, CAMP, FlightSchedulePro) — scheduling, dispatch, crew, fleet, documents, all unified under one AI-powered roof
2. **Safety Management Systems** — risk assessment, incident tracking, compliance monitoring, and trend analysis are native to every operation, not bolted on
3. **Fragmented communication tools** — no more texting schedules, emailing briefings, or calling around for aircraft status

### Emotional Core
Every role in the flight department finally gets the support they need. Dispatch stops drowning in logistics. Pilots get schedules they can plan their lives around. Maintenance has full visibility before the aircraft moves. Flight attendants know what's coming. Owners see the truth in the numbers. The whole team operates as one — backed by AI that understands aviation.

### Target Audiences
- **Part 91 Flight Departments**: Owner-operators, corporate flight departments (1–10 aircraft), chief pilots managing small teams
- **Part 135 Charter Operators**: Charter companies, air taxi operators, management companies juggling multi-crew scheduling and regulatory complexity

### Conversion Strategy
Single conversion action: **Book a Demo**. No self-serve pricing. No tiers. The entire page builds value until the visitor feels that 30 minutes on a call could genuinely transform their operation. The CTA tone is invitational, not salesy — "See what changes. No commitment required."

---

## Page Architecture (13 Sections)

### 1. Navbar
**Keep current structure, update links and CTAs.**

- Links: Features | Platform | Part 91 | Part 135 | Agents | Pricing
- Right: Sign In (text link) | Book a Demo (primary button, brand-600)
- Mobile: hamburger menu with same links
- Behavior: Transparent on top, blur backdrop on scroll (existing)

### 2. Hero
**Evolve current — bigger story, same hook.**

- Badge: "Now in Early Access" (keep)
- Headline: **"Your AI Director of Aviation"** (keep — it's strong)
- Subheadline: "One platform. Six AI specialists. Every flight briefed, every crew scheduled, every aircraft tracked, every risk assessed. The flight department that never cuts corners."
- Primary CTA: "Book a Demo" → scrolls to contact/demo section or opens Calendly
- Secondary CTA: "See the Platform" → scrolls to platform reveal section
- Terminal demo: Keep and enhance — show two tabs: "Briefing" (current) and "Ops Center" (new, showing real-time status)
- Social proof bar below demo: "Part 91 Flight Departments | Part 135 Charter Operators | Built for every seat in the operation"

### 3. Pain Point / Problem Statement (NEW)
**Before showing solutions, name the pain.**

Header: "Running a flight department shouldn't feel like this"

Three columns, each describing a real pain:
- **"Five tools, none of them talking"** — Scheduling in one app, weather in another, maintenance in a spreadsheet, safety reports in a filing cabinet. Your operation is scattered across a dozen systems that don't know each other exist.
- **"Crew scheduling that ruins weekends"** — Building a schedule takes hours. Then someone calls in sick, a duty limit gets crossed, and you're back to square one. Your crew deserves better. So do you.
- **"Compliance by memory and hope"** — Medicals expire. Currency lapses. Duty limits get crossed. You catch it — until one day you don't. And that's the day the FAA is watching.

Transition line: "There's a better way to run a flight department."

### 4. The AI Briefing System (evolved "How It Works")
**The signature capability — make it visceral.**

Header: "Six agents. Ninety seconds. Every angle covered."
Sub: "Tell Amelia where you're going. She assembles a team of specialists who analyze your flight in parallel — then delivers a clear GO or NO-GO with the evidence to back it up."

Four-step vertical timeline (evolved):
1. **Describe your mission** — Natural language. "Thursday, KATL to KJFK, G7F, 6 passengers, noon departure." Via the web app, WhatsApp, or API.
2. **Six specialists analyze in parallel** — Crew legality, weather, routing, aircraft airworthiness, safety risk, and regulatory compliance. Each agent streams its findings in real time.
3. **Amelia synthesizes and recommends** — GO, APPROVED WITH CONDITIONS, or NO-GO. Every concern surfaced. Every regulation cited. Nothing hidden.
4. **Fly with confidence** — Brief your crew with a complete mission package. After landing, debrief with full mission replay. Every flight makes the next one better.

Visual: Enhanced code-rendered briefing flow showing agents streaming results with colored status indicators.

### 5. Meet the Agents (evolved)
**Keep the 6-agent showcase, make it richer.**

Header: "A specialist for every domain. Zero blind spots."
Sub: "Each agent is an expert in their field. Together, they form a flight department that never sleeps, never forgets, and never takes shortcuts."

Agent cards (larger, with example output snippets):
- **Hayes** — Crew Scheduling & Compliance. Qualifications, currency, duty/rest limits, fatigue modeling
- **Skyler** — Weather Intelligence. METARs, TAFs, PIREPs, SIGMETs, turbulence forecasts, ceiling/visibility analysis
- **Riley** — Dispatch & Routing. Route planning, fuel calculations, weight & balance, NOTAMs, TFRs
- **Reeves** — Maintenance & Airworthiness. Aircraft status, MEL items, squawk review, inspection tracking
- **Parker** — Safety & Risk Assessment. Cross-domain threat analysis, FRAT scoring, mitigation recommendations
- **Avery** — Legal & Regulatory. Part 91/135 compliance, CFR citations, duty limit enforcement, operational authority

Synthesis callout: "Then Amelia brings it all together — weighing every input, flagging conflicts, and delivering one clear recommendation."

### 6. The Complete Platform — "The Reveal" (NEW)
**The biggest new section. Show the platform depth.**

Header: "More than briefings. This is your entire operation."
Sub: "Amelia doesn't just analyze flights — she runs your flight department. Scheduling, dispatch, fleet management, safety, compliance, documents, and analytics. All connected. All intelligent."

Six platform blocks in alternating two-column layout (text + visual, swapping sides):

**a) Ops Center** (accent: blue)
- "See your entire operation at a glance. Real-time aircraft positions, weather overlays, TFR boundaries, and active mission status — all on one screen."
- Visual: Code-rendered mini operations map with aircraft icons, weather cells, status badges

**b) Crew Scheduling** (accent: purple) — ELEVATED as hero feature
- "The scheduling system your crew has been waiting for. Duty limits, rest requirements, currency, fatigue scores, and availability — all in one view. Build legal, fair schedules in minutes instead of hours. Your pilots plan their lives. Your dispatchers keep their sanity."
- Visual: Stylized calendar view with crew assignments, duty indicators, availability colors

**c) Fleet & Maintenance** (accent: amber)
- "Every aircraft, every squawk, every inspection — tracked and visible. Predictive maintenance flags issues before they ground your fleet. MEL items flow directly into briefings so nothing flies under the radar."
- Visual: Stylized aircraft status panel with health indicators

**d) Safety Management** (accent: emerald)
- "Your SMS, built in — not bolted on. Every flight is risk-assessed. Every incident is tracked. Every trend is visible. Quantified safety culture with Flight Risk Assessment scores, compliance dashboards, and AI-powered trend analysis."
- Visual: Code-rendered risk gauge / safety dashboard with FRAT score

**e) Document Intelligence** (accent: cyan)
- "Drop in a PDF. Amelia reads it, classifies it, extracts the data, and files it where it belongs. Insurance certificates, registration documents, crew certificates, SOPs, and manuals — processed in seconds. Expirations tracked automatically."
- Visual: Upload flow animation — document goes in, structured data comes out

**f) Analytics & Owner Portal** (accent: rose)
- "Real numbers for real decisions. Flight hour utilization, cost-per-mission analysis, fleet efficiency metrics, and AI-generated operational reports. Give aircraft owners the transparency they expect — without the monthly spreadsheet scramble."
- Visual: Stylized dashboard with charts, utilization heatmap, cost breakdown

### 7. For Part 91 Flight Departments (NEW)
**Dedicated segment — blue accent, tailored messaging.**

Header: "The discipline of a world-class flight department. Without the overhead."
Sub: "Whether you operate one aircraft or ten, Amelia brings the operational rigor, safety culture, and professional standards that used to require a staff of twenty."

Five benefit blocks (benefits of the benefits):
1. **Owner Visibility** — "Aircraft owners invest millions. They deserve real-time insight into how their asset is performing — utilization rates, cost trends, maintenance health, and operational summaries delivered automatically."
2. **Currency & Compliance That Tracks Itself** — "Medical expirations, flight reviews, type currency, instrument proficiency — Amelia monitors every requirement and surfaces issues weeks before they become problems."
3. **Professional Briefings for Every Flight** — "Six specialists evaluate every mission the way a major flight department would. Weather, routing, crew legality, aircraft status, safety risk, and regulatory compliance — analyzed in parallel, synthesized in seconds."
4. **Documents That Manage Themselves** — "Insurance certificates, airworthiness directives, registration renewals — uploaded once, tracked forever. AI monitors expiration dates and alerts you before anything lapses."
5. **True Operating Costs** — "Fuel, maintenance, crew expenses, hangar fees — broken down by aircraft, by route, by time period. Make fleet decisions based on data, not intuition."

### 8. For Part 135 Operators (NEW)
**Dedicated segment — emerald accent, regulatory-heavy messaging.**

Header: "Operational rigor that scales with your certificate."
Sub: "Part 135 operations demand precision. Amelia enforces every duty limit, tracks every requirement, and ensures every flight meets the standard — so your team can focus on flying, not paperwork."

Five benefit blocks:
1. **Crew Scheduling That Respects the Regs — and Your People** — "Part 135 duty limits are intricate. Flight time limitations, rest requirements, 24-hour and 7-day lookbacks, 34-hour rest periods. Amelia tracks all of it in real time and prevents illegal pairings before they happen. Your crew gets predictable schedules. Your ops team gets peace of mind."
2. **Trip Request to Wheels-Up** — "From the initial charter request through crew assignment, aircraft selection, briefing, dispatch, and post-flight debrief — one continuous workflow. No handoff gaps. No information lost between steps."
3. **Integrated Safety Management** — "FRAT scores for every flight. Safety reporting that your team will actually use. Trend analysis that spots patterns before they become incidents. Auditable, CFR-compliant, and woven into every operation — not a separate system collecting dust."
4. **Regulatory Intelligence** — "Amelia knows 14 CFR Part 135. Every briefing cites applicable regulations. Every crew assignment is checked against subpart F duty limitations. Every aircraft dispatch confirms airworthiness requirements. Your compliance posture is documented automatically."
5. **Multi-Crew, Multi-Aircraft Coordination** — "Fatigue modeling, availability calendars, type rating verification, and what-if scheduling analysis. See who's legal, rested, qualified, and available — across your entire crew — before you commit to a trip."

### 9. Mission Lifecycle & Living Checklists (NEW)
**Show the complete flight lifecycle.**

Header: "Every flight. Start to finish. Nothing missed."
Sub: "From initial planning through post-flight debrief, Amelia guides your operation through a structured workflow with intelligent checklists that adapt to your timeline."

Visual: Horizontal mission lifecycle diagram:
Planning → Briefing → Dispatch → In-Flight → Landed → Debrief

Checklist feature callout:
"Living checklists that count down with your mission. 30-day planning items, 72-hour confirmations, 24-hour crew notifications, 2-hour final checks, and pre-departure verifications — each item verified by the appropriate AI agent. Items check themselves as conditions are met."

Code-rendered checklist visual with some items auto-checked (green) and one flagged (amber).

### 10. Replaces Your Existing Tools (NEW)
**Competitive displacement section.**

Header: "One platform instead of five."
Sub: "Flight management software. Safety management systems. Scheduling tools. Document storage. Spreadsheet reports. Amelia brings it all under one roof — connected, intelligent, and always current."

Visual: Simple before/after comparison:
- **Before**: Icons for "Scheduling App" + "Weather Service" + "SMS Software" + "Document Storage" + "Spreadsheet Reports" + "Group Text Chain" — scattered, disconnected
- **After**: Single Amelia icon — unified, glowing

Three callout cards:
- "Replaces your flight management platform" — Scheduling, dispatch, fleet tracking, and crew management in one system
- "Replaces your SMS" — Risk assessment, incident reporting, and compliance tracking native to every operation
- "Replaces your communication chaos" — Briefings, schedules, status updates, and alerts through one intelligent interface — not scattered across texts, emails, and phone calls

### 11. Pricing / Demo (replaces current pricing tiers)
**No tiers. No prices. Pure demo conversion.**

Header: "See what changes in 30 minutes."
Sub: "Every flight department is different. Walk us through your operation and we'll show you exactly how Amelia fits — which agents matter most for your fleet, how scheduling would work for your crew size, what your safety posture looks like with AI backing every decision."

Three value propositions in a row:
- "Tailored to your operation" — We configure the demo around your aircraft, your routes, your crew size
- "No commitment required" — Explore the platform, ask hard questions, take your time deciding
- "Immediate clarity" — Within 30 minutes you'll know exactly what Amelia does for your specific operation

Primary CTA (large, centered, glowing): **"Book a Demo"** → Calendly or contact form
Secondary: "Or reach out directly — matt@directamelia.com"

### 12. Final CTA (evolved)
**Emotional close.**

Header: "Your team deserves a flight department that works as hard as they do."
Sub: "Dispatchers who leave on time. Pilots who trust their schedules. Maintenance that sees problems coming. Owners who see the real numbers. One platform that brings your entire operation together."

CTA: "Book a Demo" (same action, repeated for scroll-depth visitors)

### 13. Footer (expanded)
- Logo + tagline
- Quick links: Features, Platform, Part 91, Part 135, Agents, Pricing
- Legal: Privacy Policy, Terms of Service
- Contact: matt@directamelia.com
- Social links (if applicable)
- Copyright

---

## Visual Design System

### Color Palette
- **Base**: #080d19 (slate-950) — dark background throughout
- **Brand**: #3490fc (brand-500) — primary accent, CTAs, hero elements
- **Section accents** (radial gradient overlays, subtle):
  - Ops Center: blue (#3490fc)
  - Crew Scheduling: purple (#8b5cf6)
  - Fleet & Maintenance: amber (#f59e0b)
  - Safety: emerald (#10b981)
  - Documents: cyan (#06b6d4)
  - Analytics: rose (#f43f5e)
  - Part 91: brand blue
  - Part 135: emerald

### Typography
- Font: Inter (existing)
- Hero H1: 5xl–8xl responsive, bold
- Section H2: 4xl–5xl, bold
- Feature H3: xl–2xl, semibold
- Body: base–lg, slate-400
- Accents: sm uppercase tracking-wide for section labels

### Animation
- Framer Motion scroll-triggered reveals (existing)
- Staggered card entrances (existing)
- Subtle radial gradient shifts on section backgrounds (new)
- Agent streaming simulation in briefing demo (new)
- Checklist auto-check animation (new)

### Visual Assets
- **Code-rendered**: Hero terminal demo, briefing flow, agent cards, checklist, risk gauge, aircraft status panel, before/after comparison
- **Screenshot placeholders**: Ops center map, crew calendar, safety dashboard, analytics charts — marked with dashed borders + "Screenshot: [description]" labels for real screenshots to be inserted later
- **No stock photos** — everything is either code-rendered or a real product screenshot

### Responsive Behavior
- Desktop: Two-column alternating layouts for platform features, 3-column for agents and pain points
- Tablet: Stacked two-column where needed
- Mobile: Single column, hamburger nav, touch-friendly CTAs

---

## SEO Considerations

### Metadata
- Title: "Direct Amelia — AI-Powered Flight Department Management | Part 91 & Part 135"
- Description: "The AI Director of Aviation that runs your entire flight department. Six specialist agents handle briefings, crew scheduling, fleet management, safety, compliance, and analytics. Built for Part 91 flight departments and Part 135 charter operators."
- Keywords: aviation management software, flight department management, AI flight operations, Part 91 software, Part 135 operations, crew scheduling aviation, flight safety management system, aircraft maintenance tracking, aviation compliance, mission briefing AI

### Structured Data
- Organization schema for Direct Amelia
- SoftwareApplication schema
- FAQ schema (if FAQ section added later)

### Heading Hierarchy
- Single H1 in hero
- H2 for each major section
- H3 for feature/benefit titles
- Proper semantic HTML throughout

---

## File Structure

```
src/
  app/
    page.tsx              — Section composition (updated)
    layout.tsx            — Metadata, fonts (updated)
    globals.css           — Design tokens, utilities (updated)
  components/
    Navbar.tsx            — Updated nav links + demo CTA
    Hero.tsx              — Enhanced hero with dual-tab demo
    PainPoints.tsx        — NEW: Problem statement section
    BriefingSystem.tsx    — Evolved from HowItWorks
    Agents.tsx            — Enhanced agent cards
    Platform.tsx          — NEW: Complete platform reveal (6 blocks)
    Part91.tsx            — NEW: Part 91 dedicated section
    Part135.tsx           — NEW: Part 135 dedicated section
    MissionLifecycle.tsx  — NEW: Lifecycle + checklists
    Replaces.tsx          — NEW: Competitive displacement
    DemoSection.tsx       — Replaces Pricing.tsx
    FinalCTA.tsx          — Evolved from CTA.tsx
    Footer.tsx            — Expanded footer
    ui/                   — NEW: Shared visual components
      SectionHeader.tsx   — Reusable section header (label + H2 + sub)
      FeatureBlock.tsx    — Reusable two-column feature layout
      GlowCard.tsx        — Reusable card with accent glow
      BriefingDemo.tsx    — Code-rendered terminal demo
      ChecklistDemo.tsx   — Code-rendered checklist visual
      RiskGauge.tsx       — Code-rendered FRAT gauge
      BeforeAfter.tsx     — Tool replacement comparison visual
```

---

## Implementation Notes

- This is a separate Next.js project (`directamelia-marketing`), not part of the Flight-Ops app
- All work on a feature branch — no pushes until user reviews and approves
- Framer Motion is already installed
- No additional dependencies expected beyond what's already in the project
- All CTAs point to a demo booking mechanism (Calendly, contact form, or mailto as fallback)
