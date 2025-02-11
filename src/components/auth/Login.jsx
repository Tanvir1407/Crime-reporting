import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="max-w-md mx-auto rounded-lg shadow-md p-6 my-10">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <div className="flex items-center  rounded-lg px-3 py-2 mt-1 border">
            <FaUser className="text-gray-400" />
            <input
              type="email"
              className="w-full bg-transparent outline-none p-2 ml-2 "
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <div className="flex items-center  rounded-lg px-3 py-2 mt-1 border">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              className="w-full bg-transparent outline-none p-2 ml-2 "
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};


