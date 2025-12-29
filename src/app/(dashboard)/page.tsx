import { HeroSection } from "@/components/common/hero-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <ReviewsSection></ReviewsSection>
    </div>
  );
}
