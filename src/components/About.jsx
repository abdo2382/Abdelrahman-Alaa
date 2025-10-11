// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import FloatingLogos from "./FloatingLogos";
import "./About.css";

import arduino from "../assets/Arduino.svg";
import cpp from "../assets/c.svg";
import calculus from "../assets/pi.svg";
import css3 from "../assets/css.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import javascript from "../assets/js.svg";
import machine from "../assets/ml.svg";
import nodejs from "../assets/node.svg";
import python from "../assets/Python.svg";
import react from "../assets/react.svg";

const skills = [
  { name: "HTML", level: 94, img: html },
  { name: "CSS3", level: 90, img: css3 },
  { name: "JavaScript", level: 85, img: javascript },
  { name: "React.js", level: 82, img: react },
  { name: "Node.js", level: 40, img: nodejs },
  { name: "Python", level: 60, img: python },
  { name: "C++", level: 92, img: cpp },
  { name: "Arduino", level: 93, img: arduino },
  { name: "Machine Learning", level: 30, img: machine },
  { name: "Calculus", level: 99, img: calculus },
  { name: "Git", level: 85, img: git },
  { name: "GitHub", level: 83, img: github },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });

  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      console.log("About section in view!");
      const duration = 2000;
      const start = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        setAnimatedLevels(skills.map((s) => Math.floor(s.level * progress)));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [inView]);

  return (
    <section ref={ref} id="about" className="about-section">
      <div className="bg-element cyan"></div>
      <div className="bg-element blue"></div>
      <div className="bg-element purple"></div>
      <div className="grid-overlay"></div>
      <FloatingLogos />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-title"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-text"
      >
        I’m a passionate developer who merges creativity, logic, and
        engineering. From building Arduino circuits to crafting full-stack React
        apps, I love turning ideas into digital experiences.
      </motion.p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="skill-card"
          >
            <div className="skill-image">
              <img src={skill.img} alt={skill.name} />
            </div>
            <div className="skill-details">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span className="percent">{animatedLevels[index]}%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${animatedLevels[index]}%`,
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
