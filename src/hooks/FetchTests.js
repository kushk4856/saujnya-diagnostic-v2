import { useEffect, useReducer } from "react";

const BASE_URL = "https://kushk4856.github.io/test-packages/tests.json";

const initialState = {
  tests: [],
  isLoading: false,
  currentTest: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "test/loaded":
      return { ...state, isLoading: false, currentTest: action.payload };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("unknown action type");
  }
}

function useTestFetch(id) {
  const [{ tests, isLoading, currentTest, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    async function fetchTests() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();

        console.log(data);

        dispatch({ type: "test/loaded", payload: data.tests[id] });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    }
    fetchTests();
  }, [id]);

  return [currentTest];
}

export { useTestFetch };
