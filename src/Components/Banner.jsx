import React from "react";
import "./Banner.css"; // Add your CSS styles
import banner from "../Img/Banner1.png";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Add Image Directly */}
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <div className="text-content">
          <h4>THE NEW</h4>
          <h1>
            THE UNIQUE MAKE THAT FITS <br /> YOUR STYLE
          </h1>
          <p>Always look for in a world-class diamond!</p>
          <button className="explore-button">EXPLORE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
