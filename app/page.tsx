import GaneshOpening from '@/components/invitation/GaneshOpening';
import HeroSection from '@/components/invitation/HeroSection';
import CoupleSection from '@/components/invitation/CoupleSection';
import EventDetails from '@/components/invitation/EventDetails';
import OurStory from '@/components/invitation/OurStory';
import FinalInvitation from '@/components/invitation/FinalInvitation';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-brown overflow-x-hidden">
      <GaneshOpening />
      <HeroSection />
      <CoupleSection />
      <OurStory />
      <EventDetails />
      <FinalInvitation />
    </main>
  );
}
