import React from "react";
import { Container } from "./style";

const AboutMe = () => (
  <Container>
    <div id="about">
      <h3 className="w3-center">ABOUT ME</h3>

      <p className="w3-center">
        <em>I'M A BOSS!</em>
      </p>
      <p>
        We have created a fictional "personal" website/blog, and our fictional
        character is a hobby photographer. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            Welcome to my website. I am lorem ipsum consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default AboutMe;
