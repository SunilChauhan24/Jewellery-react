import React from "react";
import "./Earings.css"; // Add styles in a separate CSS file
import img1 from "../Img/goldbracelet.avif";
import img2 from "../Img/necklaces.avif";
import img3 from "../Img/earings7.webp";
const Earings = () => {
  const images = [
    {
      src: img1,
      alt: "Chain Bracelets",
      title: "Chain Bracelets",
      products: "6 Products",
    },
    {
      src: img2,
      alt: "Earrings",
      title: "Earrings",
      products: "9 Products",
    },
    {
      src: img3,
      alt: "Necklaces",
      title: "Necklaces",
      products: "7 Products",
    },
  ];

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img src={image.src} alt={image.alt} />
          <div className="image-info">
            <h4>{image.title}</h4>
            <p>{image.products}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Earings;
