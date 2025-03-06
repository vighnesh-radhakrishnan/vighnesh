import React from "react";
import { HomeWrapper } from "./Container";
const Home = () => {
  return (
    <HomeWrapper id="home">
      <h1>
        Hey there, I'm <span className="name-text">Vighnesh</span>
        <span className="cursor">|</span>
      </h1>
      <p className="intro-text">I make things. Sometimes, they even work.</p>
      <p className="bio-text">
        Based in India, I’m a Software Developer with over three years of
        experience with a flair for design and innovation. I build solutions
        that tackle real challenges and turn ideas into reality.
      </p>
      <div className="skills">
        <p>Here’s a peek at the tech I love to work with.</p>
        <ul>
          <li>JavaScript ES6+</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>C++</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </div>
    </HomeWrapper>
  );
};

export default Home;
