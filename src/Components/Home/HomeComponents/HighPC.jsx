import React, { useState } from "react";
import "./HighPC.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import warning from '../../../images/Warning.svg'

const HighPC = () => {
  const images = [
    require("../../../images/Web/image 1.png"),
    require("../../../images/Web/image 2.png"),
    require("../../../images/Web/image 3.png"),
    require("../../../images/Web/image 4.png"),
    require("../../../images/Web/image 1.png"),
    require("../../../images/Web/image 2.png"),
    require("../../../images/Web/image 3.png"),
    require("../../../images/Web/image 4.png"),
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1
    );
  };

  const visibleImages = images.slice(
    currentIndex,
    currentIndex + 4 >= images.length ? undefined : currentIndex + 4
  );
  return (
    <div className="highPC">
      <div className="image">
        <img src={warning} alt="" />
        {/* <img src={process.env.PUBLIC_URL + "Warning.svg"} alt="warning" /> */}
      </div>
      <div className="carousel">
        <h1>High Paying Companies</h1>
        <div className="slider">
          <button onClick={goToPreviousSlide}>
            <FaArrowLeft />
          </button>
          <div className="image-row">
            {visibleImages.map((image, index) => (
              <div className="imgBox" key={index}>
                <img src={image} alt={`Slide ${index}`} className="images" />
              </div>
            ))}
          </div>
          <button onClick={goToNextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighPC;
