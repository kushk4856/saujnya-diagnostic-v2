/* eslint-disable react/prop-types */

const BreadCrumSection = ({ currentPage, bgImg }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-center bg-no-repeat bg-cover"
    >
      <div className="max-container flex justify-center space-y-6 items-center flex-col h-[220px] md:h-[340px]">
        <h2
          className={`${
            currentPage === "Blog Page" ? "text-black" : "text-white"
          }  font-bold text-6xl`}
        >
          {currentPage}
        </h2>
        <p
          className={`${
            currentPage === "Blog Page" ? "text-black" : "text-white"
          }  font-medium text-lg`}
        >
          Home / {currentPage}
        </p>
      </div>
    </div>
  );
};

export default BreadCrumSection;
