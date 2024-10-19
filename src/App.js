import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

const GradientBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  transition: background 0.2s ease-in-out;
  /* background: linear-gradient(
    178.1deg,
    rgb(43, 1, 91) 8.5%,
    rgb(23, 20, 69) 82.4%
  ); */ //sample gradient i liked
  background: linear-gradient(
    109.6deg,
    rgb(43, 1, 91) 13.4%,
    rgb(122, 2, 54) 100.2%
  );
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
`;

const App = () => {
  return (
    <Router>
      <GradientBackground>
        <Navbar />
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
      </GradientBackground>
    </Router>
  );
};

export default App;
