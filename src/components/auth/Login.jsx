import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getLoggedUser, userLogin } from "../Redux/Api/Auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async(e) => {

    e.preventDefault();
    if (password.length < 6) {
      setError("Passwords must be at least 6 characters long");
      return;
    }
    
    setError("");

    const userData =  { username, password }
    const resp =  await dispatch(userLogin(userData))

    if(resp.payload){
      localStorage.setItem("userId", resp.payload.user_id)
      localStorage.setItem("isLogged", true)
      const resp2 =  await dispatch(getLoggedUser(resp.payload.user_id))
      console.log(resp2)
      if(resp2.payload){
        localStorage.setItem("firstName",resp2.payload.first_name) 
        localStorage.setItem("lastName",resp2.payload.last_name)
        localStorage.setItem("email",resp2.payload.email)
        localStorage.setItem("phone",resp2.payload.phone)
        localStorage.setItem("username", resp2.payload.username)
      }
      navigate("/")
    }

  };

  return (
    <div className="max-w-md mx-auto rounded-lg shadow-md p-6 my-10 ">
      <h2 className="text-2xl font-bold text-center">Login</h2>
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
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4">
          Login
        </button>
      </form>
    </div>
  );
}