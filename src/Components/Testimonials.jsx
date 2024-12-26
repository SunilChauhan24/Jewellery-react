import React, { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Making customers believe what they are investing in is the biggest concern nowadays, and we purchase pretty often from Forher store, because they make sure that their customers get the best of it. I recommend everyone out there to check their collection once. We did like that and I am pretty much sure you guys would like that too. ForHer awaiting for much such collections.",
      rating: [1, 1, 1, 1, 0], // 4 stars and 1 empty star
      author: "JITESH GULGULIA",
    },
    {
      text: "Great collection and amazing service! Every time I shop from Forher store, I get the best deals and the customer service is on point. Highly recommend it to anyone who is looking for quality products.",
      rating: [1, 1, 1, 1, 1], // 5 stars
      author: "NEHA SHARMA",
    },
    {
      text: "The shopping experience at Forher is always smooth. The products are top-notch, and the delivery is always on time. Keep up the great work, Forher!",
      rating: [1, 1, 1, 0, 0], // 3 stars
      author: "RAVI KUMAR",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="testimonial-content">
        <button className="nav-button" onClick={handlePrev}>
          {"<"}
        </button>
        <div className="testimonial-text">
          <p>{testimonials[currentIndex].text}</p>
          <div className="testimonial-rating">
            {testimonials[currentIndex].rating.map((star, index) => (
              <span key={index}>{star ? "★" : "☆"}</span>
            ))}
          </div>
          <p className="testimonial-author">
            {testimonials[currentIndex].author}
          </p>
        </div>
        <button className="nav-button" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
