import React from "react";
import "../Styles/Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function AppartImages({ img }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === img.length - 1) setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(img.length - 1);
  };

  return (
    <div
      style={{ backgroundImage: `url(${img[currentIndex]})` }}
      className="carousel"
    >
      {img.length > 1 && (
        <>
          <div
            className="right_arrow"
            alt="Montre l'image suivante"
            onClick={nextSlide}
          >
            <FontAwesomeIcon icon={faChevronRight} className="rightArrow" />
          </div>
          <div
            className="left_arrow"
            alt="Montre l'image précédente"
            onClick={prevSlide}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="leftArrow" />
          </div>
          <p className="indexCount">
            {currentIndex + 1} / {img.length}
          </p>
        </>
      )}
    </div>
  );
}

export default AppartImages;
