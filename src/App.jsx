import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </Router>
  );
};

export default App;
