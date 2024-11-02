import React from "react";
import styled from "styled-components";
import { AboutWrapper } from "./Container";

const About = () => (
  <AboutWrapper id="about">
    <h1>/ about me</h1>
    <p>
      I’m currently a Software Developer at View26, where I focus on crafting
      seamless user experiences and building scalable software solutions.
    </p>
    <p>
      Outside of work, I unwind with good music, a great book, epic video games,
      and catching up on football and Formula 1.
    </p>
    <p>Here are some of my favorite things:</p>

    <div className="favorites">
      <div className="favorite-item">
        <h3>Music Artists</h3>
        <ul>
          <li>Kendrick Lamar</li>
          <li>Twenty One Pilots</li>
          <li>Daft Punk</li>
          <li>Ling Tosite Sigure</li>
        </ul>
      </div>
      <div className="favorite-item">
        <h3>Games</h3>
        <ul>
          <li>The Witcher 3</li>
          <li>Red Dead Redemption 2</li>
          <li>The Last of Us</li>
          <li>Uncharted</li>
        </ul>
      </div>

      <div className="favorite-item">
        <h3>Movies and Animes</h3>
        <p>Lord Of The Rings</p>
        <p>Harry Potter </p>
        <p>Cowboy Bebop</p>
        <p>Bleach</p>
      </div>

      <div className="favorite-item">
        <h3>Books</h3>
        <ul>
          <li>Feluda</li>
          <li>Tomorrow, and Tomorrow, and Tomorrow</li>
        </ul>
      </div>

      <div className="favorite-item">
        <h3>Football</h3>
        <p>Manchester United</p>
        <p>Wayne Rooney</p>
      </div>
      {/* <div className="favorite-item">
        <h3>Football Player</h3>
        <p>Wayne Rooney</p>
      </div> */}
      <div className="favorite-item">
        <h3>F1</h3>
        <p>Ferrari</p>
        <p>Lewis Hamilton</p>
      </div>
    </div>
  </AboutWrapper>
);

export default About;
