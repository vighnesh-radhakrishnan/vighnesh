import React, { useEffect, useState } from "react";
import { NavbarWrapper } from "./Components/Container";
import { ReactComponent as GithubIcon } from "./Icons/Github.svg";
import { ReactComponent as LinkedInIcon } from "./Icons/LinkedIn.svg";
import { ReactComponent as MediumIcon } from "./Icons/Medium.svg";
import { ReactComponent as MenuIcon } from "./Icons/Menu.svg";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";
    const navbarHeight = 100; // Adjust this value to match your navbar height

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      // Check if the section is in view and not cropped by the navbar
      if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
        currentSection = section.getAttribute("id");
      } else if (
        sectionBottom >= navbarHeight &&
        sectionBottom < window.innerHeight / 2
      ) {
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
        <MenuIcon className="menu-icon" onClick={toggleSidebar} />
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
            <MediumIcon width="23px" height="23px" />
          </a>
        </nav>
      </nav>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-left">
            <a href="#" className="name">
              Vighnesh
            </a>
            <a href="#home" onClick={toggleSidebar}>
              Home
            </a>
            <a href="#about" onClick={toggleSidebar}>
              About
            </a>
            <a href="#experience" onClick={toggleSidebar}>
              Experience
            </a>
            <a href="#projects" onClick={toggleSidebar}>
              Projects
            </a>
          </div>
          <div className="sidebar-right">
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
              <MediumIcon width="23px" height="23px" />
            </a>
          </div>
        </div>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
