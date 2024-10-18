import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
    </Router>
  );
};

export default App;
