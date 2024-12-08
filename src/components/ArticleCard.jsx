/* eslint-disable react/prop-types */
import { FaRegCircleUser } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ArticleCard = ({ blog }) => {
  return (
    <div className="lg:max-w-[380px] md:max-w-[340px] my-4 mx-auto p-5 group transition-all duration-500 hover:-translate-y-2  bg-white   blog-shadow overflow-hidden">
      {/* Image Section */}
      <div className="img_container h-['600px] overflow-hidden">
        <img
          src={blog.bannerImg} // Replace with your image URL
          alt="Lab Scientist"
          className="w-full group-hover:scale-110 transition-all duration-700 h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 relative py-8">
        <span className="bg-green-500 absolute font-openSans top-0 right-3 text-white text-xs font-semibold px-3 py-2 ">
          04 JUL, 2020
        </span>
        {/* Tag and Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-base font-medium text-green-600">
            Gemological
          </span>
        </div>

        {/* Title */}
        <Link to={`/blog-detail/${blog.id}?name=${blog.methods.title}`}>
          <h2 className="text-2xl font-openSans font-bold text-gray-800">
            {blog.title}
          </h2>
        </Link>

        {/* Footer Section */}
        <div className="flex gap-4 items-center mt-4">
          <span className="text-base gap-2 text-[#999] font-normal flex items-center mr-4">
            <FaRegCircleUser className="text-green-600" size={20} />
            by Admin
          </span>
          <span className="text-xs text-gray-600 flex items-center">
            <FaComments className="text-green-600" size={20} />3
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
