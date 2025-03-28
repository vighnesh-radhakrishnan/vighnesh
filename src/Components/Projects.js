import React from "react";
import { StyledSection, ProjectCard, ProjectGrid } from "./Container";
import { ReactComponent as GithubIcon } from "../Icons/Github.svg";
import { ReactComponent as OpenInNewTabIcon } from "../Icons/OpenInNewTabIcon.svg";
import { useScrollAnimation } from "./useScrollAnimation";

const projects = [
  {
    title: "Anemoi",
    description:
      "A web-based interface using the FastF1 library to vizualize F1 telemetry, stats, and race data, offering real-time insights and interactive graphs.",
    tech: "React, JavaScript, Python, Render",
    github: "https://github.com/vighnesh-radhakrishnan/anemoi",
    appLink: "https://vighnesh-radhakrishnan.github.io/anemoi/",
  },
  {
    title: "SlitherScript",
    description:
      "A simple and fun retake on the classic snake game—crafted for moments of nostalgia and a bit of a challenge!",
    tech: "JavaScript, HTML/CSS",
    github: "https://github.com/vighnesh-radhakrishnan/slither-script",
    appLink: "https://vighnesh-radhakrishnan.github.io/slither-script/",
  },
  {
    title: "Stock Average Calculator",
    description:
      "A React app to calculate the average price of stocks based on inputted prices and quantities, with options to delete purchases.",
    tech: "React, JavaScript, HTML/CSS",
    github:
      "https://github.com/vighnesh-radhakrishnan/stock-average-calculator",
    appLink:
      "https://vighnesh-radhakrishnan.github.io/stock-average-calculator/",
  },
  {
    title: "Taskatron",
    description:
      "A simple and interactive Telegram bot for setting reminders and scheduling sessions, designed to keep users organized.",
    tech: "Python",
    github: "https://github.com/vighnesh-radhakrishnan/vighnesh",
    appLink: "",
  },
  {
    title: "Vighnesh",
    description:
      "A digital portfolio showcasing my work, experiences, and a way to connect. Built with modern web technologies, it reflects my technical skills and creative side.",
    tech: "React, JavaScript, HTML/CSS",
    github: "https://github.com/vighnesh-radhakrishnan/vighnesh",
    appLink: "",
  },
];

const Projects = () => {
  useScrollAnimation();
  return (
    <StyledSection id="projects">
      <h1>/ projects</h1>
      <p>Check out some of the cool projects I've worked on!</p>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} className="project-card">
            <div className="github-link">
              {project.appLink !== "" && (
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenInNewTabIcon
                    className="project-icon"
                    width="30px"
                    height="29px"
                  />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon
                  className="project-icon"
                  width="24px"
                  height="24px"
                />
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">{project.tech}</div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </StyledSection>
  );
};

export default Projects;
