import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="hidden lg:flex justify-center py-2 text-lg  text-white gap-6 bg-primary w-full">
      <div className=" hover:text-purple-400 cursor-pointer">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className=" hover:text-purple-400 cursor-pointer">
        <NavLink to="/test-package">Health Package</NavLink>
      </div>
      <div className=" hover:text-purple-400 cursor-pointer">Test/Packages</div>
      <div className=" hover:text-purple-400 cursor-pointer">Book Test</div>
      <div className=" hover:text-purple-400 cursor-pointer">
        <NavLink to="/about">About Us</NavLink>
      </div>
      <div className=" hover:text-purple-400 cursor-pointer">
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <div className=" hover:text-purple-400 cursor-pointer">Health Info</div>
    </div>
  );
}
