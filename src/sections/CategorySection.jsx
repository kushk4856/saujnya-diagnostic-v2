import HealthPackages from "../components/PackageSlider";
import { category } from "../consonants";
import CategoryCard from "../components/CategoryCard";
import PackageSlider from "../components/PackageSlider";

export default function CategorySection() {
  return (
    <div className="px-4 lg:px-8 py-4 lg:py-8">
      <PackageSlider heading={"Tests by Category"}>
        {category.map((test) => (
          <CategoryCard key={test.name} test={test} />
        ))}
      </PackageSlider>
    </div>
  );
}
