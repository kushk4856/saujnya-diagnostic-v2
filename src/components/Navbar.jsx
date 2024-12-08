/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo_new.webp";
import { nav } from "../consonants";
import SearchBar from "./SearchBar";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled more than 200 pixels
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50  bg-white animate-slide-down"
            : "relative shadow-lg"
        }
         px-6 py-4 transition-all duration-300 ease-in-out
      `}
    >
      <div className="skew-bg_nav relative"></div>
      <div className="flex-between z-20">
        <NavLink to={"/home"} className="flex items-center gap-2">
          <div className="logo w-[80px] h-[80px]">
            <img src={logo} alt="" className="h-full w-full object-cover" />
          </div>
          <p className="font-bold text-4xl gap-1 text-red-500 flex justify-center items-center flex-col leading-[.6]">
            SAUJNYA
            <span className="text-blue-900 text-base tracking-[6px]">
              DIAGNOSTIC
            </span>
          </p>
        </NavLink>
        <div className="flex gap-8">
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
          <div className="btns flex-between">
            <div className="">
              <SearchBar />
            </div>
            <div className="book-btn">
              <div
                onClick={() => setIsOpen((s) => !s)}
                className="book cursor-pointer text-white bg-primary rounded-xl px-4 py-3"
              >
                Book Appointment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
