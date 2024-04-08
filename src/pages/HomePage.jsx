import Footer from "../components/Footer";
import {
  Header,
  Hero,
  HealthPackage,
  Disorder,
  CategorySection,
  Feature,
  Location,
} from "../sections";
import DetailSection from "../sections/DetailSection";
import ReviewSection from "../sections/ReviewSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <HealthPackage />
      <Feature />
      <Disorder />
      <CategorySection />
      <DetailSection />
      {/* -------Accordian------------ */}
      <ReviewSection />
      <Location />
      <Footer />
    </div>
  );
}
