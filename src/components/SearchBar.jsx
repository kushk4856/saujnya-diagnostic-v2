/* eslint-disable react/prop-types */
import { useTests } from "../contexts/TestContext";
import { useEffect, useRef, useState } from "react";
import TestList from "./TestList";

// Add CSS styles at the top level
const scrollbarStyles = `
  .test_result_container::-webkit-scrollbar {
    width: 8px;
  }

  .test_result_container::-webkit-scrollbar-track {
    background: #e5e7eb;
    border-radius: 4px;
  }

  .test_result_container::-webkit-scrollbar-thumb {
    background: #93c5fd;
    border-radius: 4px;
    border: 2px solid #e5e7eb;
  }

  .test_result_container::-webkit-scrollbar-thumb:hover {
    background: #60a5fa;
  }
`;

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useTests();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <style>{scrollbarStyles}</style>
      <div className="flex bg-white px-4 items-center justify-between border-primary m-3 border-[1px] rounded-3xl overflow-hidden">
        <input
          type="text"
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          value={searchQuery}
          className="w-[116px] outline-none border-none focus:appearance-none"
          placeholder="Search Tests..."
        />
        <div>
          <i className="ri-search-eye-fill text-3xl text-primary"></i>
        </div>
      </div>
      <Result isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

function Result({ isOpen, setIsOpen }) {
  const { searchTest, setSearchTest } = useTests();
  const resultRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Click detected");
      if (resultRef.current && !resultRef.current.contains(event.target)) {
        console.log("Click was outside");
        setIsOpen(false);
        if (setSearchTest) {
          setSearchTest(null);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen, setSearchTest, setIsOpen]);

  if (!isOpen || !searchTest) return null;

  return (
    <div
      ref={resultRef}
      className="absolute test_result_container max-h-[200px] bg-blue-50 rounded-xl  overflow-y-auto shadow-lg  w-full top-full z-[9999999999] left-0"
    >
      <ul className="rounded-full space-y-1">
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
