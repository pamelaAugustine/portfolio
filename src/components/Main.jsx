import React from "react";

const Main = () => {
  const toggleFunction = () => {
    console.log("clicked");
  };
  const onClick = () => {
    console.log("this was clicked!");
  };
  return (
    <div>
      <div className="w3-top">
        <div className="w3-bar" id="myNavbar">
          <div
            className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
            onClick={toggleFunction}
            title="Toggle Navigation Menu"
          >
            <i className="fas fa-bars"></i>
          </div>
          <a href="#home" className="w3-bar-item w3-button">
            HOME
          </a>
          <a href="#about" className="w3-bar-item w3-button w3-hide-small">
            <i className="fas fa-user"></i> ABOUT
          </a>
          <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small">
            <i className="fas fa-th"></i> PORTFOLIO
          </a>
          <a href="#contact" className="w3-bar-item w3-button w3-hide-small">
            <i className="fas fa-envelope"></i> CONTACT
          </a>
          <div className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
            <i className="fas fa-search"></i>
          </div>
        </div>

        <div
          id="navDemo"
          className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium"
        >
          <a
            href="#about"
            className="w3-bar-item w3-button"
            onClick={toggleFunction}
          >
            ABOUT
          </a>
          <a
            href="#portfolio"
            className="w3-bar-item w3-button"
            onClick={toggleFunction}
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button"
            onClick={toggleFunction}
          >
            CONTACT
          </a>
          <div className="w3-bar-item w3-button">SEARCH</div>
        </div>
      </div>

      <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
        <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
            PAMELA <span className="w3-hide-small">AUGUSTINE</span>{" "}
          </span>
        </div>
      </div>

      <div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">ABOUT ME</h3>
        <p className="w3-center">
          <em>I love photography</em>
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
        <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
        <p className="w3-wide">
          <i className="fas fa-camera"></i>Photography
        </p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-padding-small w3-dark-grey w3-center"
            style={{ width: 90 + "%" }}
          >
            90%
          </div>
        </div>
        <p className="w3-wide">
          <i className="fas fa-laptop"></i>Web Design
        </p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-padding-small w3-dark-grey w3-center"
            style={{ width: 85 + "%" }}
          >
            85%
          </div>
        </div>
        <p className="w3-wide">
          <i className="fas fa-photo"></i>Photoshop
        </p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-padding-small w3-dark-grey w3-center"
            style={{ width: 75 + "%" }}
          >
            75%
          </div>
        </div>
      </div>

      <div className="w3-row w3-center w3-dark-grey w3-padding-16">
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">14+</span>
          <br />
          Partners
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">55+</span>
          <br />
          Projects Done
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">89+</span>
          <br />
          Happy Clients
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">150+</span>
          <br />
          Meetings
        </div>
      </div>

      <div className="bgimg-2 w3-display-container">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
        </div>
      </div>

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
          <button
            className="w3-button w3-padding-large w3-light-grey"
            style={{ marginTtop: 64 + "px" }}
          >
            LOAD MORE
          </button>
        </div>
      </div>

      <div id="modal01" className="w3-modal w3-black" onClick={onClick}>
        <span
          className="w3-button w3-large w3-black w3-display-topright"
          title="Close Modal Image"
        >
          <i className="fas fa-remove"></i>
        </span>
        <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
          <img
            id="img01"
            className="w3-image"
            alt="another more meaningful text"
          ></img>
          <p id="caption" className="w3-opacity w3-large"></p>
        </div>
      </div>

      <div className="bgimg-3 w3-display-container w3-opacity-min">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
        </div>
      </div>

      <div className="w3-content w3-container w3-padding-64" id="contact">
        <h3 className="w3-center">WHERE I WORK</h3>
        <p className="w3-center">
          <em>I'd love your feedback!</em>
        </p>

        <div className="w3-row w3-padding-32 w3-section">
          <div className="w3-col m4 w3-container">
            <img
              src="./assets/images/map.jpg"
              className="w3-image w3-round"
              style={{ width: 100 + "%" }}
              alt="meaningful text"
            ></img>
          </div>
          <div className="w3-col m8 w3-panel">
            <div className="w3-large w3-margin-bottom">
              <i className="fas fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>{" "}
              Tucson, AZ
              <br />
              <i className="fas fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>{" "}
              Phone: 520.965.5721
              <br />
              <i className="fas fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>{" "}
              Email: pamela.augustine11@gmail.com
              <br />
            </div>
            <p>Leave me a note:</p>
            <form target="_blank">
              <div className="w3-row-padding">
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeHolder="Name"
                    required
                    name="Name"
                  ></input>
                </div>
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeHolder="Email"
                    required
                    name="Email"
                  ></input>
                </div>
              </div>
              <br />
              <input
                className="w3-input w3-border"
                type="text"
                placeHolder="Message"
                required
                name="Message"
              ></input>
              <button
                className="w3-button w3-black w3-right w3-section"
                type="submit"
              >
                <i className="fas fa-paper-plane"></i> SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

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
