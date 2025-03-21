import BreadCrumSection from "../components/BreadCrumSection";
import BlogImg from "../assets/images/blog-bg.webp";
import ArticleCard from "../components/ArticleCard";

import { blogCard } from "../consonants";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const BlogPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <BreadCrumSection bgImg={BlogImg} currentPage={"Blog Page"} />
      <div className="flex max-container  flex-wrap py-5 lg:my-24">
        {blogCard.map((blog) => (
          <ArticleCard key={blog.bannerImg} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
