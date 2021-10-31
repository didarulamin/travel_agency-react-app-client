import Slider from "react-slick";

import "./cardslider.css";

const BannerSlider = ({ sliderRef }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container ">
      <Slider {...settings} ref={sliderRef}>
        <div className="slider-img " key={3}>
          <img
            className="img-fluid"
            src="https://i.ibb.co/59zCpp9/banner-typng.png"
            alt=""
          />
          {/* <h1 className="overly-text">Sreemangal</h1> */}
        </div>
        <div className="slider-img " key={3}>
          <img
            className="img-fluid"
            src="https://i.ibb.co/LkPvcgZ/banner2-png.png"
            alt=""
          />
          {/* <h1 className="overly-text">Sreemangal</h1> */}
        </div>
        <div className="slider-img " key={1}>
          <img
            className="img-fluid"
            src="https://i.ibb.co/4NSf1BW/banner-4-1478080c.png"
            alt=""
          />
          {/* <h1 className="overly-text">Sreemangal</h1> */}
        </div>
        <div className="slider-img " key={2}>
          <img
            className="img-fluid"
            src="https://i.ibb.co/Sd2wpv8/banner-3-ff884c34.png"
            alt=""
          />
          {/* <h1 className="overly-text">Sreemangal</h1> */}
        </div>
        <div className="slider-img " key={3}>
          <img
            className="img-fluid"
            src="https://i.ibb.co/stHybSH/banner-1-0158ff1d.png"
            alt=""
          />
          {/* <h1 className="overly-text">Sreemangal</h1> */}
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
