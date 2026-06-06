import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

  const handleSearch = () => {

    const searchTerm = prompt(
      "Search: Home, About, Services, Projects, Contact"
    );

    if (!searchTerm) return;

    const term = searchTerm.toLowerCase();

    if (term.includes("home")) {
      document
        .getElementById("home")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }

    else if (term.includes("about")) {
      document
        .getElementById("about")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }

    else if (term.includes("service")) {
      document
        .getElementById("services")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }

    else if (term.includes("project")) {
      document
        .getElementById("projects")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }

    else if (term.includes("contact")) {
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }

  };

  return (
    <nav className="navbar">

      <div className="logo">
        <img
          src="/src/assets/tkr-logo.png"
          alt=""
        />
      </div>

      <ul className="nav-links">

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#services">Services</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="nav-right">

        <FaSearch
          className="search-icon"
          onClick={handleSearch}
        />

        <a
          href="#footer"
          className="contact-nav-btn"
        >
          Contact
        </a>

      </div>

    </nav>
  );
};

export default Navbar;