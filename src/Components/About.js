import React from "react";
import styled from "styled-components";
import { AboutWrapper } from "./Container";

const About = () => (
  <AboutWrapper id="about">
    <h1>About Me</h1>
    <p>
      I’m currently a Software Developer at View26, where I focus on crafting
      seamless user experiences and building scalable software solutions.
      Outside of work, I unwind by exploring new music, getting lost in
      immersive video games, and watching my favorite sports, like football and
      Formula 1.
    </p>
    <p>Here are some of my favorite things:</p>

    <div className="favorites">
      <div className="favorite-item">
        <h3>Favorite Musician</h3>
        <ul>
          <li>Kendrick Lamar</li>
          <li>Twenty One Pilots</li>
          <li>Daft Punk</li>
          <li>Ling Tosite Sigure</li>
        </ul>
      </div>

      <div className="favorite-item">
        <h3>Favorite Games</h3>
        <ul>
          <li>The Witcher 3</li>
          <li>Red Dead Redemption 2</li>
          <li>The Last of Us</li>
          <li>Uncharted</li>
        </ul>
      </div>
      <div className="favorite-item">
        <h3>Favorite Books</h3>
        <ul>
          <li>Feluda</li>
          <li>The Prophet</li>
          <li>Tomorrow, and Tomorrow, and Tomorrow</li>
        </ul>
      </div>

      <div className="favorite-item">
        <h3>Favorite Football Club</h3>
        <p>Manchester United</p>
      </div>

      <div className="favorite-item">
        <h3>Favorite Football Player</h3>
        <p>Wayne Rooney</p>
      </div>

      <div className="favorite-item">
        <h3>Favorite F1 Team</h3>
        <p>Ferrari</p>
      </div>

      <div className="favorite-item">
        <h3>Favorite F1 Driver</h3>
        <p>Lewis Hamilton</p>
      </div>
    </div>
  </AboutWrapper>
);

export default About;
