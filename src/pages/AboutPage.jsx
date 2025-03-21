import FAQAccordion from "../components/Accordion";
import BreadCrumSection from "../components/BreadCrumSection";

import AboutPageDetail from "../sections/AboutPageDetail";
import VisionAndMission from "../sections/AboutVissionMission";
import bgImg from "../assets/images/about-breadcrum-bg.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AboutPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <BreadCrumSection bgImg={bgImg} currentPage={"About Us"} />
      <AboutPageDetail />
      <VisionAndMission />
      <FAQAccordion />
    </div>
  );
}
