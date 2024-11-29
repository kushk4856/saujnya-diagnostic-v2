/* eslint-disable react/prop-types */
// import { Beaker } from "lucide-react";
import { HiMiniBeaker } from "react-icons/hi2";
import img from "../assets/images/test-1.jpg";

const TestCardPackage = ({ name }) => {
  return (
    <div className="max-w-lg rounded-lg m-4 shadow-lg bg-white p-6 space-y-6">
      <div className="relative">
        <img
          src={img}
          alt="Scientist examining blue liquid in flask"
          className="w-full rounded-lg object-cover"
        />
        {/* <div className="absolute right-8 top-[85%] bg-emerald-100 p-6 rounded-xl transform rotate-45">
          <div className="transform -rotate-45">
            
          </div>
        </div> */}
        <div className="card_icon flex justify-center items-center md:p-4 lg:p-8 absolute right-3 md:top-[75%] lg:top-[80%]">
          <div className=" mask_bg  bg-primary  "></div>
          <HiMiniBeaker className="text-white z-20" size={44} />
        </div>
      </div>

      <div className="space-y-3 px-4 py-10">
        <h2 className="text-xl font-semibold font-montserrat text-gray-900">
          {name}
        </h2>

        <p className="text-base leading-[30px] text-gray-600">
          Allergy testing can be useful at different stages of life, like
          discovering that a family member has a condition.
        </p>

        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-medium">Includes</span>
          <span className="font-semibold">20 tests</span>
        </div>
      </div>
    </div>
  );
};

export default TestCardPackage;
