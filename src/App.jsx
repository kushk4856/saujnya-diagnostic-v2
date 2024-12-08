import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TestProvider } from "./contexts/TestContext";
import {
  HomePage,
  // TestCategoryPage,
  PackagesPage,
  AboutPage,
  ContactPage,
  BookTest,
} from "./pages";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AppLayout from "./sections/AppLayout";

function App() {
  return (
    <>
      <TestProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="/home" element={<HomePage />} />
              {/* <Route path="test-category" element={<TestCategoryPage />} /> */}
              <Route path="healthpackages" element={<PackagesPage />} />
              <Route path="aboutus" element={<AboutPage />} />
              <Route path="contactus" element={<ContactPage />} />
              <Route path="blogs" element={<BlogPage />} />
              <Route path="book-test/:id" element={<BookTest />} />
              <Route path="blog-detail/:blogId" element={<BlogDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TestProvider>
    </>
  );
}

export default App;
