import { Header } from "../sections";
import Footer from "../components/Footer";
import BreadCrumSection from "../components/BreadCrumSection";
import BlogImg from "../assets/images/blog-bg.webp";
import ArticleCard from "../components/ArticleCard";

import { blogCard } from "../consonants";

const BlogPage = () => {
  return (
    <div>
      <Header />
      <BreadCrumSection bgImg={BlogImg} currentPage={"Blog Page"} />
      <div className="flex max-container  flex-wrap  my-24">
        {blogCard.map((blog) => (
          <ArticleCard key={blog.bannerImg} blog={blog} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
