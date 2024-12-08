import BreadCrumSection from "../components/BreadCrumSection";
import BlogImg from "../assets/images/blog-bg.webp";
import { useParams } from "react-router-dom";
import { useFetchBlog } from "../hooks/FetchBlogs";
import { FaUserEdit } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { BiSolidQuoteLeft } from "react-icons/bi";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  console.log(blogId);
  const [currentBlog] = useFetchBlog(blogId);
  console.log(currentBlog);

  return (
    <div>
      <BreadCrumSection bgImg={BlogImg} />
      <div className="max-container py-8">
        <div className="left_section w-2/3">
          <div className="Blog_banner">
            <div className="blogImg">
              <img src={currentBlog.bannerImg} alt="" />
            </div>

            <div className="blogDetail flex gap-8  items-center py-5 border-b-[1px]">
              <div className="admin flex items-center   text-para gap-3">
                <FaUserEdit className="text-primary" /> Admin
              </div>
              <div className="categories flex items-cente text-para r  gap-3">
                <FaFolderOpen className="text-primary" /> Gemological
              </div>
              <div className="comments flex items-center text-para   gap-3">
                <FaComments className="text-primary" /> Comments
              </div>
            </div>
            {/* text para 1 */}
            <div className="para1 py-5">
              <p className="text-para">{currentBlog.para1}</p>
            </div>

            <div className="quotation_container bg-primary py-16 px-14 my-6">
              <p className="quotes_icon relative text-lg font-palanquin text-white">
                <BiSolidQuoteLeft
                  size={30}
                  className="absolute -top-10 -left-0"
                />
                {currentBlog.qote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
