import GaneshOpening from '@/components/invitation/GaneshOpening';
import HeroSection from '@/components/invitation/HeroSection';
import CoupleSection from '@/components/invitation/CoupleSection';
import OurStory from '@/components/invitation/OurStory';
import EventDetails from '@/components/invitation/EventDetails';
import FinalInvitation from '@/components/invitation/FinalInvitation';
import FooterCredit from '@/components/ui/FooterCredit';
import BackgroundMusic from '@/components/music/BackgroundMusic';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-brown overflow-x-hidden">
      <BackgroundMusic />
      <GaneshOpening />
      <HeroSection />
      <CoupleSection />
      <OurStory />
      <EventDetails />
      <FinalInvitation />
      <FooterCredit />
    </main>
  );
}


