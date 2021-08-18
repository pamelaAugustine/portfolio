import React, { useState } from "react";
import Links from "./Links";
import Skills from "./Skills";
import Tools from "./Tools";
import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import Work from './Work/Work'
//import Modal from "./Modal/Modal";

const Main = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div>
      <div
        className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large on-top"
        onClick={() => setToggle(!toggle)}
        title="Toggle Navigation Menu"
      >
        <i className="fas fa-bars"></i>
      </div>
      <NavBar toggle={toggle} setToggle={(boolean) => setToggle(boolean)} />

      <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
        <div className="w3-display-middle row">
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
            PAMELA <span>AUGUSTINE</span>{" "}
          </span>
        </div>
      </div>
      <Links />
      <AboutMe />

      <div className="bgimg-2 w3-display-container">
        <div className="w3-display-middle row">
          <span className="w3-center w3-xxlarge w3-text-white w3-padding-large w3-wide ">
            BOSS <span>SKILLS</span>{" "}
          </span>
        </div>
      </div>
      <Skills />
      
      <Work />
      <div className="bgimg-3 w3-display-container w3-opacity-min">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">TOOLS</span>
        </div>
      </div>
      <Tools />

      <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
        <a href="#home" className="w3-button w3-light-grey">
          <i className="fas fa-arrow-up w3-margin-right"></i>To the top
        </a>
        <div className="w3-xlarge w3-section">
          <i className="fas fa-facebook-official w3-hover-opacity"></i>
          <i className="fas fa-instagram w3-hover-opacity"></i>
          <i className="fas fa-snapchat w3-hover-opacity"></i>
          <i className="fas fa-pinterest-p w3-hover-opacity"></i>
          <i className="fas fa-twitter w3-hover-opacity"></i>
          <i className="fas fa-linkedin w3-hover-opacity"></i>
        </div>
        <p>
         By Pamela Augustine 2021
        </p>
        {/* Special thanks to W3Schools */}
      </footer>
    </div>
  );
};

export default Main;
