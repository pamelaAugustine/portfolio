import React from "react";
import {Container} from './style'

const NavBar = ({ toggle, setToggle }) => (
  <Container>
    <div className="w3-bar" id="myNavbar">
      <a href="#home" className="w3-bar-item w3-button">
        HOME
      </a>
      <a href="#about" className="w3-bar-item w3-button w3-hide-small">
        <i className="fas fa-user"></i> ABOUT
      </a>
      <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small">
        <i className="fas fa-th"></i> PORTFOLIO
      </a>
      <a href="#tools" className="w3-bar-item w3-button w3-hide-small">
        <i className="fas fa-tools"></i> TOOLS
      </a>
    </div>
    <div
      className={
        toggle
          ? "w3-bar-block w3-white w3-hide-large w3-hide-medium dropdown"
          : "w3-hide"
      }
    >
      <a
        href="#home"
        className="w3-bar-item w3-button"
        onClick={() => setToggle(!toggle)}
      >
        HOME
      </a>
      <a
        href="#about"
        className="w3-bar-item w3-button"
        onClick={() => setToggle(!toggle)}
      >
        ABOUT
      </a>
      <a
        href="#portfolio"
        className="w3-bar-item w3-button"
        onClick={() => setToggle(!toggle)}
      >
        PORTFOLIO
      </a>
      <a
        href="#tools"
        className="w3-bar-item w3-button"
        onClick={() => setToggle(!toggle)}
      >
        TOOLS
      </a>
    </div>
    </Container>
);

export default NavBar;
