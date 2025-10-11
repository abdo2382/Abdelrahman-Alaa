// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./FloatingLogos.css";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import python from "../assets/Python.svg";
import node from "../assets/node.svg";

const logos = [html, css, js, react, python, node];

export default function FloatingLogos() {
  return (
    <div className="floating-logos-container">
      {logos.map((logo, i) => (
        <motion.img
          key={i}
          src={logo}
          alt={`logo-${i}`}
          className="floating-logo"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{
            delay: i * 0.3,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
