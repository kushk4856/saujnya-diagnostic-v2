/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function TestCard({ test, isOpen, setIsOpen }) {
  return (
    <div className="flex w-full flex-col md:min-w-[290px]  justify-center bg-white items-start gap-2 md:gap-4 custom-shadow md:py-4 md:px-6 px-4 py-4 rounded-lg">
      <div className="offer bg-blue-900 p-2 text-white font-semibold">
        <p>59% Off</p>
      </div>
      <div>
        <h2 className="font-openSans font-semibold text-lg md:text-2xl">
          {test.testName}
        </h2>
      </div>
      <div className="detail">
        <h3>
          {" "}
          Includes: <span>{test.parameters} Paramenters</span>
        </h3>
        <ul>
          {test.tests.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="price flex justify-between items-center gap-4 md:gap-16">
        <Link to={`/book-test/${test.id}?name=${test.testName}`}>
          <button className=" text-green-500 px-1 py-1">know more</button>
        </Link>
        <h2 className="md:text-lg text-base font-semibold font-openSans">
          Rs {test.price}.00
        </h2>
      </div>
      <div className="book">
        <button
          onClick={() => {
            setIsOpen((s) => !s);
          }}
          className="px-4 py-2 text-white bg-primary rounded-full"
        >
          Book now
        </button>
      </div>
    </div>
  );
}
