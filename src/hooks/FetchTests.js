import { useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:9000";

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
        const res = await fetch(`${BASE_URL}/tests/${id}`);
        const data = await res.json();
        dispatch({ type: "test/loaded", payload: data });
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
