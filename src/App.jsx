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
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";

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
            <Route path="blog" element={<BlogPage />} />
            <Route path="book-test/:id" element={<BookTest />} />
            <Route path="blog-detail/:blogId" element={<BlogDetailPage />} />
          </Routes>
        </BrowserRouter>
      </TestProvider>
    </>
  );
}

export default App;
