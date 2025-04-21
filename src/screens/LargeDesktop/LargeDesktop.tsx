import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { JoinSection } from "./sections/JoinSection";
import { SecuritySection } from "./sections/SecuritySection/SecuritySection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const LargeDesktop = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-white">
      <div className="flex flex-col items-start gap-16 px-[100px] py-[100px] relative self-stretch w-full">
        <AboutUsSection />
        <TestimonialsSection />
        <IntroductionSection />
        <FAQSection />
        <HeroSection />
        <JoinSection />
        <FeaturesSection />
        <SecuritySection />
      </div>
      <CallToActionSection />
    </div>
  );
};
