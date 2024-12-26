import React from "react";
import { Carousel } from "react-bootstrap";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCogs } from "react-icons/fa";
import "./Slidder.css";
import img1 from "../Img/Rectangle.png";
import img2 from "../Img/Rectangle1.png";
import img3 from "../Img/Rectangle2.png";

const Slidder = () => {
  return (
    <div>
      {/* Slider Section */}
      <div className="slider-container">
        <Carousel interval={1000}>
          <Carousel.Item>
            <div className="carousel-content">
              <div className="text-overlay">
                <h2>Jewellery</h2>
                <p>Earings</p>
                <p>Collection</p>
                <button className="shop-now-btn">Shop Now</button>
              </div>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <div className="text-overlay">
                <h2>Jewellery</h2>
                <p>Necklace</p>
                <p>Collection</p>
                <button className="shop-now-btn">Shop Now</button>
              </div>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-content">
              <div className="text-overlay">
                <h2>Jewellery</h2>
                <p>Rings</p>
                <h3>Collection</h3>
                <button className="shop-now-btn">Shop Now</button>
              </div>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Text and Icon Section */}
      <div className="info-section">
        <div className="info-item">
          <MdOutlineLocalShipping size={24} color="#374151" />
          <span>Free Shipping</span>
        </div>
        <div className="info-item">
          <CiHeart size={24} color="#374151" />
          <span>92.2 Sterling Silver</span>
        </div>
        <div className="info-item">
          <FaCogs size={24} color="#374151" />
          <span>Handcrafted</span>
        </div>
      </div>
    </div>
  );
};

export default Slidder;
