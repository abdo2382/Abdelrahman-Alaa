import React from "react";
import "./Projects.css";
import Menu from "../assets/menu.jpg";
import Jewelry from "../assets/jewelry.jpg";
import Cruds from "../assets/cruds.jpg";

function Projects() {
  return (
    <section className="projects-section">
      <div className="bg-element cyan"></div>
      <div className="bg-element blue"></div>
      <div className="bg-element purple"></div>
      <div className="grid-overlay"></div>

      <h2 className="projects-title">My Projects</h2>
      <p className="projects-text">
        A showcase of my most recent and creative works.
      </p>

      <div className="projects-grid">
        {/* === Pizza Station Card === */}
        <div className="project-card">
          <div className="project-image">
            <img src={Menu} alt="Pizza Station" />
          </div>
          <div className="project-content">
            <h3 className="project-name">Pizza Station</h3>
            <p className="project-desc">
              A responsive restaurant website with an elegant menu, smooth
              navigation, and modern design aesthetics.
            </p>
            <div className="project-links">
              <a
                href="https://abdo2382.github.io/Restraint/"
                className="btn-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/abdo2382/Restraint"
                className="btn-project-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* === Jewelry Store Card === */}
        <div className="project-card">
          <div className="project-image">
            <img src={Jewelry} alt="Jewelry Store" />
          </div>
          <div className="project-content">
            <h3 className="project-name">Jewelry Store</h3>
            <p className="project-desc">
              A refined jewelry e-commerce site with elegant product layouts,
              shimmering visuals, and responsive design.
            </p>
            <div className="project-links">
              <a
                href="https://abdo2382.github.io/Jewelry-Store/"
                className="btn-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/abdo2382/Jewelry-Store"
                className="btn-project-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* === product-management-system === */}
        <div className="project-card">
          <div className="project-image">
            <img src={Cruds} alt="product management system" />
          </div>
          <div className="project-content">
            <h3 className="project-name">CRUDS</h3>
            <p className="project-desc">
              A refined product management app with smooth CRUD control, clean
              layout, and responsive modern interface.
            </p>
            <div className="project-links">
              <a
                href="https://abdo2382.github.io/product-management-system/"
                className="btn-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/abdo2382/product-management-system.git"
                className="btn-project-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
