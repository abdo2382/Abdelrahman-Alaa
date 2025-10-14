import React, { useEffect } from "react";
import "./Header.css";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 60) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <a
          href="#BackgroundSection"
          onClick={handleScrollTo("#BackgroundSection")}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h1>My Portfolio</h1>
        </a>
      </div>
      <nav className="buttons">
        <a href="#about" onClick={handleScrollTo("#about")}>
          About
        </a>
        <a href="#experience" onClick={handleScrollTo("#experience")}>
          Certificates
        </a>
        <a href="#projects" onClick={handleScrollTo("#projects")}>
          Projects
        </a>
        <a href="#Contact" onClick={handleScrollTo("#Contact")}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
