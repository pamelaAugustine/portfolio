import React from "react";


const Modal = ({
  toggleModal,
  setToggleModal,
  caption,
  setCaption,
  image,
  setImage,
}) => (
  <div>
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
  </div>
);

export default Modal;
