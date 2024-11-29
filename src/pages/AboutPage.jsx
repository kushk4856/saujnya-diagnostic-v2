import BreadCrumSection from "../components/BreadCrumSection";
import { Header } from "../sections";
import AboutPageDetail from "../sections/AboutPageDetail";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <BreadCrumSection />
      <AboutPageDetail />
    </div>
  );
}
