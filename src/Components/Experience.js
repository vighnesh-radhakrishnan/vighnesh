import React, { useState, useRef, useEffect } from "react";
import { StyledExperienceSection } from "./Container";

const experiences = {
  experience1: {
    heading1: "Software Developer at ",
    heading2: "View26 GmbH / Actiotech",
    time: "Aug 2021 - Present",
    description: [
      "At View26, I focused on crafting seamless user experiences and building scalable software solutions.",
      "My work involved a mix of frontend development and collaborating closely with the design team to ensure a smooth interface.",
      "This role allowed me to dive deep into user-centered design while also exploring best practices in performance optimization and modern web technologies.",
    ],
  },
  experience2: {
    heading1: "Intern at",
    heading2: "Melwa",
    time: "June 2020 - July 2020",
    description: [
      "During my time at Actiotech, I worked on building user interfaces for enterprise applications.",
      "I gained valuable hands-on experience with React, TypeScript, and enhancing user workflows.",
      "This internship helped me understand the startup environment, allowing me to work directly with clients and contribute to product development from the ground up.",
    ],
  },
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience1");
  const activeButtonRef = useRef(null);

  useEffect(() => {
    if (activeButtonRef.current) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      activeButtonRef.current.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 500);
    }
  }, [activeTab]);

  const handleTabClick = (expKey) => {
    setActiveTab(expKey);
  };

  const activeExperience = experiences[activeTab];

  return (
    <StyledExperienceSection id="experience">
      <h1>/ experience</h1>
      <div className="content-wrapper">
        <div className="sidebar">
          {Object.keys(experiences).map((expKey) => (
            <button
              key={expKey}
              ref={expKey === activeTab ? activeButtonRef : null}
              className={`tab-button ${expKey === activeTab ? "active" : ""}`}
              onClick={() => handleTabClick(expKey)}
            >
              {experiences[expKey].heading2}
            </button>
          ))}
        </div>
        <div className="content">
          <div className="content-heading">
            <h3>{activeExperience.heading1}</h3>
            <h2>{activeExperience.heading2}</h2>
          </div>
          <p className="time">{activeExperience.time}</p>
          <ul className="description">
            {activeExperience.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </StyledExperienceSection>
  );
};

export default Experience;
