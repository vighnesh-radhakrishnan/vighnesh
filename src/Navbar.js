import React from "react";
import { NavbarWrapper } from "./Components/Container";
import { ReactComponent as GithubIcon } from "./Icons/Github.svg";
import { ReactComponent as LinkedInIcon } from "./Icons/LinkedIn.svg";
const Navbar = () => (
  <NavbarWrapper>
    <nav className="navbar-container" id="#">
      <nav className="navbar-left">
        <a href="#" className="name">
          Vighnesh
        </a>
        <ul>
          <li>
            <a className="pages" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="pages" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="pages" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="pages" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <nav className="navbar-right">
        <a
          href="https://github.com/vikkujonsnow"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="icons" width="19px" height="19px" />
        </a>

        <a
          href="https://www.linkedin.com/in/vighnesh-radhakrishnan-b73649191/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="icons" width="23px" height="23px" />
        </a>

        {/* <a href="#" aria-label="Medium">
          <LinkedInIcon width="23px" height="23px" />
        </a> */}
      </nav>
    </nav>
  </NavbarWrapper>
);

export default Navbar;
