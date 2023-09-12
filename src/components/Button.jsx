import React from "react";

const Button = ({ title, onClick, pending }) => {
  return (
    <button
      className={
        "h-10 px-4 py-2 bg-secondary text-thirdly hover:bg-secondary/90 inline-flex items-center justify-center rounded-md text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      }
      onClick={onClick}
      disabled={pending}
    >
      {title}
    </button>
  );
};

export default Button;
