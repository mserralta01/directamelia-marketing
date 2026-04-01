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
