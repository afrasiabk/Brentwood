import PageHero from "@/components/common/page-hero";
import { ImpactStats } from "@/components/about-us/impact-stats";
import { MissionVision } from "@/components/about-us/mission-vision";
import BoardOfExpertise from "@/components/common/board-of-expertise";
import { GrowthStats } from "@/components/about-us/growth-stats";
import { TeamCTA } from "@/components/about-us/team-cta";
import { ImageGallery } from "@/components/about-us/image-gallery";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="About Brentwood Global"
        description="Driven by innovation, committed to delivering value — get to know the people and purpose behind Brentwood."
      />
      <ImpactStats />
      <MissionVision />
      <BoardOfExpertise />
      <GrowthStats />
      <ImageGallery />
      <TeamCTA />
    </div>
  );
}
