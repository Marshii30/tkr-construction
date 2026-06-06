import React from "react";
import logo from "../assets/tkr-logo.png";
import heroImage from "../assets/design-build.jpg";

const DesignBuild = () => {
return ( <div className="service-page">


  <img
    src={logo}
    alt="TKR Logo"
    className="service-logo"
  />

  <img
    src={heroImage}
    alt="Design Build"
    className="service-hero"
  />

  <h1>Design & Build</h1>

  <p>
    Our Design & Build service provides clients
    with a complete construction solution under
    one roof. Instead of managing multiple
    consultants, architects and contractors,
    clients work directly with one integrated
    team from concept to completion.
  </p>

  <p>
    This streamlined approach improves
    communication, reduces delays and allows
    better control over budgets and schedules.
    Our experts collaborate closely throughout
    every stage to transform ideas into
    functional, aesthetically appealing and
    durable structures.The Design & Build approach combines design, planning and construction into one integrated service. Instead of coordinating multiple consultants and contractors, clients work with a single dedicated team responsible for transforming concepts into reality.

At TKR Construction, we guide projects from initial brainstorming sessions and conceptual sketches to detailed engineering and final construction. This streamlined process improves communication, reduces delays and ensures greater consistency throughout the project lifecycle.

Our experts provide architectural planning, structural design, interior concepts, space optimization and construction execution under one roof. By integrating these services, we can identify potential challenges early, optimize costs and accelerate project delivery.

The result is a smoother construction experience, reduced administrative burden and a final product that reflects the client’s vision while meeting modern standards of functionality, aesthetics and sustainability.

  </p>

  <h2>What We Offer</h2>

  <ul>
    <li>Architectural Design</li>
    <li>Structural Planning</li>
    <li>3D Visualization</li>
    <li>Interior Design Solutions</li>
    <li>Construction Execution</li>
    <li>Turnkey Project Delivery</li>
  </ul>

  <h2>Benefits of Design & Build</h2>

  <p>
    By combining design and construction
    responsibilities within a single team,
    clients enjoy improved coordination,
    faster project completion and reduced
    overall costs. This method also minimizes
    risks caused by communication gaps between
    separate service providers.
  </p>

  <div className="page-buttons">

    <a href="/" className="page-btn">
      Back To Home
    </a>

    <a href="/#contact" className="page-btn gold-btn">
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

export default DesignBuild;
