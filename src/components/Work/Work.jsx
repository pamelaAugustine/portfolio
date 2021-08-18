import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Work = () => {
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
              src="./assets/images/heatMap.png"
              style={{ width: 100 + "%" }}
              onClick={onClick}
              className="w3-hover-opacity"
              alt="Heat Map created using D3"
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

      <Modal
        toggleModal={toggleModal}
        setToggleModal={(boolean) => setToggleModal(boolean)}
        caption={caption}
        setCaption={(boolean) => setCaption(boolean)}
        image={image}
        setImage={(boolean) => setImage(boolean)}
      />
    </div>
  );
};

export default Work;
