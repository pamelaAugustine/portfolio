import React, { useState } from "react";
import Links from "./Links";
import Skills from "./Skills";
import Tools from "./Tools";
import NavBar from "./NavBar/NavBar";

const Main = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  const onClick = (event) => {
    setToggleModal(true);
    setCaption(event.target.alt);
    setImage(event.target.currentSrc);
  };
  
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
      <div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">ABOUT ME</h3>

        <p className="w3-center">
          <em>I'M A BOSS!</em>
        </p>
        <p>
          We have created a fictional "personal" website/blog, and our fictional
          character is a hobby photographer. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="w3-row">
          <div className="w3-col m6 w3-center w3-padding-large">
            <p>
              <b>
                <i className="fas fa-user w3-margin-right"></i>Pamela Augustine
              </b>
            </p>
            <br />
            <img
              src="./assets/images/pamelaAugustine12.jpg"
              className="w3-round w3-image w3-opacity w3-hover-opacity-off"
              alt="portfolio"
              width="500"
              height="333"
            ></img>
          </div>

          <div className="w3-col m6 w3-hide-small w3-padding-large">
            <p>
              Welcome to my website. I am lorem ipsum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="bgimg-2 w3-display-container">
        <div className="w3-display-middle row">
          <span className="w3-center w3-xxlarge w3-text-white w3-padding-large w3-wide ">
            BOSS <span>SKILLS</span>{" "}
          </span>
        </div>
      </div>
      <Skills />
      <div className="w3-content w3-container w3-padding-64" id="portfolio">
        <h3 className="w3-center">MY WORK</h3>
        <p className="w3-center">
          <em>
            Here are some of my latest lorem work ipsum tipsum.
            <br /> Click on the images to make them bigger
          </em>
        </p>
        <br />

        <div className="w3-row-padding w3-center">
          <div className="w3-col m3">
            <img
              src="./assets/images/p1.jpg"
              style={{ width: 100 + "%" }}
              onClick={onClick}
              className="w3-hover-opacity"
              alt="The mist over the mountains"
            ></img>
          </div>

          <div className="w3-col m3">
            <img
              src="./assets/images/p2.jpg"
              style={{ width: 100 + "%" }}
              onClick={onClick}
              className="w3-hover-opacity"
              alt="Coffee beans"
            ></img>
          </div>

          <div className="w3-col m3">
            <img
              src="./assets/images/p3.jpg"
              style={{ width: 100 + "%" }}
              onClick={onClick}
              className="w3-hover-opacity"
              alt="Bear closeup"
            ></img>
          </div>

          <div className="w3-col m3">
            <img
              src="./assets/images/p4.jpg"
              style={{ width: 100 + "%" }}
              onClick={onClick}
              className="w3-hover-opacity"
              alt="Quiet ocean"
            ></img>
          </div>
        </div>

        <div className="w3-row-padding w3-center w3-section">
          <div className="w3-col m3">
            <img
              src="./assets/images/p5.jpg"
              style={{ width: 100 + "%" }}
              onClick={onClick}
              className="w3-hover-opacity"
              alt="The mist"
            ></img>
          </div>

          <div className="w3-col m3">
            <img
              src="./assets/images/p6.jpg"
              style={{ width: 100 + "%" }}
              onClick={onClick}
              className="w3-hover-opacity"
              alt="My beloved typewriter"
            ></img>
          </div>

          <div className="w3-col m3">
            <img
              src="./assets/images/p7.jpg"
              style={{ width: 100 + "%" }}
              onClick={onClick}
              className="w3-hover-opacity"
              alt="Empty ghost train"
            ></img>
          </div>

          <div className="w3-col m3">
            <img
              src="./assets/images/p8.jpg"
              style={{ width: 100 + "%" }}
              onClick={onClick}
              className="w3-hover-opacity"
              alt="Sailing"
            ></img>
          </div>
        </div>
      </div>
      {toggleModal && (
        <div
          className="project-modal w3-black"
          onClick={() => setToggleModal(false)}
        >
          <span
            className="w3-button w3-large w3-black w3-display-topright"
            title="Close Modal Image"
          >
            <i className="fas fa-remove"></i>
          </span>
          <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
            <img src={image} className="w3-image" alt={caption}></img>
            <p className="w3-opacity w3-large">{caption}</p>
          </div>
        </div>
      )}
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
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            title="W3.CSS"
            target="_blank"
            className="w3-hover-text-green"
            rel="noreferrer"
          >
            w3.css
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Main;
