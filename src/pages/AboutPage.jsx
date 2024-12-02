import FAQAccordion from "../components/Accordion";
import BreadCrumSection from "../components/BreadCrumSection";
import Footer from "../components/Footer";
import { Header } from "../sections";
import AboutPageDetail from "../sections/AboutPageDetail";
import VisionAndMission from "../sections/AboutVissionMission";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <BreadCrumSection currentPage={"About Us"} />
      <AboutPageDetail />
      <VisionAndMission />
      <FAQAccordion />
      <Footer />
    </div>
  );
}
