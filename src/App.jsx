import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";

function App() {
  return (
    <>
    <Router basename="/react-portfolio">
      <Routes>
        <Route path="/react-portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
 
    </>
    
  );
}

export default App;
