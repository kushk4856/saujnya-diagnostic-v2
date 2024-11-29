import { progressBarData } from "../consonants";
import { useIntersectionObserver } from "../hooks/InterSecitonObserver";
import Bar from "../components/Bar";
import { Heading } from "../components";

export default function WhyChooseUs() {
  const threshold = 0.1;

  const [ref, isVisible] = useIntersectionObserver({
    root: null,
    threshold,
  });
  return (
    <div ref={ref} className="why_choose  py-9 bg-[#e9eff0]" id="why_choose">
      <div className="inner_choose max-container">
        <div className="heading text-[40px] font-openSans font-bold pb-10">
          <Heading>Why Choose Us</Heading>
        </div>
        <div className="why_main mt-6">
          {isVisible && (
            <ul className="row flex-wrap justify-center gap-8 md:gap-x-48 md:gap-y-9 lg:gap-0 lg:justify-between">
              {progressBarData.map((data) => (
                <Bar
                  key={data.itag}
                  percent={data.percent}
                  circle={data.circle}
                  time={data.time}
                  itag={data.itag}
                  type={data.type}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
