import { CtaButton } from "../components";
import AboutMissionCards from "../components/AboutMissionCards";

const AboutVissionMission = () => {
  return (
    <div className="h-[300px] bg-[#28166b]">
      <div className="max-container">
        <div className="lg:px-48 lg:py-16 text-white">
          <p className="text-primary leading-relaxed mb-4 font-semibold text-sm">
            COMMITTED TO EXCELLENCE
          </p>
          <div className="flex  justify-between">
            <h3 className="lg:text-4xl font-semibold lg:w-3/4">
              Our vision for the future and mission toserve with integrity and
              compassion
            </h3>
            <div>
              <CtaButton>Contact Now</CtaButton>
            </div>
          </div>
        </div>
        <div className="card_container lg:px-48 flex justify-between w-full ">
          <AboutMissionCards />
          <AboutMissionCards />
          <AboutMissionCards />
        </div>
      </div>
    </div>
  );
};

export default AboutVissionMission;
