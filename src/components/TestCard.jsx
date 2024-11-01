/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function TestCard({ test }) {
  return (
    <div className="flex flex-col  justify-center bg-white items-start gap-4 custom-shadow py-4 px-6 rounded-lg">
      <div className="offer bg-blue-900 p-2 text-white font-semibold">
        <p>59% Off</p>
      </div>
      <div>
        <h2 className="font-openSans font-semibold text-2xl">
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
      <div className="price flex justify-between items-center gap-28">
        <Link to={`/book-test/${test.id}?name=${test.testName}`}>
          <button className=" text-green-500 px-1 py-1">know more</button>
        </Link>
        <h2 className="text-lg font-semibold font-openSans">
          Rs {test.price}.00
        </h2>
      </div>
      <div className="book">
        <button className="px-4 py-2 text-white bg-primary rounded-full">
          Book now
        </button>
      </div>
    </div>
  );
}
