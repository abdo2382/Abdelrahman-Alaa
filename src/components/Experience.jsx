import React from "react";
import "./Experience.css";
import metaCert from "../assets/meta-cert.jpg"; // Example thumbnail

const certificates = [
  {
    title: "Completion Certificate for Advanced React",
    platform: "coursera.org",
    image: metaCert,
    link: "https://coursera.org/share/a5b2fae3774a02297aa89fab0d497ccc",
  },
  {
    title: "Programming with JavaScript - Meta",
    platform: "coursera.org",
    image: metaCert,
    link: "https://coursera.org/share/51d1c22675443d14a47900b648421b85",
  },
  {
    title: "Version Control - Meta",
    platform: "coursera.org",
    image: metaCert,
    link: "https://coursera.org/share/a79eb0189e5a62dd72a9686cdd40a849",
  },
  {
    title: "HTML and CSS in Depth - Meta",
    platform: "coursera.org",
    image: metaCert,
    link: "https://coursera.org/share/0cfd9e86d5539b0459adce4e7c64a23e",
  },
  {
    title: "Principles of UX/UI Design - Meta",
    platform: "coursera.org",
    image: metaCert,
    link: "https://coursera.org/share/36ec52b2dcd067c8762c0e1907386167",
  },
  {
    title: "Front-End Developer Capstone - Meta",
    platform: "coursera.org",
    image: metaCert,
    link: "https://coursera.org/share/a43debb9894804dd8a9513a398c5eb9b",
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="bg-element cyan"></div>
      <div className="bg-element blue"></div>
      <div className="bg-element purple"></div>
      <div className="grid-overlay"></div>

      <h2 className="section-title">Certificates</h2>

      {/* === CERTIFICATES PART === */}
      <div className="cert-container">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-image">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="cert-info">
              <div className="cert-title">{cert.title}</div>
              <div className="cert-platform">{cert.platform}</div>
              <a
                href={cert.link}
                className="cert-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
