import React from "react";
import SimpleSlider from "../Cardslider/Cardslider";
import { useRef } from "react";
import "./Banner.css";
// import background from "../../assets/background.mp4";

//Home page banner component
const Banner = () => {
  const sliderRef = useRef();
  const nextSlide = (sliderRef) => {
    sliderRef.current.slickNext();
  };
  const prevSlide = (sliderRef) => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="banner-container">
      <div className="slider-button">
        <button
          onClick={() => prevSlide(sliderRef)}
          className="btn btn-primary slider-button-one"
        >
          {/* <img src={left_icon} alt="" /> */}
          Left
        </button>
        <button
          onClick={() => nextSlide(sliderRef)}
          className="btn btn-primary slider-button-two"
        >
          {/* <img src={right_icon} alt="" /> */}
          Right
        </button>
      </div>

      <div className="center">
        <h1 className="text-white">Center</h1>
      </div>

      <SimpleSlider sliderRef={sliderRef}></SimpleSlider>
    </div>
  );
};

export default Banner;
