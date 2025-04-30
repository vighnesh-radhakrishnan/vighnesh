import React from "react";
import { AboutWrapper } from "./Container";
import { useScrollAnimation } from "./useScrollAnimation";

function About() {
  useScrollAnimation();

  return (
    <AboutWrapper id="about">
      <h1>/ about me</h1>
      <p>
        I’m a Full Stack Engineer at View26, where I tackle challenges and
        design products that people love to use, focusing on creating seamless
        experiences that make a real impact.
      </p>
      <p>
        When I’m not coding, I enjoy music, books, movies, and video games. I’m
        also a big sports fan, especially football and Formula 1.
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
          <ul>
            <li>Lord Of The Rings</li>
            <li>Harry Potter </li>
            <li>Cowboy Bebop</li>
            <li>Bleach</li>
          </ul>
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
          <ul>
            <li>Manchester United</li>
            <li>Wayne Rooney</li>
          </ul>
        </div>
        {/* <div className="favorite-item">
        <h3>Football Player</h3>
        <p>Wayne Rooney</p>
      </div> */}
        <div className="favorite-item">
          <h3>F1</h3>
          <ul>
            <li>Ferrari</li>
            <li>Lewis Hamilton</li>
          </ul>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
