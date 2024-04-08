import { useTests } from "../contexts/TestContext";

import TestList from "./TestList";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useTests();

  return (
    <div className="relative w-full">
      <div className="flex  bg-white px-4 items-center justify-between border-primary  m-3 border-[1px] rounded-3xl overflow-hidden">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className="w-full outline-none border-none  focus:appearance-none"
          placeholder="Search Tests..."
        />
        <div>
          <i className="ri-search-eye-fill text-3xl text-primary "></i>
        </div>
      </div>
      <Result />
    </div>
  );
}

function Result() {
  const { searchTest } = useTests();

  if (searchTest)
    return (
      <div className="absolute bg-orange-300 w-full top-full z-[9999999999] left-0">
        <ul className=" rounded-full">
          {searchTest.map((test) => (
            <TestList
              key={test.testName}
              testId={test.id}
              testName={test.testName}
            />
          ))}
        </ul>
      </div>
    );
}
