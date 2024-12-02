import { CtaButton } from "../components";
import AboutMissionCards from "../components/AboutMissionCards";

const AboutVissionMission = () => {
  return (
    <div className=" relative py-8 ">
      <div className="h-[500px] absolute top-0 left-0 w-full bg-[#28166b] -z-10 "></div>
      <div className="max-container z-10">
        <div className="lg:py-16 text-white">
          <p className="text-primary leading-relaxed mb-4 font-semibold text-sm">
            COMMITTED TO EXCELLENCE
          </p>
          <div className="flex  justify-between">
            <h3 className="lg:text-5xl font-semibold font-montserrat lg:w-3/4">
              Our vision for the future and mission <br /> toserve with
              integrity and compassion
            </h3>
            <div>
              <CtaButton>Contact Now</CtaButton>
            </div>
          </div>
        </div>
        <div className="card_container  flex flex-col lg:flex-row justify-between w-full ">
          <AboutMissionCards />
          <AboutMissionCards />
          <AboutMissionCards />
        </div>
      </div>
    </div>
  );
};

export default AboutVissionMission;
