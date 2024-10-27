import React, { useEffect, useState } from "react";
import { NavbarWrapper } from "./Components/Container";
import { ReactComponent as GithubIcon } from "./Icons/Github.svg";
import { ReactComponent as LinkedInIcon } from "./Icons/LinkedIn.svg";
import { ReactComponent as MediumIcon } from "./Icons/Medium.svg";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NavbarWrapper>
      <nav className="navbar-container">
        <nav className="navbar-left">
          <a href="#" className="name">
            Vighnesh
          </a>
          <ul>
            <li>
              <a
                className={`pages ${activeSection === "home" ? "active" : ""}`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`pages ${activeSection === "about" ? "active" : ""}`}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`pages ${
                  activeSection === "experience" ? "active" : ""
                }`}
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className={`pages ${
                  activeSection === "projects" ? "active" : ""
                }`}
                href="#projects"
              >
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

          <a
            href="https://medium.com/@vighnesh7radhakrishnan"
            aria-label="Medium"
          >
            <MediumIcon className="icons" width="23px" height="23px" />
          </a>
        </nav>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
