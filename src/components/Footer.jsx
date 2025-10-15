import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Let's Connect</h3>

        <div className="social-links">
          <a
            href="https://wa.me/201116259172"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.facebook.com/share/1AEooYy8Vt/?mibextid=wwXIfr"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/3bdo_________alaa?igsh=YWV1b2kxc3Bla21i&utm_source=qr "
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/abdo2382"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/abdelrahman-alaa-8801b2337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} <span>Abdelrahman Alaa</span> — All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
