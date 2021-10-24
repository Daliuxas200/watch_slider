import React from "react";
import Slide from "./Slide";

const SliderLayer = ({ slides, layerClass, activeSlide, isActive }) => {
  const chooseClass = (i) => {
    let extraClass = "";
    if (i === activeSlide) {
      extraClass = "slider__slide--current";
    } else if (
      isActive &&
      (i - activeSlide === 1 || (activeSlide === slides.length - 1 && i === 0))
    ) {
      extraClass = "slider__slide--next";
    } else if (
      isActive &&
      (i - activeSlide === -1 || (activeSlide === 0 && i === slides.length - 1))
    ) {
      extraClass = "slider__slide--previous";
    }
    return extraClass;
  };

  const formattedSlides = slides.map((slide, i) => {
    return (
      <Slide
        key={slide.name}
        name={slide.name}
        src={slide.src}
        extraClass={chooseClass(i)}
      />
    );
  });

  return <div className={`slider__layer ${layerClass}`}>{formattedSlides}</div>;
};

export default SliderLayer;
