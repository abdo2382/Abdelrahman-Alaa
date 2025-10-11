import React, { useEffect, useState } from "react";
import "./BackgroundSection.css";

const typewriterWords = [
  "Frontend React.js",
  "Full-Stack Developer",
  "Backend Node.js",
  "UI/UX Enthusiast",
];

const BackgroundSection = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterWords[wordIndex % typewriterWords.length];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setCurrentWord(current.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setCurrentWord(current.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setWordIndex(wordIndex + 1);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="background-section">
      {/* Animated background elements */}
      <div className="bg-element"></div>
      <div className="bg-element"></div>
      <div className="bg-element"></div>
      <div className="bg-element"></div>

      {/* Grid pattern overlay */}
      <div className="grid-overlay"></div>

      {/* Content */}
      <div className="background-content">
        <h1>Abdelrahman Alaa</h1>
        <h2 className="subtitle">
          Full-Stack Developer · Creative Coder · Visionary
        </h2>
        <div className="typewriter">
          {currentWord}
          <span className="typewriter-cursor">|</span>
        </div>
        <p>
          I build web experiences that feel effortless — clean code, stunning
          design, and a touch of creativity that makes every project stand out.
          <br />
          Let’s build something extraordinary.
        </p>
        <div className="cta-group">
          <a href="/cv.pdf" className="cta-button" download>
            Download CV
          </a>
          <a href="#Contact" className="cta-button hire">
            Hire Me
          </a>
        </div>
        <div className="stats">
          <div>
            <span className="stat-number">0+</span>
            <span className="stat-label">Clients Served</span>
          </div>
          <div>
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div>
            <span className="stat-number">3+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div>
            <span className="stat-number">1+</span>
            <span className="stat-label">Successful Integrations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
