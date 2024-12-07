import FAQAccordion from "../components/Accordion";
import BreadCrumSection from "../components/BreadCrumSection";
import Footer from "../components/Footer";
import { Header } from "../sections";
import AboutPageDetail from "../sections/AboutPageDetail";
import VisionAndMission from "../sections/AboutVissionMission";
import bgImg from "../assets/images/about-breadcrum-bg.png";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <BreadCrumSection bgImg={bgImg} currentPage={"About Us"} />
      <AboutPageDetail />
      <VisionAndMission />
      <FAQAccordion />
      <Footer />
    </div>
  );
}
