import { createContext, useContext, useEffect, useReducer } from "react";

const AllTestsContext = createContext();

const initialState = {
  produts: [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "produts/loaded":
      return { ...state, isLoading: false, produts: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
  }
}

function ProductsProvider({ children }) {
  const [{ isLoading, produts, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchProducts() {
      dispatch({ type: "loading" });
      try {
        // const res = await fetch("http://localhost:8000/AllProducts");
        const res = await fetch(
          "https://kushk4856.github.io/E-commerce-shoes-data/shoes_products.json"
        );
        const data = await res.json();
        // console.log(data.AllProducts);

        dispatch({ type: "produts/loaded", payload: data.AllProducts });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error on lading prducts...",
        });
      }
    }
    fetchProducts();
  }, []);

  return (
    <AllTestsContext.Provider value={{ produts, error, isLoading }}>
      {children}
    </AllTestsContext.Provider>
  );
}

function useProduts() {
  const context = useContext(AllTestsContext);
  if (context === undefined)
    throw new Error("AllProductContext was used outside the ProdutsProvider");
  return context;
}

export { ProductsProvider, useProduts };
