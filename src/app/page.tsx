import { Hero } from "@/components/sections/Hero";
import FeaturesSection from "@/components/sections/Features";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { NewsletterSection } from "@/components/sections/Newsletter";
import { SocialSection } from "@/components/sections/SocialLinks";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <SocialSection />
      <CTASection />
    </>
  );
}