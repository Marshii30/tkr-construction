import React, { useState } from "react";

const Trust = () => {

  const [active, setActive] = useState(null);

  const trustItems = [
    {
      title: "20+ Years Construction Experience",
      description:
        "Over two decades of experience in residential, commercial and premium construction projects, delivering quality workmanship, durable structures and trusted service."
    },

    {
      title: "Licensed & Certified Team",
      description:
        "Our engineers, architects and site professionals follow industry standards and best construction practices to ensure every project meets the highest quality requirements."
    },

    {
      title: "On Time Delivery",
      description:
        "Through proper planning, resource management and project monitoring, we consistently complete projects within agreed timelines while maintaining superior quality."
    }
  ];

  return (
    <section className="trust-section">

      <h2>
        Why Businesses Trust TKR Construction?
      </h2>

      <p className="trust-subtitle">
        We focus on quality, reliability, transparency
        and delivering projects that exceed expectations.
      </p>

      <div className="trust-container">

        {trustItems.map((item, index) => (

          <div
            key={index}
            className={`trust-card ${
              active === index ? "active" : ""
            }`}
            onClick={() =>
              setActive(
                active === index ? null : index
              )
            }
          >

            <div className="trust-title">

              {item.title}

              <span>
                {active === index ? "−" : "+"}
              </span>

            </div>

            <div
              className={`trust-description ${
                active === index ? "show" : ""
              }`}
            >
              <p>{item.description}</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Trust;