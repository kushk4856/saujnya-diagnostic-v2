/* eslint-disable react/prop-types */
import bgImg from "../assets/images/about-breadcrum-bg.png";

const BreadCrumSection = ({ currentPage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-center bg-no-repeat bg-cover"
    >
      <div className="max-container flex justify-center space-y-6 items-center flex-col h-[340px]">
        <h2 className="text-white font-bold text-6xl">{currentPage}</h2>
        <p className="text-white font-medium text-lg">Home / {currentPage}</p>
      </div>
    </div>
  );
};

export default BreadCrumSection;
