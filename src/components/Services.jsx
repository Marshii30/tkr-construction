import React from "react";
import { Link } from "react-router-dom";

import { FaBuilding } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services-section" id="services">

      <h2 className="section-heading">
        Our Expertise in Commercial Construction
      </h2>

      <div className="services-grid">

        <div className="service-card">

          <FaBuilding className="service-icon" />

          <h3>
            GENERAL
            CONTRACTING
          </h3>

          <p>
            End-to-end construction services for
            residential and commercial projects.
          </p>

          <Link to="/general-contracting">
            Learn More →
          </Link>

        </div>

        <div className="service-card">

          <FaDraftingCompass className="service-icon" />

          <h3>
            DESIGN &
            BUILD
          </h3>

          <p>
            Planning, designing and constructing
            under one seamless process.
          </p>

          <Link to="/design-build">
            Learn More →
          </Link>

        </div>

        <div className="service-card">

          <FaHardHat className="service-icon" />

          <h3>
            PROJECT
            MANAGEMENT
          </h3>

          <p>
            Delivering projects on time while
            maintaining superior quality.
          </p>

          <Link to="/project-management">
            Learn More →
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Services;