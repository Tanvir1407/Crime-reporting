import { useState } from "react";
import { FaUser, FaLock, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { userRegister } from "../Redux/Api/Auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async(e) => {

    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    const userData =  { username, first_name:firstName, last_name:lastName, email, phone, password,confirm_password:confirmPassword }
    const resp =  await dispatch(userRegister(userData))
    if(resp?.payload){
      toast.success(resp.payload)
      navigate("/login")
    }

  };

  return (
    <div className="max-w-md mx-auto rounded-lg shadow-md p-6 my-10 ">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">Username</label>
          <div className="flex items-center rounded-lg px-3 py-2 mt-1 border">
            <FaUser className="text-gray-400" />
            <input

              type="text"
              className="w-full bg-transparent outline-none p-2 ml-2"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              className="w-full bg-transparent outline-none p-2 border rounded-lg"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="w-full bg-transparent outline-none p-2 border rounded-lg"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <div className="flex items-center rounded-lg px-3 py-2 mt-1 border">
            <MdEmail className="text-gray-400" />
            <input
              type="email"
              className="w-full bg-transparent outline-none p-2 ml-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Phone</label>
          <div className="flex items-center rounded-lg px-3 py-2 mt-1 border">
            <FaPhone className="text-gray-400" />
            <input
              type="tel"
              className="w-full bg-transparent outline-none p-2 ml-2"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <div className="flex items-center rounded-lg px-3 py-2 mt-1 border">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              className="w-full bg-transparent outline-none p-2 ml-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Confirm Password</label>
          <div className="flex items-center rounded-lg px-3 py-2 mt-1 border">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              className="w-full bg-transparent outline-none p-2 ml-2"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4">
          Register
        </button>
      </form>
    </div>
  );
}