/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo_new.webp";
import { nav } from "../consonants";
import SearchBar from "./SearchBar";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        className={`
          ${
            isSticky
              ? "fixed top-0 left-0 right-0 z-[50] bg-white animate-slide-down"
              : "relative shadow-lg"
          }
          px-4 md:px-6 py-4 transition-all duration-300 ease-in-out
        `}
      >
        <div className="skew-bg_nav relative"></div>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <NavLink to={"/home"} className="flex items-center gap-2">
            <div className="logo w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </div>
            <p className="font-bold text-2xl md:text-4xl gap-1 text-red-500 flex justify-center items-center flex-col leading-[.6]">
              SAUJNYA
              <span className="text-blue-900 text-sm md:text-base tracking-[4px] md:tracking-[6px]">
                DIAGNOSTIC
              </span>
            </p>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8">
            <ul className="nav-links flex-between gap-7 font-openSans text-lg">
              {nav.map((navItem) => (
                <NavLink
                  key={navItem}
                  to={`${navItem.toLowerCase().split(" ").join("")}`}
                >
                  <li className="hover-underline cursor-pointer pb-2 hover:text-primary">
                    {navItem}
                  </li>
                </NavLink>
              ))}
            </ul>
            <div className="btns flex-between gap-4">
              <SearchBar />
              <button
                onClick={() => setIsOpen((s) => !s)}
                className="book cursor-pointer text-nowrap text-white bg-primary rounded-xl px-4 py-3"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 bg-green-500 text-white rounded-md"
          >
            <LuMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Container */}
      <div
        className={`
          fixed inset-0 lg:hidden z-50
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className="absolute top-0 right-0 h-full w-80 bg-white overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-green-500 hover:bg-green-50 rounded-full"
          >
            <LiaTimesSolid className="h-6 w-6" />
          </button>

          {/* Logo in Mobile Menu */}
          <div className="flex items-center px-6 py-8">
            <div className="logo w-[40px] h-[40px]">
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="px-4 py-2">
            {nav.map((navItem) => (
              <div key={navItem} className="border-b border-gray-100">
                <NavLink
                  to={`${navItem.toLowerCase().split(" ").join("")}`}
                  className="flex items-center justify-between py-4 px-2 text-gray-800 hover:text-green-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <span className="mr-2">›</span>
                    {navItem}
                  </span>
                  {/* <Plus className="h-4 w-4" /> */}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
