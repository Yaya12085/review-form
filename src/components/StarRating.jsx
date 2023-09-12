import React, { useState } from "react";
import useStore from "../store";

const StarRating = ({ name }) => {
  const { setRating, rating } = useStore();

  const [hoveredStar, setHoveredStar] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    setRating(name, selectedRating);
  };

  const handleStarHover = (hoveredRating) => {
    setHoveredStar(hoveredRating);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  const renderStarIcon = (index) => {
    const isFilled = index <= rating[name] || index <= hoveredStar;

    return (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 hover:text-[#ffc94d]"
        fill={isFilled ? "#ffc94d" : "#e1deda"}
        viewBox="0 0 10 16"
        stroke="currentColor"
        onClick={() => handleStarClick(index)}
        onMouseEnter={() => handleStarHover(index)}
        onMouseLeave={handleMouseLeave}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0"
          d="M5.293 13.543l-4.13 2.014a1 1 0 01-1.451-1.057l.79-4.337-3.342-3.058a1 1 0 01.554-1.705l4.373-.634 1.952-3.968a1 1 0 011.79 0l1.952 3.968 4.373.634a1 1 0 01.554 1.705l-3.342 3.058.79 4.337a1 1 0 01-1.451 1.057l-4.13-2.014z"
        />
      </svg>
    );
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className="cursor-pointer  mr-2">
          {renderStarIcon(star)}
        </div>
      ))}
      <div className="ml-2">
        <span className="text-gray-600">{rating[name]}</span>
      </div>
    </div>
  );
};

export default StarRating;
