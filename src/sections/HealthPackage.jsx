/* eslint-disable react/prop-types */
import { testCard } from "../consonants";
import { PackageSlider, TestCard } from "../components";

export default function HealthPackage({ isOpen, setIsOpen }) {
  return (
    <div className="px-4 max-container  py-4 lg:py-8">
      <PackageSlider heading={"Health Packages"}>
        {testCard.map((test) => (
          <TestCard
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            key={test.testName}
            test={test}
          />
        ))}
      </PackageSlider>
    </div>
  );
}
