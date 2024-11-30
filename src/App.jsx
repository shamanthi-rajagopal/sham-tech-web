//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TechPage from "./pages/TechPage";
import MyWorldPage from "./pages/MyWorldPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/my-world" element={<MyWorldPage />} />
      </Routes>
    </Router>
  );
};

export default App;
