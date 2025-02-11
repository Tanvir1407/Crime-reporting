import { FaQuestionCircle, FaEdit, FaPen } from "react-icons/fa";

const AskShare = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-900 text-white rounded-lg shadow-md p-4 my-4">
      <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
        <img
          src="https://via.placeholder.com/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="What do you want to ask or share?"
          className="flex-1 bg-transparent border-none text-gray-300 focus:outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="mt-2 flex justify-around text-gray-400 text-sm bg-gray-800 p-2 rounded-lg">
        <button className="flex items-center gap-1 hover:text-blue-500">
          <FaQuestionCircle /> <span>Ask</span>
        </button>
        <button className="flex items-center gap-1 hover:text-green-500">
          <FaEdit /> <span>Answer</span>
        </button>
        <button className="flex items-center gap-1 hover:text-yellow-500">
          <FaPen /> <span>Post</span>
        </button>
      </div>
    </div>
  );
};

export default AskShare;
