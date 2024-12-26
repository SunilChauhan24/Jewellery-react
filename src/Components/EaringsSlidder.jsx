import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import earing1 from "../Img/earings7.webp";
import earing2 from "../Img/earings4.avif";
import earing3 from "../Img/earings4.avif";
import earing4 from "../Img/earings5.webp";
import earing5 from "../Img/earings6.webp";
import earing6 from "../Img/earings7.webp";
import earing11 from "../Img/earings4.avif";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./EaringSlidder.css";

const EaringsSlidder = () => {
  const products = [
    {
      id: 1,
      name: "Gold Earings",
      href: "#",
      imageSrc: earing1,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹35000",
      color: "red",
    },
    {
      id: 2,
      name: "Silver Earings",
      href: "#",
      imageSrc: earing2,
      imageAlt: "Front of vintage jacket in denim.",
      price: "₹55000",
      color: "silver",
    },
    {
      id: 3,
      name: "Diamond Earings",
      href: "#",
      imageSrc: earing3,
      price: "₹67000",
      color: "White",
    },
    {
      id: 4,
      name: "Emerald Earings",
      href: "#",
      imageSrc: earing4,
      price: "₹44000",
      color: "White",
    },
    {
      id: 5,
      name: "Gold Earings",
      href: "#",
      imageSrc: earing5,
      price: "₹78000",
      color: "White",
    },
    {
      id: 6,
      name: "Silver Earings",
      href: "#",
      imageSrc: earing6,
      price: "₹45000",
      color: "White",
    },
    {
      id: 7,
      name: "Luxury Earings",
      href: "#",
      imageSrc: earing11,
      price: "₹3,50,000",
      color: "silver",
    },
  ];
  return (
    <div id="Project" className="projects-section1">
      <h2>Earings</h2><br /><br /><br />
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

export default EaringsSlidder;
