import Slider from "react-slick";

import "./cardslider.css";

const SimpleSlider = ({ sliderRef }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container ">
      <Slider {...settings} ref={sliderRef}>
        <div className="slider-img " key={1}>
          <img
            className="img-fluid "
            src="https://www.tourx-react.egenslab.com/static/media/banner-3.ff884c34.png"
            alt=""
          />
          {/* <h1 className="overly-text">Sreemangal</h1> */}
        </div>
        <div className="slider-img " key={2}>
          <img
            className="img-fluid"
            src="https://www.tourx-react.egenslab.com/static/media/banner-4.1478080c.png"
            alt=""
          />
          {/* <h1 className="overly-text">Sreemangal</h1> */}
        </div>
        <div className="slider-img " key={3}>
          <img
            className="img-fluid"
            src="https://www.tourx-react.egenslab.com/static/media/banner-3.ff884c34.png"
            alt=""
          />
          {/* <h1 className="overly-text">Sreemangal</h1> */}
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
