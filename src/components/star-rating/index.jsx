import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = () => {
  const [rating, setRating] = useState(0); // Permanent stars
  const [hoverIndex, setHoverIndex] = useState(null); // Temporary stars

  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={
            i < (hoverIndex !== null ? hoverIndex + 1 : rating)
              ? "active"
              : "inactive"
          }
          onMouseEnter={() => setHoverIndex(i)} // Start hovering
          onMouseLeave={() => setHoverIndex(null)} // Stop hovering
          onClick={() => setRating(i + 1)} // Permanent click
        />
      ))}
    </div>
  );
};

export default StarRating;
