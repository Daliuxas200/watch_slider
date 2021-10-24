import React from "react";

const Slide = ({ src, name, extraClass }) => {
  return (
    <img
      className={`slider__slide ${extraClass ? extraClass : ""}`}
      src={src}
      alt={name}
    />
  );
};

export default Slide;
