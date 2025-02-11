import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import UserProfile from "./components/UserProfile/UserProfile";
import AdminProfile from "./components/AdminProfile/AdminProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/adminProfile" element={<AdminProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
