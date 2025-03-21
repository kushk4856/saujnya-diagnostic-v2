import BreadCrumSection from "../components/BreadCrumSection";
import ContactDetailCards from "../sections/ContactDetailCards";
import ContactUsFormSection from "../sections/ContactUsFormSection";
import ContactImg from "../assets/images/about-breadcrum-bg.png";
import MapSection from "../sections/MapSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ContactPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <BreadCrumSection bgImg={ContactImg} currentPage={"Contact Us"} />
      <ContactDetailCards />
      <ContactUsFormSection />
      <MapSection />
    </div>
  );
}
