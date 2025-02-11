import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import UserProfile from "./components/UserProfile/UserProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
