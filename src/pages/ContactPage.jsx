import { Header } from "../sections";
import Footer from "../components/Footer";
import BreadCrumSection from "../components/BreadCrumSection";
import ContactDetailCards from "../sections/ContactDetailCards";
import ContactUsFormSection from "../sections/ContactUsFormSection";
import MapSection from "../sections/MapSection";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <BreadCrumSection currentPage={"Contact Us"} />
      <ContactDetailCards />
      <ContactUsFormSection />
      <MapSection />
      <Footer />
    </div>
  );
}
