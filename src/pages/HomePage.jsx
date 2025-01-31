import { useState } from "react";
import FAQAccordion from "../components/Accordion";
import PopUp from "../components/PopUp";

import {
  Hero,
  HealthPackage,
  CategorySection,
  Feature,
  Location,
} from "../sections";
import AboutSection from "../sections/AboutSection";
import DetailSection from "../sections/DetailSection";
import ReviewSection from "../sections/ReviewSection";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(() => {
    // Check localStorage on initial load
    const hasShownPopup = localStorage.getItem("hasShownPopup");
    return !hasShownPopup;
  });

  // Close popup and set localStorage flag
  const handleClosePopup = () => {
    localStorage.setItem("hasShownPopup", "true");
    setIsOpen(false);
  };

  return (
    <div className="overflow-hidden">
      <PopUp isOpen={isOpen} onClose={handleClosePopup} />
      <Hero />
      <AboutSection />
      <HealthPackage isOpen={isOpen} setIsOpen={setIsOpen} />
      <Feature />
      {/* <Disorder /> */}
      <CategorySection />
      <DetailSection />
      {/* -------Accordian------------ */}
      <ReviewSection />
      <FAQAccordion />
      <Location />
    </div>
  );
}
