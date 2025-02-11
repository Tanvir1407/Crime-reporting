import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa";
import PropTypes from "prop-types";
import image from "../../../../public/images/bg.jpg";

const Posts = ({ post }) => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-900 text-white rounded-lg shadow-md p-4 my-4">
      {/* Post Header */}
      <div className="flex items-center gap-3">
        <img
          src={post.authorAvatar || "https://via.placeholder.com/40"}
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="font-semibold">{post.authorName}</h4>
          <p className="text-gray-400 text-sm">{post.authorRole || "User"}</p>
        </div>
      </div>

      {/* Post Title */}
      <div className="mt-3">
        <h3 className="font-bold text-lg">{post.title}</h3>
      </div>

      {/* Post Description */}
      <div className="mt-2 text-gray-300">
        <p>{post.description}</p>
      </div>

      {/* Post Location Information */}
      <div className="flex justify-between mt-3 text-sm text-gray-400">
        <p>
          <strong>Division:</strong> {post.division} | <strong>District:</strong> {post.district}
        </p>
        <p className="text-sm">
          <strong>Crime Occurred On:</strong> {new Date(post.crimeTime).toLocaleString()}
        </p>
      </div>

      {/* Post Image/Video */}
      {post.media && (
        <div className="mt-3">
          {post.media.type === "image" ? (
            <img  src={image} alt="Crime Post Visual" className="w-full rounded-lg h-[400px] object-fit" />
          ) : (
            <video controls className="w-full rounded-lg">
              <source src={post.media.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}

      {/* Post Timestamp Information */}
      <div className="mt-3 text-sm text-gray-400">
        <p>
          <strong>Posted On:</strong> {new Date(post.postTime).toLocaleString()}
        </p>
       
      </div>

      {/* Post Actions */}
      <div className="flex gap-5 mt-6">
        <div className="flex gap-4 bg-gray-800 rounded-xl px-6 py-2 ">
          <button className="flex items-center gap-1 hover:text-blue-500">
            <FaArrowUp /> <span>Upvote - {post.upvotes || 0}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-gray-500">
            <FaArrowDown />
          </button>
        </div>
        <button className="flex items-center gap-1 hover:text-green-500">
          <FaComment /> <span>{post.comments || 0}</span>
        </button>
      </div>
    </div>
  );
};

Posts.propTypes = {
  post: PropTypes.shape({
    authorAvatar: PropTypes.string,
    authorName: PropTypes.string.isRequired,
    authorRole: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    division: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    media: PropTypes.shape({
      type: PropTypes.oneOf(["image", "video"]),
      url: PropTypes.string,
    }),
    postTime: PropTypes.string.isRequired,
    crimeTime: PropTypes.string.isRequired,
    upvotes: PropTypes.number,
    comments: PropTypes.number,
  }).isRequired,
};

export default Posts;