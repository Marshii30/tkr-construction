import React from "react";
import logo from "../assets/tkr-logo.png";
import heroImage from "../assets/project-management.jpg";

const ProjectManagement = () => {
return ( <div className="service-page">


  <img
    src={logo}
    alt="TKR Logo"
    className="service-logo"
  />

  <img
    src={heroImage}
    alt="Project Management"
    className="service-hero"
  />

  <h1>Project Management</h1>

  <p>
    Successful construction projects require
    effective planning, coordination and
    monitoring. At TKR Construction, our
    project management services ensure every
    project is delivered efficiently while
    maintaining quality, safety and budget
    objectives.
  </p>

  <p>
    We oversee all project activities from
    planning and scheduling to execution and
    final delivery. Our team continuously
    monitors progress, manages resources and
    identifies risks before they become costly
    issues.
  </p>

  <h2>Our Responsibilities</h2>

  <ul>
    <li>Resource Planning</li>
    <li>Timeline Management</li>
    <li>Cost Control</li>
    <li>Quality Monitoring</li>
    <li>Risk Assessment</li>
    <li>Client Reporting</li>
  </ul>

  <h2>Our Approach</h2>

  <p>
    Through detailed planning and regular
    project reviews, we ensure that all
    stakeholders remain informed throughout
    the construction process. Our management
    systems help maintain transparency,
    accountability and operational efficiency.
    Successful construction projects depend on effective coordination and strategic management. TKR Construction offers comprehensive Project Management services that ensure projects remain on schedule, within budget and aligned with quality expectations.

Our project managers oversee every aspect of the construction process, including planning, scheduling, procurement, workforce coordination, risk assessment and performance monitoring. We serve as the central point of communication between all stakeholders, ensuring transparency and accountability.

By continuously tracking progress and identifying potential risks early, we minimize delays and prevent costly disruptions. Detailed reporting and regular updates provide clients with complete visibility into project status, milestones and financial performance.

With a disciplined and proactive management approach, TKR Construction helps clients achieve successful project outcomes while maintaining the highest standards of safety, quality and operational efficiency.

  </p>

  <div className="page-buttons">

    <a href="/" className="page-btn">
      Back To Home
    </a>

    <a href="/" className="page-btn gold-btn">
      Contact Us
    </a>

  </div>

  <div className="contact-strip">

    <p>📞 +91 9449984473</p>

    <p>✉️ maharshiyashdeep@gmail.com</p>

  </div>

</div>


);
};

export default ProjectManagement;
