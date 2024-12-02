import { Header } from "../sections";
import Footer from "../components/Footer";
import BreadCrumSection from "../components/BreadCrumSection";
import ContactDetailCards from "../sections/ContactDetailCards";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <BreadCrumSection currentPage={"Contact Us"} />
      <ContactDetailCards />
      <Footer />
    </div>
  );
}
