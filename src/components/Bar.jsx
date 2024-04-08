import { useEffect, useState } from "react";

export default function Bar({ itag, percent, time, circle, type }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      count === percent ? clearInterval() : setCount((count) => count + 1);
    }, time);
  }, [count, percent, time]);
  return (
    <li className="col-3">
      <div className="skill">
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
              <stop offset="0%" stopColor="#bc74a5" />
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
        <div className="percentage">{count} %</div>
        <div className="txt">{type}</div>
      </div>
    </li>
  );
}