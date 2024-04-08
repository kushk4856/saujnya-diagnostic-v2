import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TestProvider } from "./contexts/TestContext";
import {
  HomePage,
  TestCategoryPage,
  PackagesPage,
  AboutPage,
  ContactPage,
  BookTest,
} from "./pages";

function App() {
  return (
    <>
      <TestProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="test-category" element={<TestCategoryPage />} />
            <Route path="test-package" element={<PackagesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="book-test/:id" element={<BookTest />} />
          </Routes>
        </BrowserRouter>
      </TestProvider>
    </>
  );
}

export default App;
