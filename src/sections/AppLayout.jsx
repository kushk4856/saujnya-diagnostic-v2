import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import PopUp from "../components/PopUp";

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} />
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
