import { useEffect, useReducer } from "react";

const BASE_URL = "https://kushk4856.github.io/test-packages/blog.json";

const initialState = {
  blogs: [],
  isLoading: false,
  currentBlog: null,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "blog/loaded":
      return { ...state, isLoading: false, currentBlog: action.payload };

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

function useFetchBlog(id) {
  // eslint-disable-next-line no-unused-vars
  const [{ blogs, isLoading, currentBlog, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    async function fetchBlogs() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();

        if (data.blogs && data.blogs[id]) {
          dispatch({ type: "blog/loaded", payload: data.blogs[id] });
        } else {
          dispatch({ type: "rejected", payload: "Blog not found" });
        }
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading blog...",
        });
      }
    }
    fetchBlogs();
  }, [id]);

  return [currentBlog, isLoading, error];
}

export { useFetchBlog };
