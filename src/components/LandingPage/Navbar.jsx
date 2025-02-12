import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-gray-800">
          CRIME WATCH
        </a>

        {/* Navigation Links (Centered) */}
        <div className="hidden md:flex space-x-6 mx-auto"></div>

        {/* Login and Register Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="text-gray-600 border-[1.9px] border-gray-900  hover:text-gray-800  px-4 py-2 rounded-lg transition duration-300">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg transition duration-300">
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18m-9 6h9"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
