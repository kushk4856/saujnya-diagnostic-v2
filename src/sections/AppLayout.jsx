import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import PopUp from "../components/PopUp";

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(() => {
    // Check localStorage on initial load
    const hasShownPopup = localStorage.getItem("hasShownPopup");
    return !hasShownPopup;
  });

  // Close popup and set localStorage flag
  const handleClosePopup = () => {
    localStorage.setItem("hasShownPopup", "true");
    setIsOpen(false);
  };
  return (
    <div>
      <PopUp isOpen={isOpen} onClose={handleClosePopup} />
      <TopHeader />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
