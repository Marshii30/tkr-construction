import React, { useEffect } from "react";
import logo from "../assets/tkr-logo.png";

import construction1 from "../assets/project1-construction1.jpeg";
import construction2 from "../assets/project1-construction2.jpg";

import design1 from "../assets/project1-design1.jpeg";
import design2 from "../assets/project1-design2.jpeg";

const Project1 = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
return ( <div className="project-details-page">


  <div className="project-header">

    <img
      src={logo}
      alt="TKR Logo"
      className="project-logo"
    />

    <h1>Dilip Maharaj Residence</h1>

  </div>

  <div className="project-layout">

    <div className="project-info">

      <h2>Project Details</h2>

      <p><strong>Client:</strong> Dilip Maharaj</p>

      <p><strong>Location:</strong> Ballari, Fort Area</p>

      <p><strong>Area:</strong> 1000 sq.ft</p>

      <p><strong>Floors:</strong> G + 1</p>

      <p><strong>Package:</strong> Premium Package</p>

      <p><strong>Contract:</strong> Cost Plus Contract</p>

      <p><strong>Status:</strong> Completed</p>

    </div>

    <div className="project-gallery">

      <h2>Construction Images</h2>

      <div className="gallery-grid">

        <img src={construction1} alt="" />

        <img src={construction2} alt="" />

      </div>

      <h2 style={{ marginTop: "50px" }}>
        Design Images
      </h2>

      <div className="gallery-grid">

        <img src={design1} alt="" />

        <img src={design2} alt="" />

      </div>

    </div>

  </div>

  <div className="project-buttons">

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

export default Project1;
