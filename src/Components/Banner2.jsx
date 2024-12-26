import React from "react";
import necklaceImg from "../Img/neklace8.avif"; // Replace with actual image path
import ringsImg from "../Img/ring.avif"; // Replace with actual image path
import braceletsImg from "../Img/heart1.webp"; // Replace with actual image path
import { FaArrowRight } from "react-icons/fa"; // Install react-icons if not already
import "./Banner2.css";

const Banner2 = () => {
  return (
    <div className="perfect-pairing-container">
      <div className="heading-section">
        <h2>The Perfect Pairing</h2>
        <p>PAIR UP OUR STATEMENT PIECES TO CREATE A UNIQUE LOOK</p>
      </div>
      <div className="images-section">
        <div className="left-image">
          <img src={necklaceImg} alt="Necklaces" />
          <div className="overlay">
            <p>Necklaces</p>
            <FaArrowRight />
          </div>
        </div>
        <div className="right-images">
          <div className="top-right-image">
            <img src={ringsImg} alt="Rings" />
            <div className="overlay">
              <p>Rings</p>
              <FaArrowRight />
            </div>
          </div>
          <div className="bottom-right-image">
            <img src={braceletsImg} alt="Bracelets" />
            <div className="overlay">
              <p>Bracelets</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
