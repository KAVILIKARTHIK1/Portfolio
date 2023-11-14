import React from "react";
import '../App.css';
function Navbar(){
    return (
      <nav className="navbar-sticky">
        <h1 className="portfolio-name">Portfolio</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
}
export default Navbar;