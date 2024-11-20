import React from "react";
import { StyledSection, ProjectCard, ProjectGrid } from "./Container";
import { ReactComponent as GithubIcon } from "../Icons/Github.svg";
import { ReactComponent as OpenInNewTabIcon } from "../Icons/OpenInNewTabIcon.svg";

const projects = [
  {
    title: "Stock Average Calculator",
    description:
      "A React app to calculate the average price of stocks based on inputted prices and quantities, with options to delete purchases.",
    tech: "React, JavaScript, HTML/CSS",
    github: "https://github.com/vikkujonsnow/stock-average-calculator",
    appLink: "https://vikkujonsnow.github.io/stock-average-calculator/",
  },
  {
    title: "Personal Website",
    description:
      "A digital portfolio showcasing my work, experiences, and a way to connect. Built with modern web technologies, it reflects my technical skills and creative side.",
    tech: "React, JavaScript, HTML/CSS",
    github: "https://github.com/vikkujonsnow/vighnesh",
    appLink: "",
  },
];

const Projects = () => (
  <StyledSection id="projects">
    <h1>/ projects</h1>
    <p>Check out some of the cool projects I've worked on!</p>
    <ProjectGrid>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <div className="github-link">
            {project.appLink !== "" && (
              <a
                href={project.appLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpenInNewTabIcon width="29px" height="32px" />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon width="24px" height="24px" />
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

export default Projects;
