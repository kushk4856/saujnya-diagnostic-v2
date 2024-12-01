import bgImg from "../assets/images/about-image.jpg";
// import logo from "../assets/images/logo_new.webp";
import founder from "../assets/images/founder.jpg";
// import microscope from "../assets/images/microscope.webp";
import beforeBg from "../assets/images/before-bg.webp";

const AboutPageDetail = () => {
  return (
    <div className="py-24 max-container">
      <div className="flex px-6 lg:px-0 lg:flex-row flex-col-reverse  gap-6 md:gap-8 items-center">
        <div className="lg:w-1/2 md:w-full">
          <div className="left_about relative ">
            {" "}
            <img
              src={bgImg}
              alt=""
              width="601"
              height="668"
              className="w-full mask_img h-full"
            />
            <div
              style={{ backgroundImage: `url(${beforeBg})` }}
              className=" flex flex-col px-2 md:px-8 text-white bg-center bg-no-repeat bg-cover  justify-center items-center content-['] absolute w-[32%] overflow-hidden  h-[32%] lg:w-[32%] lg:h-[32%] rounded-[25px] lg:rounded-[35px]  bottom-0 right-0 z-30"
            >
              <div className="absolute w-full h-full opacity-50 bg-[#0b0b38]"></div>
              <h3 className="md:text-6xl z-10 text-2xl font-bold font-openSans leading-relaxed">
                25+
              </h3>
              <p className="text-center z-10 text-[10px] md:text-base font-openSans">
                Experience in Medical Services
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:px-4 ">
          <div className="right_about flex flex-col gap-8 ">
            <div className="flex items-center gap-4">
              {/* <div className="icon w-[40px] h-[40px]">
                <img src={logo} alt="" className="w-full h-full object-cover" />
              </div> */}
              <h3 className="text-2xl uppercase pb-1 relative font-semibold text-primary before:content-[''] before:w-3/4 before:h-[3px] before:bg-primary before:bottom-0 before:left-0 before:absolute">
                About Us
              </h3>
            </div>
            <h3 className=" text-2xl md:text-[39px] leading-normal font-bold font-montserrat">
              Commitment to your smile &apos; s health and beauty
            </h3>
            <p className="text-para text-base font-sans">
              The goal of our clinic is to provide friendly, caring dentistry
              and the highest level of general, cosmetic, and specialist dental
              treatments. With dental practices throughout the world.
            </p>
            <div className="detail flex md:flex-row flex-col gap-8 py-8 border-t-[1px] border-b-[1px]  justify-between">
              <div className="flex gap-4 items-center">
                <p className="text-4xl text-primary font-semibold">98%</p>
                <h4 className="text-para text-lg font-normal">
                  Invisalign Treatment Complete
                </h4>
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-4xl text-primary font-semibold">100%</p>
                <h4 className="text-para text-lg font-normal">
                  Patient Satisfaction Rate
                </h4>
              </div>
            </div>
            {/* --co founder  */}
            <div className="co_founder">
              <div className="flex gap-3">
                <img src={founder} alt="" className="rounded-full" />
                <div className="founder_detail">
                  <h3 className="font-semibold text-base font-montserrat">
                    Ashish Kumar Patel
                  </h3>
                  <p className="text-para pt-1">Co Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageDetail;
