
import React from "react";
import { Link } from "react-scroll";
// import { Link, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";

function Navbar() {
  return (
      <nav className="navbar-sticky">
        <h1 className="portfolio-name">Portfolio</h1>
        <ul>
          <Link className="MenuItems">Home</Link>
          <Link className="MenuItems">About</Link>
          <Link className="MenuItems">Skills</Link>
          <Link className="MenuItems">Projects</Link>
          <Link className="MenuItems">Contact</Link>
        {/* <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li> */}

          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>

     
  );
}

export default Navbar;
