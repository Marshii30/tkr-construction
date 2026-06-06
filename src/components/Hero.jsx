import React from "react";
import { FaArrowRight } from "react-icons/fa";
import sachin from "../assets/sachin.png";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <h1>
          CRAFTING
          STRUCTURES
          THAT LAST
          GENERATIONS
        </h1>

        <p>
          Creating modern structures with innovation,
          quality and timeless construction excellence.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="start-btn">
            Start Project
            <FaArrowRight />
          </a>

          <a href="#contact" className="consult-btn">
            Get Consultation
          </a>

        </div>

        <div className="hero-stats">

          <div>
            <h2>10+</h2>
            <span>Projects Completed</span>
          </div>

          <div>
            <h2>50+</h2>
            <span>Professionals</span>
          </div>

        </div>

      </div>

      <div className="hero-right">
        <img src={sachin} alt="Sachin" />
      </div>

    </section>
  );
};

export default Hero;