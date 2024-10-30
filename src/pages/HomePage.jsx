import FAQAccordion from "../components/Accordion";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp";
import {
  Header,
  Hero,
  HealthPackage,
  Disorder,
  CategorySection,
  Feature,
  Location,
} from "../sections";
import AboutSection from "../sections/AboutSection";
import DetailSection from "../sections/DetailSection";
import ReviewSection from "../sections/ReviewSection";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <AboutSection />
      <HealthPackage />
      <Feature />
      <Disorder />
      <CategorySection />
      <DetailSection />
      {/* -------Accordian------------ */}
      <ReviewSection />
      <FAQAccordion />
      <Location />
      <PopUp />
      <Footer />
    </div>
  );
}
