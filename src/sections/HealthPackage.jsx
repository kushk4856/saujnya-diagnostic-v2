import { testCard } from "../consonants";
import { PackageSlider, TestCard } from "../components";

export default function HealthPackage() {
  return (
    <div className="px-4 lg:px-8 py-4 lg:py-8">
      <PackageSlider heading={"Health Packages"}>
        {testCard.map((test) => (
          <TestCard key={test.testName} test={test} />
        ))}
      </PackageSlider>
    </div>
  );
}
