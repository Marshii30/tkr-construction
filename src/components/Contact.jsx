import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xzqyeni",
        "template_adj91dz",
        form.current,
        "xmOKtDz2Ugk4LaTL8"
      )
      .then((result) => {
        console.log("SUCCESS:", result);

        alert(
          "Thank you! Your inquiry has been sent successfully."
        );

        form.current.reset();
      })
      .catch((error) => {
        console.log("EMAILJS ERROR:", error);

        alert(
          "Something went wrong. Please try again."
        );
      });
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-left">

        <h2>
          Let's Build Something
          Great Together
        </h2>

        <p>
          Have a project in mind?
          Contact our team today and
          let's discuss your construction needs.
        </p>

        <div style={{ marginTop: "25px" }}>
          <p style={{ color: "#d7d7d7" }}>
            📞 +91 9449984473
          </p>

          <p style={{ color: "#d7d7d7" }}>
            ✉️ maharshiyashdeep@gmail.com
          </p>
        </div>

      </div>

      <div className="contact-right">

        <form ref={form} onSubmit={sendEmail}>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="user_phone"
            placeholder="Phone Number"
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your project..."
            required
          />

          <button type="submit">
            Start Your Project
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;