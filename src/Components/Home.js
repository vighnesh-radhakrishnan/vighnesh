import React from "react";
import { HomeWrapper } from "./Container";

const Home = () => {
  return (
    <HomeWrapper id="home">
      <h1>
        Hi, I'm <span className="name-text">Vighnesh</span>
        <span className="cursor">|</span>
      </h1>
      <p className="intro-text">I make things. Sometimes, they even work.</p>
      <p className="bio-text">
        Based in India, I'm passionate about design, art, and software
        engineering. I love creating innovative solutions that make a
        difference.
      </p>
    </HomeWrapper>
  );
};

export default Home;
