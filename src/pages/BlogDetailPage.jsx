import BreadCrumSection from "../components/BreadCrumSection";
import BlogImg from "../assets/images/blog-bg.webp";
import { useParams } from "react-router-dom";
import { useFetchBlog } from "../hooks/FetchBlogs";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  console.log(blogId);
  const [currentBlog] = useFetchBlog(blogId);
  console.log(currentBlog);

  return (
    <div>
      <BreadCrumSection bgImg={BlogImg} />
      <div className="img">
        <img src={currentBlog.bannerImg} alt="" />
      </div>
    </div>
  );
};

export default BlogDetailPage;
