import PageHero from "@/components/common/page-hero";
import AnimatedTextBlock from "@/components/services/animated-text-block";
import PuzzleScrolling from "@/components/services/puzzle-scrolling";
import UtilitiesSection from "@/components/services/utilities-section";
import HoverRevealCards from "@/components/services/hover-reveal-cards";
import AnimatedCharacter from "@/components/services/animated-character";
import FinalCTA from "@/components/services/final-cta";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Our Services"
        description="From AI to engineering and brand — explore the disciplines we deploy to help ambitious teams ship products that hold up."
      />
      <AnimatedTextBlock text="We deliver value through strategy, innovation and execution." />
      <PuzzleScrolling />
      <UtilitiesSection />
      <HoverRevealCards />
      <AnimatedCharacter />
      <FinalCTA />
    </div>
  );
}
