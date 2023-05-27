import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StarsRating({ rating }) {
  const maxRating = 5;

  const renderStars = () => {
    const filledStars = Math.floor(rating);
    const emptyStars = maxRating - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="filled-rating-star"
          style={{ color: "#FF6060" }}
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i + filledStars}
          icon={faStar}
          className="empty-rating-star"
          style={{ color: "#E3E3E3" }}
        />
      );
    }

    return stars;
  };

  return <div className="StarsRating">{renderStars()}</div>;
}

export default StarsRating;
