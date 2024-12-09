import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTestFetch } from "../hooks/FetchTests";
import PopUp from "../components/PopUp";

export default function BookTest() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [currentTest] = useTestFetch(id);
  const [isOpen, setIsOpen] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="main flex items-start p-10 gap-4">
        <div className="test-detail w-full pl-10 h-[100vh] ">
          <div className="test-img ">
            <img src={currentTest.details?.img} alt="" />
          </div>

          <div className="test-detail flex flex-col gap-6 py-6">
            <div className="heading flex">
              <h1 className=" text-3xl font-montserrat font-semibold">
                {currentTest.testName}
              </h1>
            </div>
            <p>{currentTest?.details?.para1}</p>
            <p>{currentTest?.details?.para2}</p>
          </div>
        </div>

        {/* --------------------book now ------------- */}
        <div className="book-now flex flex-col gap-6 justify-center items-center  w-1/2 sticky top-[50px]  ">
          <div className="form flex w-[90%]  flex-col rounded-xl p-6 border-2 border-[#CED4DA] ">
            <h3 className="font-semibold text-primary py-4 font-montserrat text-2xl custom-underline before:h-[1px]">
              ₹{currentTest.price}.00
            </h3>

            <p className="custom-underline before:h-[1px] py-4">
              Home Collection
            </p>
            <p className="flex justify-between custom-underline before:h-[1px] py-4">
              <span>Offer Price</span>
              <span className="font-semibold text-lg">
                ₹ {currentTest.price}.00
              </span>
            </p>
            <p className="flex justify-between py-4 font-semibold text-lg">
              <span>Total Amount</span>
              <span>₹ {currentTest.price}.00</span>
            </p>
            <p className="text-sm py-2">
              *inclusive of all the taxes, fees and subject to availability
            </p>
          </div>
          <div className="book-btn form flex w-[90%]  flex-col rounded-xl p-4 border-2 border-[#CED4DA]">
            <button
              onClick={() => {
                setIsOpen((s) => !s);
              }}
              className="bg-primary p-2 text-white text-2xl font-semibold rounded-md"
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
