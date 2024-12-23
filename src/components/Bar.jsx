/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Bar({ itag, percent, time, circle, type }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      count === percent ? clearInterval() : setCount((count) => count + 1);
    }, time);
  }, [count, percent, time]);
  return (
    <li className="col-3 min-w-[227px] md:ml-0 ml-7">
      <div className="skill ml-4">
        <div className="outer">
          <div className="inner">
            <div id="number">
              <i className={itag}></i>
            </div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#288de9" />
              <stop offset="100%" stopColor="#0e54ae" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
            className={circle}
          />
        </svg>
      </div>
      <div className="tag-line" data-aos="zoom-in" data-aos-duration="500">
        <div className="percentage text-primary">{count} %</div>
        <div className="txt">{type}</div>
      </div>
    </li>
  );
}
