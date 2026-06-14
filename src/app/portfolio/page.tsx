import PageHero from "@/components/common/page-hero";
import PortfolioTiles from "@/components/portfolio/portfolio-tiles";
import AnimatedTextHighlight from "@/components/portfolio/animated-text-highlight";
import InteractiveFilterTabs from "@/components/portfolio/interactive-filter-tabs";
import PartnershipTextBlock from "@/components/portfolio/partnership-text-block";
import TechnologiesSection from "@/components/portfolio/technologies-section";
import FinalCTA from "@/components/services/final-cta";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Our Portfolio"
        description="A showcase of ideas we've turned into powerful digital products. Explore how Brentwood Global delivers innovation across industries."
      />
      <PortfolioTiles />
      <AnimatedTextHighlight />
      <InteractiveFilterTabs />
      <PartnershipTextBlock />
      <TechnologiesSection />
      <FinalCTA />
    </div>
  );
}
