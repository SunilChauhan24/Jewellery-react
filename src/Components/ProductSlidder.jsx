import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import neck1 from "../Img/neklace5.avif";
import neck2 from "../Img/neklace6.avif";
import neck3 from "../Img/neklace7.avif";
import neck4 from "../Img/neklace8.avif";
import neck5 from "../Img/neklace88.avif";
import neck6 from "../Img/neklace3.avif";
import neck7 from "../Img/necklaces.avif";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./ProductSlidder.css";

const ProductSlidder = () => {
  const products = [
    {
      id: 1,
      name: "Gold Earings",
      href: "#",
      imageSrc: neck1,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹35000",
      color: "red",
    },
    {
      id: 2,
      name: "Silver Earings",
      href: "#",
      imageSrc: neck2,
      imageAlt: "Front of vintage jacket in denim.",
      price: "₹55000",
      color: "silver",
    },
    {
      id: 3,
      name: "Diamond Earings",
      href: "#",
      imageSrc: neck3,
      price: "₹67000",
      color: "White",
    },
    {
      id: 4,
      name: "Emerald Earings",
      href: "#",
      imageSrc: neck4,
      price: "₹44000",
      color: "White",
    },
    {
      id: 5,
      name: "Gold Earings",
      href: "#",
      imageSrc: neck5,
      price: "₹78000",
      color: "White",
    },
    {
      id: 6,
      name: "Silver Earings",
      href: "#",
      imageSrc: neck6,
      price: "₹45000",
      color: "White",
    },
    {
      id: 7,
      name: "Luxury Earings",
      href: "#",
      imageSrc: neck7,
      price: "₹3,50,000",
      color: "silver",
    },
  ];
  return (
    <div id="Project" className="projects-section2">
      <h2>Necklaces</h2><br /><br /><br />
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation
        loop
        speed={3000}
        autoplay={{
          delay: 0, // Continuous autoplay
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {products.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              {image.link ? (
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <img src={image.imageSrc} alt={image.alt} />
                </a>
              ) : (
                <img src={image.imageSrc} alt={image.alt} />
              )}
              <h3>
                {image.name} {image.price}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlidder;
