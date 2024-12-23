import BreadCrumSection from "../components/BreadCrumSection";
import BlogImg from "../assets/images/blog-bg.webp";
import ArticleCard from "../components/ArticleCard";

import { blogCard } from "../consonants";

const BlogPage = () => {
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
