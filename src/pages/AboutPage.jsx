import BreadCrumSection from "../components/BreadCrumSection";
import { Header } from "../sections";
import AboutPageDetail from "../sections/AboutPageDetail";
import VisionAndMission from "../sections/AboutVissionMission";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <BreadCrumSection />
      <AboutPageDetail />
      <VisionAndMission />
    </div>
  );
}
