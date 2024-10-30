import { progressBarData } from "../consonants";
import { useIntersectionObserver } from "../hooks/InterSecitonObserver";
import Bar from "../components/Bar";

export default function WhyChooseUs() {
  const threshold = 0.1;

  const [ref, isVisible] = useIntersectionObserver({
    root: null,
    threshold,
  });
  return (
    <div
      ref={ref}
      className="why_choose px-24 py-9 bg-[#e9eff0]"
      id="why_choose"
    >
      <div className="inner_choose">
        <div className="heading text-[40px] font-openSans font-bold pb-10">
          <h1 className="text-center leading-loose tracking-wide relative text-primary before:absolute before:content-[''] before:w-1/5 before:h-[5px] before:bottom-0 before:left-1/7 before:bg-primary before:rounded-lg  ">
            Why Choose Saujnya Diagnostic
          </h1>
        </div>
        <div className="why_main mt-6">
          {isVisible && (
            <ul className="row flex-wrap justify-between">
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
