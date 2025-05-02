import React, { useState, useRef, useEffect } from "react";
import { ExperienceSection } from "./Container";

const experiences = {
  experience1: {
    positions: [
      {
        role: "Full Stack Engineer at ",
        company: "View26 GmbH",
        time: "January 2025 - Present",
        description: [
          "Designed and developed a product analytics application to provide comprehensive insights into app performance and user behavior.",
          "Enabled detailed analysis of user interactions, feature utilization, and engagement trends to identify undervalued features and optimize value delivery.",
          "Integrated churn prediction metrics with proactive protocols to mitigate risks and enhance user retention.",
        ],
      },
      {
        role: "Software Engineer at",
        company: "View26 GmbH / Actiotech",
        time: "August 2021 - December 2024",
        description: [
          "Led the end-to-end development of the flagship application VIEW26 Charts & Reports, utilizing D3.js, React, and TypeScript to transform complex data into visual insights.",
          "Oversaw project planning, resource management, and quality assurance for various projects while mentoring junior developers in software design and development best practices.",
          "Managed the codebase to ensure high quality and collaborated with product managers, designers, and stakeholders to gather and translate project requirements.",
        ],
      },
    ],
    company: "View26 GmbH",
  },
  experience2: {
    positions: [
      {
        role: "Intern at ",
        company: "Melwire Rolling (Pvt) Ltd",
        time: "June 2019 - July 2019",
        description: [
          "Gained hands-on experience in key concepts such as Rolling Mill operations, Industrial Networking, PLC Programming, Instrumentation, and Industrial Automation.",
          "Utilized technologies including Siemens PLC, Profibus, and Profinet to enhance understanding of automation processes.",
        ],
      },
    ],
    company: "Melwire Rolling (Pvt) Ltd",
  },
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience1");
  const [contentVisible, setContentVisible] = useState(true);
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

  const handleTabClick = (key) => {
    if (key === activeTab) return;

    // Hide content first
    setContentVisible(false);

    // Change tab after animation out completes
    setTimeout(() => {
      setActiveTab(key);

      // Show content with new data
      setTimeout(() => {
        setContentVisible(true);
      }, 50); // Small delay to ensure state has updated
    }, 300); // Match this with your CSS transition duration
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
              {experiences[expKey].company}
            </button>
          ))}
        </div>
        <div className="content">
          <div
            className={`experience-content ${contentVisible ? "active" : ""}`}
          >
            {activeExperience.positions.map((position, index) => (
              <div key={index} className="position-wrapper">
                {index !== activeExperience.positions.length - 1 && (
                  <div className="connector-line"></div>
                )}

                <div className="position-block">
                  <div
                    className={`${
                      activeExperience.positions.length !== 1
                        ? index === 0
                          ? "curve-connector-top"
                          : "curve-connector-bottom"
                        : ""
                    }`}
                  ></div>
                  <div className="content-heading">
                    <span className="work-ex-h3">{position.role}</span>
                    <span className="work-ex-h2">{position.company}</span>
                  </div>
                  <p className="time">{position.time}</p>
                  <ul className="description">
                    {position.description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
