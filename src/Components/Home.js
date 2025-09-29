import React, { useState, useEffect } from "react";
import { HomeWrapper } from "./Container";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hey there, I'm Vighnesh";
  const [techStackVisible, setTechStackVisible] = useState(false);
  const techStack = [
    "JavaScript ES6+",
    "React",
    "Python",
    "TypeScript",
    "Node.js",
    "C++",
    "SQL",
  ];

  useEffect(() => {
    // Initial load animation
    setVisible(true);
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start blinking cursor after typing
        const cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
        // Show tech stack with delay
        setTimeout(() => {
          setTechStackVisible(true);
        }, 800);
        return () => clearInterval(cursorInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  // CSS for tech stack
  const techPillStyle = (index) => ({
    fontSize: "1rem",
    color: "#69dbb7",
    padding: "10px 18px",
    borderRadius: "25px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    background: "rgba(255, 255, 255, 0.07)",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    animation: techStackVisible ? "fadeIn 0.6s forwards" : "none",
    animationDelay: `${0.2 + index * 0.1}s`,
    opacity: 0,
    transform: techStackVisible ? "translateY(0)" : "translateY(15px)",
    display: "inline-block",
    margin: "5px",
  });

  //split the text into regular &  name
  const renderTypedText = () => {
    if (!typedText) return null;

    const nameIndex = fullText.indexOf("Vighnesh");
    if (nameIndex === -1 || typedText.length <= nameIndex) {
      return <span style={{ color: "#c7d3fa" }}>{typedText}</span>;
    }

    return (
      <>
        <span style={{ color: "#c7d3fa" }}>
          {typedText.substring(0, nameIndex)}
        </span>
        <span style={{ color: "#69dbb7", fontWeight: "bold" }}>
          {typedText.substring(nameIndex)}
        </span>
      </>
    );
  };

  return (
    <HomeWrapper id="home">
      <h1 style={{ position: "relative" }}>
        <span>{renderTypedText()}</span>
        {showCursor && (
          <span
            style={{
              color: "#69dbb7",
              position: "absolute",
              marginLeft: "2px",
            }}
          >
            |
          </span>
        )}
      </h1>

      <p className="intro-text">I make things. Sometimes, they even work.</p>

      <p className="bio-text">
        Based in India, I'm a Software Developer with over four years of
        experience with a flair for design and innovation. I build solutions
        that tackle real challenges and turn ideas into reality.
      </p>

      <div className="skills">
        <p>Here's a peek at the tech I love to work with.</p>

        <ul>
          {techStack.map((tech, index) => (
            <li
              key={index}
              style={techPillStyle(index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-5px) scale(1.05)";
                e.currentTarget.style.background = "rgba(105, 219, 183, 0.2)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow =
                  "0px 8px 15px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                e.currentTarget.style.color = "#69dbb7";
                e.currentTarget.style.boxShadow =
                  "0px 4px 10px rgba(0, 0, 0, 0.3)";
              }}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </HomeWrapper>
  );
};

export default Home;
