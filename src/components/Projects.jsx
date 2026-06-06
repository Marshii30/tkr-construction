import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-header">
        <span>WORKS</span>

        <h2>
          Proven Results in
          Commercial Construction
        </h2>
      </div>

      <div className="projects-grid">

        <div className="project-card">

          <img
            src="/assets/project1.jpeg"
            alt="Project 1"
          />

          <div className="project-content">

            <Link
              to="/project1"
              className="project-btn"
            >
              Learn More →
            </Link>

          </div>

        </div>

        <div className="project-card">

          <img
            src="/assets/project2.jpeg"
            alt="Project 2"
          />

          <div className="project-content">

            <Link
              to="/project2"
              className="project-btn"
            >
              Learn More →
            </Link>

          </div>

        </div>

        <div className="project-card">

          <img
            src="/assets/project3.jpeg"
            alt="Project 3"
          />

          <div className="project-content">

            <Link
              to="/project3"
              className="project-btn"
            >
              Learn More →
            </Link>

          </div>

        </div>

        <div className="project-card">

          <img
            src="/assets/project4.jpeg"
            alt="Project 4"
          />

          <div className="project-content">

            <Link
              to="/project4"
              className="project-btn"
            >
              Learn More →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;