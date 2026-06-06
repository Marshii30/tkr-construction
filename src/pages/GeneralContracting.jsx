import React from "react";
import logo from "../assets/tkr-logo.png";
import heroImage from "../assets/general-contracting.jpg";

const GeneralContracting = () => {
return ( <div className="service-page">


  <img
    src={logo}
    alt="TKR Logo"
    className="service-logo"
  />

  <img
    src={heroImage}
    alt="General Contracting"
    className="service-hero"
  />

  <h1>General Contracting</h1>

  <p>
    At TKR Construction, our General Contracting services are designed to manage and execute construction projects from inception to completion. We take responsibility for planning, coordinating, supervising and delivering projects while ensuring quality, safety and efficiency throughout every stage of construction.

Our team works closely with architects, engineers, suppliers and clients to ensure seamless execution. Whether the project involves residential developments, commercial buildings, industrial facilities or renovation work, we provide a structured and transparent approach that keeps clients informed and confident throughout the process.

We oversee workforce management, procurement of construction materials, site supervision, scheduling, budgeting and quality control. Every project is monitored carefully to ensure deadlines are met without compromising workmanship or safety standards.

Through years of industry experience, TKR Construction has developed a reputation for delivering reliable and durable structures. We believe every successful project begins with detailed planning and ends with complete client satisfaction.

  </p>

  <p>
    Our role as a general contractor is to
    coordinate every aspect of a construction
    project including workforce management,
    procurement of materials, scheduling,
    budgeting and quality control. We work
    closely with clients, consultants and
    suppliers to ensure projects are completed
    on time and within budget.
  </p>

  <h2>Our Services</h2>

  <ul>
    <li>Residential Construction</li>
    <li>Commercial Buildings</li>
    <li>Apartment Developments</li>
    <li>Labor & Site Management</li>
    <li>Material Procurement</li>
    <li>Quality Assurance & Safety Monitoring</li>
  </ul>

  <h2>Why Choose TKR?</h2>

  <p>
    We combine industry experience, skilled
    professionals and modern construction
    techniques to deliver outstanding results.
    Our commitment to transparency, timely
    delivery and customer satisfaction has
    helped us earn the trust of clients across
    multiple construction sectors.
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

export default GeneralContracting;
