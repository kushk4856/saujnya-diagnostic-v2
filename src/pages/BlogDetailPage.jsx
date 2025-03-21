/* eslint-disable no-unused-vars */
import BreadCrumSection from "../components/BreadCrumSection";
import BlogImg from "../assets/images/blog-bg.webp";
import { useLocation, useParams } from "react-router-dom";
import { useFetchBlog } from "../hooks/FetchBlogs";
import { FaUserEdit } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { useEffect } from "react";

import RecentPosts from "../components/RecentPosts";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const [currentBlog, isLoading, error] = useFetchBlog(blogId);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!blogId) {
      console.error("Invalid blogId provided");
      return;
    }
    // Proceed with data fetching
  }, [blogId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Safeguard against undefined properties
  const {
    bannerImg,
    para1,
    qote,
    methods = {}, // Default to an empty object
    detail1 = {}, // Default to an empty object
  } = currentBlog || {}; // Default to an empty object in case currentBlog is null
  if (!currentBlog && !isLoading) return <p>No blog found</p>;

  console.log(currentBlog.methods.detail1.points);

  return (
    <div>
      <BreadCrumSection bgImg={BlogImg} />
      <div className="max-w-[1200px] lg:px-0 px-6 flex gap-10 lg:flex-row flex-col-reverse m-auto py-8">
        <div className="left_section w-full lg:w-2/3">
          <div className="Blog_banner">
            <div className="blogImg">
              <img src={currentBlog.bannerImg} alt="" />
            </div>

            <div className="blogDetail flex md:gap-8 gap-2  items-center py-5 border-b-[1px]">
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

            <h3 className="title_method font-bold text-3xl my-5 font-openSans">
              {currentBlog.methods.title}
            </h3>
            <p className=" text-base text-para mb-5">
              {currentBlog.methods.para}
            </p>

            <div className="categoriesDetail flex ">
              <div className="max-w-[48%]  m-auto">
                <div className="imgContainer custom-shadow rounded-md my-4">
                  <img
                    src={currentBlog.methods.detail1.img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                {currentBlog.methods.detail1.points.map((point) => (
                  <div className=" flex items-center gap-4" key={point}>
                    <FaCheck className="text-primary" />
                    <p> {point}</p>
                  </div>
                ))}
              </div>
              <div className="max-w-[48%]  m-auto">
                <div className="imgContainer custom-shadow rounded-md my-4">
                  <img
                    src={currentBlog.methods.detail1.img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                {currentBlog.methods.detail1.points.map((point) => (
                  <div className=" flex items-center gap-4" key={point}>
                    <FaCheck className="text-primary" />
                    <p> {point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="para1 py-5">
              <p className="text-para">{currentBlog.para2}</p>
            </div>
          </div>
        </div>
        {/* end of left container */}
        <div className="right_section flex-grow">
          <div className="logo bg-primary max-w-[350px] text-center shadow-md p-4 font-bold text-white w-auto">
            <h3 className="text-2xl">SAUJNYA DIAGNOSTICS</h3>
          </div>

          {/* recent posts  */}
          <RecentPosts />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
