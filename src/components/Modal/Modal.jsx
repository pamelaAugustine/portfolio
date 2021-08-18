import React from "react";
import { Container } from "./style";

const Modal = ({ toggleModal, setToggleModal, caption, image }) => (
  <Container onClick={() => setToggleModal(false)} toggleModal={toggleModal}>
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
  </Container>
);

export default Modal;
