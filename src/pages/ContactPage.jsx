import { Header } from "../sections";
import Footer from "../components/Footer";
import BreadCrumSection from "../components/BreadCrumSection";
import ContactDetailCards from "../sections/ContactDetailCards";
import ContactUsFormSection from "../sections/ContactUsFormSection";
import ContactImg from "../assets/images/about-breadcrum-bg.png";
import MapSection from "../sections/MapSection";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <BreadCrumSection bgImg={ContactImg} currentPage={"Contact Us"} />
      <ContactDetailCards />
      <ContactUsFormSection />
      <MapSection />
      <Footer />
    </div>
  );
}
