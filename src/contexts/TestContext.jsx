import { createContext, useContext, useState } from "react";
import { testCard } from "../consonants";

const TestContext = createContext();

function TestProvider({ children }) {
  const [tests, setTest] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const searchTest =
    searchQuery.length > 0
      ? testCard.filter((test) =>
          `${test.testName} `.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : tests;

  return (
    <TestContext.Provider
      value={{
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
        tests: tests,
        setTest: setTest,
        searchTest: searchTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

function useTests() {
  const context = useContext(TestContext);
  if (context === undefined)
    throw new Error("TestContext was used outside of the TestProvider");
  return context;
}

export { useTests, TestProvider };
