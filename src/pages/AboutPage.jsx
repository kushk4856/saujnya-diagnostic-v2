import FAQAccordion from "../components/Accordion";
import BreadCrumSection from "../components/BreadCrumSection";

import AboutPageDetail from "../sections/AboutPageDetail";
import VisionAndMission from "../sections/AboutVissionMission";
import bgImg from "../assets/images/about-breadcrum-bg.png";

export default function AboutPage() {
  return (
    <div>
      <BreadCrumSection bgImg={bgImg} currentPage={"About Us"} />
      <AboutPageDetail />
      <VisionAndMission />
      <FAQAccordion />
    </div>
  );
}
