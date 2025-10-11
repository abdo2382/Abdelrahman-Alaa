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

  return (
    <header className="header">
      <div className="logo">
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>My Portfolio</h1>
        </a>
      </div>
      <nav className="buttons">
        <a href="#About">About</a>
        <a href="#Experience">Experience</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
