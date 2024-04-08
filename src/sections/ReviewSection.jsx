import { PackageSlider, ReviewCard } from "../components";
import { reviews } from "../consonants";

export default function ReviewSection() {
  return (
    <div className="px-4 lg:px-8 py-4 lg:py-8">
      <PackageSlider showSlide={2} heading={"What Our Client Say"}>
        {reviews.map((testimonial) => (
          <ReviewCard
            key={testimonial.name}
            name={testimonial.name}
            content={testimonial.content}
            patient={testimonial.patient}
            stars={testimonial.stars}
            img={testimonial.img}
          />
        ))}
      </PackageSlider>
    </div>
  );
}
