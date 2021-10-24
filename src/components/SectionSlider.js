import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import SliderLayer from "./SliderLayer";

const SectionSlider = () => {
  const slides = {
    topSlides: [
      {
        name: "Black",
        src: "/wblack.png",
      },
      {
        name: "Blue",
        src: "/wblue.png",
      },
      {
        name: "Green",
        src: "/wgreen.png",
      },
      {
        name: "Pink Gold",
        src: "/wpinkgold.png",
      },
      {
        name: "Titanium",
        src: "/wtitanium.png",
      },
    ],
    bottomSlides: [
      {
        name: "Black",
        src: "/bblack.png",
      },
      {
        name: "Blue",
        src: "/bblue.png",
      },
      {
        name: "Green",
        src: "/bgreen.png",
      },
      {
        name: "Pink Gold",
        src: "/bwhite.png",
      },
    ],
  };

  const [activeTopSlide, setActiveTopSlide] = useState(0);
  const [activeBottomSlide, setActiveBottomSlide] = useState(0);
  const [activeLayer, setActiveLayer] = useState(true);

  const toggleLayer = (layerStatus) => {
    if (layerStatus !== activeLayer) {
      setActiveLayer(layerStatus);
    }
  };

  const changeSlide = (increment) => {
    if (activeLayer) {
      let actTopSlide = activeTopSlide + increment;
      if (actTopSlide > slides.topSlides.length - 1) actTopSlide = 0;
      if (actTopSlide < 0) actTopSlide = slides.topSlides.length - 1;
      setActiveTopSlide(actTopSlide);
    } else {
      let actBottomSlide = activeBottomSlide + increment;
      if (actBottomSlide > slides.bottomSlides.length - 1) actBottomSlide = 0;
      if (actBottomSlide < 0) actBottomSlide = slides.bottomSlides.length - 1;
      setActiveBottomSlide(actBottomSlide);
    }
  };

  return (
    <section className="section-slider">
      <div className="section-slider__inner">
        <header className="section-slider__header">
          <div className="section-slider__header__title-box">
            <h4 className="section-slider__header__title">
              TELTOHEART WATCH 1
            </h4>
            <h5 className="section-slider__header__subtitle">Jau greitai</h5>
          </div>
          <button className="button-medium">DALINTIS DIZAINU</button>
        </header>
        <div className="slider">
          <BsChevronLeft
            className="slider__nav slider_nav--left"
            onClick={() => changeSlide(-1)}
          />
          <SliderLayer
            slides={slides.topSlides}
            activeSlide={activeTopSlide}
            layerClass="slider__layer--top"
            isActive={activeLayer}
          />
          <SliderLayer
            slides={slides.bottomSlides}
            activeSlide={activeBottomSlide}
            layerClass="slider__layer--bottom"
            isActive={!activeLayer}
          />
          <BsChevronRight
            className="slider__nav slider_nav--right"
            onClick={() => changeSlide(+1)}
          />
        </div>
        <p className="slider__info">
          40 mm {slides.topSlides[activeTopSlide].name} TetoHeart Watch1 with{" "}
          {slides.topSlides[activeBottomSlide].name} bracelet
        </p>
        <div className="slider__buttons">
          <button
            onClick={() => toggleLayer(true)}
            className={`button-small ${activeLayer ? "active" : ""}`}
          >
            Korpusas
          </button>
          <button
            onClick={() => toggleLayer(false)}
            className={`button-small ${!activeLayer ? "active" : ""}`}
          >
            Apyrankė
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionSlider;
