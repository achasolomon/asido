import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SecondaryNav from "@/components/SecondaryNav";
import IntroSection from "@/components/IntroSection";
import { Timeline } from "@/components/Timeline/Index";
import Footer from "@/components/Footer";
import StayInformed from "@/components/StayInformed";
import { milestones } from "@/data/Milestones";

export default function MilestonesPage() {
  return (
    <main>
      <Header />
      <Hero />
      <SecondaryNav />
      <IntroSection />
      <Timeline milestones={milestones} />
      <StayInformed />
      <Footer />
    </main>
  );
}