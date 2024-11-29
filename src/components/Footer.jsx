/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { logo } from "../assets";

export default function Footer() {
  return (
    <div className="w-full  bg-blue-500 px-6 py-6 ">
      <div className="flex flex-wrap justify-between gap-10 text-white">
        <div className="flex-[2] flex flex-col gap-1">
          <div className="flex items-center gap-3  text-black">
            {" "}
            <Link to="/" className="hidden">
              <img
                src={logo}
                alt=""
                className=" size-28   cursor-pointer bg-white"
              />
            </Link>
            <p className="text-3xl font-montserrat text-white font-bold mb-8 ">
              <span className="">Saujnya</span> Diagnostics <br />
              <span className="text-base font-normal leading-none bg-white px-4 text-red-600">
                Your Health, Our Commitment"
              </span>
            </p>
          </div>
          <p className="pr-28">
            Our Clinic has grown to provide a world class facility for the
            clinic advanced restorative.
          </p>
          <p className="pr-28 mb-8">
            We are among the most qualified implant providers in the AUS with
            over 30 years of quality training and experience.
          </p>
          <p className="flex gap-4 lg:gap-8 text-white">
            <span className="w-[50px] h-[50px] rounded-full border-2 cursor-pointer group hover:bg-white border-white flex justify-center items-center">
              <i className="ri-facebook-box-fill text-2xl text-white group-hover:text-black"></i>
            </span>
            <span className="w-[50px] h-[50px] rounded-full border-2 cursor-pointer group hover:bg-white border-white flex justify-center items-center">
              <i className="ri-linkedin-box-fill text-2xl text-white group-hover:text-black"></i>
            </span>
            <span className="w-[50px] h-[50px] rounded-full border-2 cursor-pointer group hover:bg-white border-white flex justify-center items-center">
              <i className="ri-twitter-x-fill text-2xl text-white group-hover:text-black"></i>
            </span>
            <span className="w-[50px] h-[50px] rounded-full border-2 cursor-pointer group hover:bg-white border-white flex justify-center items-center">
              <i className="ri-instagram-fill text-2xl text-white group-hover:text-black"></i>
            </span>
          </p>
        </div>
        <div className="flex-1">
          <span className="before:absolute relative before:content-[''] before:w-[70%] before:h-[2px] before:bg-white before:top-full before:left-0 text-2xl font-semibold text-white leading-loose pb-3">
            Departments
          </span>
          <ul className="flex flex-col gap-3 mt-10">
            <li className="flex items-center group cursor-pointer ">
              <span className="text-2xl mr-4 ">+</span>
              <p className="group-hover:underline">Book a Test</p>
            </li>
            <li className="flex items-center group cursor-pointer ">
              <span className="text-2xl mr-4 ">+</span>
              <p className="group-hover:underline">Blood Test</p>
            </li>
            <li className="flex items-center group cursor-pointer ">
              <span className="text-2xl mr-4 ">+</span>
              <p className="group-hover:underline">Covid Test</p>
            </li>
            <li className="flex items-center group cursor-pointer ">
              <span className="text-2xl mr-4 ">+</span>
              <p className="group-hover:underline">Health Packages</p>
            </li>
            <li className="flex items-center group cursor-pointer ">
              <span className="text-2xl mr-4 ">+</span>
              <p className="group-hover:underline">Full Body Packages</p>
            </li>
            <li className="flex items-center group cursor-pointer ">
              <span className="text-2xl mr-4 ">+</span>
              <p className="group-hover:underline">Special Offers</p>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <span className="before:absolute relative before:content-[''] before:w-[70%] before:h-[2px] before:bg-white before:top-full before:left-0 text-2xl font-semibold text-white leading-loose pb-3">
            Contact Us
          </span>
          <ul className="flex flex-col gap-6 mt-10 ">
            <li className="flex items-center group cursor-pointer ">
              <span className="text-2xl mr-4 ">
                <i className="ri-map-pin-line text-3xl"></i>
              </span>
              <p>
                2130 Fulton Street San Diego <br /> CA 94117-108 IND
              </p>
            </li>
            <li className="flex items-center group cursor-pointer ">
              <span className="text-2xl mr-4 ">
                <i className="ri-phone-line text-3xl"></i>
              </span>
              <p>
                Mon to Fri : 08:30 - 18:00 <br /> +999 99999 575
              </p>
            </li>
            <li className="flex items-center group cursor-pointer ">
              <span className="text-2xl mr-4 ">
                <i className="ri-mail-line text-3xl"></i>
              </span>
              <p>
                Do you have a Question? <br />
                info@gmail.com
              </p>
            </li>
            <li className="flex items-center group cursor-pointer ">
              <span className="text-2xl mr-4 ">
                <i className="ri-timer-line text-3xl"></i>
              </span>
              <p>
                Mon - Sat 8.00 - 18.00 <br />
                Sunday CLOSED
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
