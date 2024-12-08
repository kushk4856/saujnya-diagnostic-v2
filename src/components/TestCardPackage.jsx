/* eslint-disable react/prop-types */
// import { Beaker } from "lucide-react";

// import img from "../assets/images/test-1.jpg";

const TestCardPackage = ({ name }) => {
  return (
    <div className="max-w-lg rounded-lg m-4 shadow-lg bg-white p-6 space-y-6">
      <div className="relative">
        <img
          src="https://saujnyadiagnostic.com/images/Kidney%20Profile.webp"
          alt="Scientist examining blue liquid in flask"
          className="w-full rounded-lg object-cover"
        />
        {/* <div className="absolute right-8 top-[85%] bg-emerald-100 p-6 rounded-xl transform rotate-45">
          <div className="transform -rotate-45">
            
          </div>
        </div> */}
        <div className="card_icon flex justify-center items-center md:p-4 lg:p-8 absolute right-1 md:top-[75%] lg:top-[80%]">
          <div className=" mask_bg  bg-emerald-400   "></div>
          <div className="off_conainer font-bold text-2xl z-40 text-white">
            50% <span className="text-[12px] text-black">OFF</span>
          </div>
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

        <div className="flex items-center justify-between">
          <div className="">
            <span className=" ">
              <span className="text-primary font-bold">20 +</span> Parameters
            </span>
            {/* <span className="font-semibold ml-3">20 tests</span> */}
          </div>
          <button className="px-6 py-2 text-white bg-primary rounded-full">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCardPackage;
