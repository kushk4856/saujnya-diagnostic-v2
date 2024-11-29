import bgImg from "../assets/images/about-image.jpg";

const AboutPageDetail = () => {
  return (
    <div className="py-24 max-container">
      <div className="flex gap-4">
        <div className="w-1/2 ">
          <div className="relative inner_bg overflow-hidden rounded-[50px]">
            {" "}
            <img src={bgImg} alt="" className="w-full h-full" />
            <div className="small_div absolute z-20 -bottom-5 -right-3 border-white border-[24px] rounded-3xl w-[200px] h-[200px] bg-red-500"></div>
          </div>
        </div>
        <div className="w-1/2 "></div>
      </div>
    </div>
  );
};

export default AboutPageDetail;
