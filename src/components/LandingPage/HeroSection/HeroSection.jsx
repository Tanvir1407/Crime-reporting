import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa";
import image from "../../../../public/images/bg.jpg";

const HeroSection = () => {
  return (
    <div className="max-w-2xl mx-auto bg-[#262626] text-white rounded-lg shadow-md p-4 my-4">
      {/* Post Header */}
      <div className="flex items-center gap-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="font-semibold">Abdullah Al Mehmud</h4>
          <p className="text-gray-400 text-sm">Software engineer</p>
        </div>
      </div>

      <div className="mt-3">
        <img src={image} alt="Post visual" className="w-full rounded-lg" />
      </div>

      {/* Post Content */}
      <div className="mt-3">
        <h3 className="font-bold text-lg">
          I Have seen a syndicate going on in my city
        </h3>
        <p className="mt-2 text-gray-300">
          There is a market where we buy fruits, but I have noticed some
          suspicious activities happening around. It seems like there is a group
          of people involved in illegal transactions. We need to be cautious and
          report any unusual behavior to the authorities.
        </p>
      </div>

      {/* Post Image */}

      {/* Post Actions */}
      <div className="flex gap-5 mt-6">
        <div className="flex gap-4 bg-[#393939] rounded-xl px-6 py-2 ">
          <button className="flex items-center gap-1 hover:text-blue-500">
            <FaArrowUp /> <span>Upvote - 247</span>
          </button>
          <button className="flex items-center gap-1 hover:text-gray-500">
            <FaArrowDown />
          </button>
        </div>

        <button className="flex items-center gap-1 hover:text-green-500">
          <FaComment /> <span>23</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
