import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Trust from "./components/Trust";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import GeneralContracting from "./pages/GeneralContracting";
import DesignBuild from "./pages/DesignBuild";
import ProjectManagement from "./pages/ProjectManagement";

import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Trust />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route
          path="/general-contracting"
          element={<GeneralContracting />}
        />

        <Route
          path="/design-build"
          element={<DesignBuild />}
        />

        <Route
          path="/project-management"
          element={<ProjectManagement />}
        />

        <Route
          path="/project1"
          element={<Project1 />}
        />

        <Route
          path="/project2"
          element={<Project2 />}
        />

        <Route
          path="/project3"
          element={<Project3 />}
        />

        <Route
          path="/project4"
          element={<Project4 />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;