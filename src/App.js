import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { GradientBackground } from "./Components/Container";

const App = () => (
  <>
    <Navbar />
    <Router>
      <GradientBackground>
        <Home />
        <About />
        <Experience />
        <Projects />
      </GradientBackground>
    </Router>
  </>
);

export default App;
