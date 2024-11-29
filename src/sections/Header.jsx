import { logo } from "../assets";
import SearchBar from "../components/SearchBar";
import { cta } from "../consonants";
import CtaButton from "../components/CtaButton";
import { Navigation } from "../components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="   ">
      {/*-------------------- top-header  */}
      <div className="top-header bg-primary">
        <div className="flex  flex-wrap justify-center items-center sm:justify-between  text-white font-openSans font-normal text-[12px] sm:text-sm py-2  lg:px-[60px] px-6">
          <p className="lg:text-justify text-center tracking-tighter  leading-relaxed    ">
            NABL | ICMR Accredited Lab | ICMR Reg. No.: CNCPLDD
          </p>
          <p className="text-justify leading-relaxed tracking-tight ">
            powered by cancerncure.in |{" "}
            <span className=" text-[12px] px-1.5 py-1 lg:text-xl lg:px-1.5 lg:py-1 bg-yellow-400 rounded-sm">
              <i className="ri-phone-fill text-primary"></i>
            </span>{" "}
            <span className="lg:text-lg text-base  "> 7519071907</span>
          </p>
        </div>
      </div>

      <div className="navbar  bg-white flex justify-between lg:justify-center items-center px-2  lg:px-5 shadow-xl">
        {/* //////////logo  */}
        <div className="flex lg:flex-2 items-center lg:mr-4 gap-4">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className=" lg:w-[100px] w-[70px] cursor-pointer"
            />
          </Link>
          <p className="  font-bold text-red-600 text-2xl lg:text-3xl ">
            <span className="text-primary">
              Saujnya <br />{" "}
            </span>
            Diagnostic
          </p>
        </div>
        {/* //////////////////menue */}
        <div className="hamburger lg:hidden">
          <i className="ri-menu-line text-[37px] text-primary"></i>
        </div>
        {/* //////////////serchbar  */}
        <div className="hidden lg:flex lg:flex-1 w-full h-full">
          <SearchBar />
        </div>

        {/* ///////////CTA  */}
        <div className=" hidden  lg:flex justify-between items-center md:gap-4">
          {cta.map((el) => (
            <CtaButton key={el.type}>{el.type}</CtaButton>
          ))}
        </div>
      </div>

      {/* -----drop-nav */}
      <div className="lg:hidden mx-4  block ">
        <SearchBar />
      </div>

      {/* ////////// navbar///////// */}
      <Navigation />
    </div>
  );
}
