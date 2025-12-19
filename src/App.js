import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { GradientBackground } from "./Components/Container";
import styled from "styled-components";

// Wrapper with scroll-margin-top to prevent content from going behind navbar
const ContentWrapper = styled.div`
  /* This adds spacing at the top so content doesn't scroll behind the navbar */
  padding-top: 70px;
  position: relative;
  z-index: 1;

  /* Alternative: Use scroll-margin-top for sections */
  section {
    scroll-margin-top: 70px;
  }
`;

const App = () => (
  <>
    <Navbar />
    <GradientBackground />
    <Router>
      <ContentWrapper>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </ContentWrapper>
    </Router>
  </>
);

export default App;
