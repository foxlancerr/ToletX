import { HeroSection } from "@/components/common/hero-section";
import { PartnersSection } from "@/components/home/partners-section";
import { ReviewsSection } from "@/components/home/reviews-section";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <ReviewsSection></ReviewsSection>
      <PartnersSection></PartnersSection>
    </div>
  );
}
