import PageHero from "@/components/common/page-hero";
import AnimatedTextVertical from "@/components/pricing/animated-text-vertical";
import AIProjectsSection from "@/components/pricing/ai-projects-section";
import AnimatedTextBackground from "@/components/pricing/animated-text-background";
import PricingPlans from "@/components/pricing/pricing-plans";
import OrangeCTASection from "@/components/pricing/orange-cta-section";
import BlockchainProjects from "@/components/pricing/blockchain-projects";
import ARVRProjects from "@/components/pricing/ar-vr-projects";
import WebMobileDevelopment from "@/components/pricing/web-mobile-development";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Pricing & Plans"
        description="Our pricing reflects the value we deliver. Choose a plan that fits your vision and scale it with confidence."
      />
      <AnimatedTextVertical />
      <WebMobileDevelopment />
      <AIProjectsSection />
      <AnimatedTextBackground />
      <PricingPlans />
      <OrangeCTASection />
      <BlockchainProjects />
      <ARVRProjects />
    </div>
  );
}
