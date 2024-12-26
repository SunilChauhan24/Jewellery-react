import React from "react";
import rings from "../Img/rings3.jpg";
import rings1 from "../Img/rings4.jpg";
import './Banner3.css';

const Banner3 = () => {
  return (
    <div className="banner-container">
      {/* Add Image Directly */}
      <img src={rings} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner3;
