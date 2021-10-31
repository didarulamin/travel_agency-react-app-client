import React, { useEffect } from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
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
          className=" btn btn-outline-info border-2  slider-button-one"
        >
          <i class="fa-solid fa-chevron-left text-white"></i>
        </button>
        <button
          onClick={() => nextSlide(sliderRef)}
          className="btn btn-outline-info border-2 slider-button-two"
        >
          <i class="fa-solid fa-chevron-right text-white font-bold"></i>
        </button>
      </div>

      <div className="banner-text center">
        <h1 className="text-white fs-1 font-bold ">Travel With Us</h1>
        <p className="text-white fs-3 font-bold">
          Enjoy Your Holidays in Amazing Places
        </p>
      </div>

      <BannerSlider sliderRef={sliderRef} />
    </div>
  );
};

export default Banner;
