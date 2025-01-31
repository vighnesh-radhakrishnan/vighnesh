import React, { useState, useRef, useEffect } from "react";
import { ExperienceSection } from "./Container";

const experiences = {
  experience1: {
    heading1: "Full Stack Engineer at ",
    heading2: "View26 GmbH",
    time: "August 2021 - Present",
    description: [
      "Led the end-to-end development of the flagship application VIEW26 Charts & Reports, utilizing D3.js, React, and TypeScript to transform complex data into visual insights.",
      "Developed dynamic filter components that enhanced dashboard personalization, significantly improving reporting efficiency and usability through continuous client collaboration.",
      "Oversaw project planning, resource management, and quality assurance for various projects while mentoring junior developers in software design and development best practices.",
      "Managed the codebase to ensure high quality and collaborated with product managers, designers, and stakeholders to gather and translate project requirements.",
    ],
  },
  experience2: {
    heading1: "Intern at",
    heading2: "Melwire Rolling (Pvt) Ltd",
    time: "June 2019 - July 2019",
    description: [
      "Gained hands-on experience in key concepts such as Rolling Mill operations, Industrial Networking, PLC Programming, Instrumentation, and Industrial Automation.",
      "Utilized technologies including Siemens PLC, Profibus, and Profinet to enhance understanding of automation processes.",
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
    <ExperienceSection id="experience">
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
            <span className="work-ex-h3">{activeExperience.heading1}</span>
            <span className="work-ex-h2">{activeExperience.heading2}</span>
          </div>
          <p className="time">{activeExperience.time}</p>
          <ul className="description">
            {activeExperience.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
