import React, { useState } from "react";

const Slider = () => {
  const images = [
    "https://xsquaretec.com/wp-content/uploads/2023/06/theme4-840x630-1.jpg.webp",
    "https://xsquaretec.com/wp-content/uploads/2023/06/h3-gallery1.jpg.webp",
    "https://xsquaretec.com/wp-content/uploads/2023/06/theme4-840x630-1.jpg.webp",
    "https://xsquaretec.com/wp-content/uploads/2023/06/h2-blog1-840x630-1.jpg.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }
  return (
    <div className="slider-container" style={{ position: "relative", width: "640px", height:"500px",  border: "1px solid black",   margin: "auto" }}>
      <img
        src={images[currentIndex]}
        alt="slider"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
