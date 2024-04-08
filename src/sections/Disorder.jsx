import { DisorderButton } from "../components";
import Heading from "../components/Heading";
import { category } from "../consonants";

export default function Disorder() {
  return (
    <div className="px-4 lg:py-6 lg:px-10">
      <Heading>Lifecycle Disorder</Heading>
      <div className="grid grid-cols-2  sm:grid-cols-3 lg:py-16 gap-2 md:gap-8 px-6 ">
        {category.map((test) => (
          <DisorderButton key={test.name} test={test} />
        ))}
      </div>
    </div>
  );
}
