import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          CRIME WATCH
        </Link>

        {/* Navigation Links (Hidden on mobile) */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <Link to="/" className="text-gray-600 hover:text-gray-800 transition">
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-600 hover:text-gray-800 transition">
            Services
          </Link>
          <Link
            to="/report"
            className="text-gray-600 hover:text-gray-800 transition">
            Report
          </Link>
        </div>

        {/* Login and Register Buttons (Hidden on small screens) */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="text-gray-600 border-[1.9px] border-gray-900 hover:text-gray-800 px-4 py-2 rounded-lg transition duration-300">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg transition duration-300">
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none">
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

      {/* Mobile Navigation Menu (Placed at the bottom) */}
      {isOpen && (
        <div className="fixed w-59 mt-2 right-0 bg-white shadow-lg p-4 md:hidden">
          <div className="flex flex-col space-y-2 text-center">
            <Link to="/" className="text-gray-600 py-2 hover:text-gray-800">
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-600 py-2 hover:text-gray-800">
              Services
            </Link>
            <Link
              to="/report"
              className="text-gray-600 py-2 hover:text-gray-800">
              Report
            </Link>
            <hr className="my-2" />
            <Link
              to="/login"
              className="text-gray-600 py-2 hover:text-gray-800">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gray-900 text-white py-2 px-4 rounded-lg text-center">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
