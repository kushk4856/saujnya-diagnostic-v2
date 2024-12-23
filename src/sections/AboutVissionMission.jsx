import { CtaButton } from "../components";
import AboutMissionCards from "../components/AboutMissionCards";

const AboutVissionMission = () => {
  return (
    <div className=" relative py-8 md:px-6 ">
      <div className="h-[500px] absolute top-0 left-0 w-full bg-[#28166b] -z-10 "></div>
      <div className="max-container z-10">
        <div className="md:py-16 py-6 text-white">
          <p className="text-primary md:text-left text-center leading-relaxed mb-4 font-semibold text-sm">
            COMMITTED TO EXCELLENCE
          </p>
          <div className="flex md:flex-row flex-col gap-4 md:gap-0 justify-center text-center md:justify-between">
            <h3 className="lg:text-5xl font-semibold font-montserrat lg:w-3/4">
              Our vision for the future and mission <br /> toserve with
              integrity and compassion
            </h3>
            <div className="flex justify-center">
              <CtaButton>Contact Now</CtaButton>
            </div>
          </div>
        </div>
        <div className="card_container lg:px-0 md:px-24  md:pt-24 lg:py-0  flex  flex-wrap flex-row justify-between w-full ">
          <AboutMissionCards />
          <AboutMissionCards />
          <AboutMissionCards />
        </div>
      </div>
    </div>
  );
};

export default AboutVissionMission;
