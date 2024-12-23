/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useTests } from "../contexts/TestContext";

export default function TestList({ testName, testId }) {
  const { setSearchQuery } = useTests();

  return (
    <Link to={`/book-test/${testId}?name=${testName}`}>
      <li
        onClick={() => setSearchQuery("")}
        className="p-2  cursor-pointer hover:bg-blue-200 text-[16px] font-openSans font-normal relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white "
      >
        {testName}
      </li>
    </Link>
  );
}
