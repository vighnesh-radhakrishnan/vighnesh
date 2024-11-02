import React from "react";
import styled from "styled-components";
import { HomeWrapper } from "./Container";
const Home = () => {
  return (
    <HomeWrapper id="home">
      <h1>
        Hey, I'm <span className="name-text">Vighnesh</span>
        <span className="cursor">|</span>
      </h1>
      <p className="intro-text">
        Crafting digital experiences with code & creativity.
      </p>
      <p className="bio-text">
        Based in India, I’m a software engineer with a flair for design and
        innovation. I build solutions that solve problems and bring ideas to
        life.
      </p>
      <div className="skills">
        <p>Technologies I'm proficient in:</p>
        <ul>
          <li>JavaScript ES6+</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>C++</li>
        </ul>
      </div>
    </HomeWrapper>
  );
};

export default Home;
