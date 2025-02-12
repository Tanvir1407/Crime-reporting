import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa";
import PropTypes from "prop-types";
import image from "../../../../public/images/bg.jpg";

const DetailsPosts = () => {
  const post = {
    authorAvatar: "https://via.placeholder.com/40",
    authorName: "Abdullah Al Mehmud",
    authorRole: "Software Engineer",
    title: "Suspicious Activities in the Marketplace",
    description:
      "There is a market where we buy fruits, but I have noticed some suspicious activities happening around. It seems like there is a group of people involved in illegal transactions. We need to be cautious and report any unusual behavior to the authorities.",
    division: "Dhaka",
    district: "Gulshan",
    media: {
      type: "image",
      url: "https://via.placeholder.com/600",
    },
    postTime: new Date().toISOString(),
    crimeTime: new Date("2024-02-10T15:30:00").toISOString(),
    upvotes: 247,
    comments: 23,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center py-4">
        <h1 className="text-3xl font-bold">Crime Report</h1>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Post Header */}
        <div className="flex items-center gap-3 border-b border-gray-700 pb-4">
          <img
            src={post.authorAvatar || "https://via.placeholder.com/40"}
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-lg">{post.authorName}</h4>
            <p className="text-gray-400 text-sm">{post.authorRole || "User"}</p>
          </div>
        </div>

        {/* Post Title & Description */}
        <div className="mt-4">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p className="mt-2 text-gray-300">{post.description}</p>
        </div>

        {/* Post Location Information */}
        <div className="mt-3 text-gray-400 border-b border-gray-700 pb-4">
          <p>
            <strong>Division:</strong> {post.division} |{" "}
            <strong>District:</strong> {post.district}
          </p>
          <p className="text-sm mt-1">
            <strong>Crime Occurred On:</strong>{" "}
            {new Date(post.crimeTime).toLocaleString()}
          </p>
        </div>

        {/* Post Image/Video */}
        {post.media && (
          <div className="mt-4">
            {post.media.type === "image" ? (
              <img
                src={image}
                alt="Crime Post Visual"
                className="w-full rounded-lg h-[400px] object-cover"
              />
            ) : (
              <video controls className="w-full rounded-lg">
                <source src={post.media.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}

        {/* Post Timestamp Information */}
        <div className="mt-4 text-sm text-gray-400 border-b border-gray-700 pb-4">
          <p>
            <strong>Posted On:</strong>{" "}
            {new Date(post.postTime).toLocaleString()}
          </p>
        </div>

        {/* Post Actions */}
        <div className="flex gap-5 mt-6 justify-center">
          <div className="flex gap-4 bg-gray-700 rounded-xl px-6 py-2 ">
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
    </div>
  );
};

DetailsPosts.propTypes = {
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

export default DetailsPosts;
