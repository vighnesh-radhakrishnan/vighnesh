import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { GradientBackground } from "./Components/Container";

const App = () => (
  <>
    <Navbar />
    <GradientBackground />

    <Router>
      <div>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </Router>
  </>
);

export default App;
