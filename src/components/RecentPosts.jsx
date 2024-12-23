import { Link } from "react-router-dom";
import { blogCard } from "../consonants";

const RecentPosts = () => {
  return (
    <div className="bg-white p-6 my-6 w-full lg:max-w-[350px] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1  gap-6">
        {blogCard.map(
          (post, index) =>
            index < 4 && (
              <div key={index} className="flex space-x-4">
                <img
                  src={post.bannerImg}
                  alt={post.title}
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div className="flex-1">
                  <Link
                    to={`/blog-detail/${post.id}?name=${post.methods.title}`}
                  >
                    <h3 className="text-base font-medium mb-1">{post.title}</h3>
                  </Link>

                  <p className="text-primary font-medium text-sm">
                    25 June 2024
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default RecentPosts;
