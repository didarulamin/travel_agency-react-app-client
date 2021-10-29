import Slider from "react-slick";
// import card2 from "../../assets/card2.png";
import "./destinationSlider.css";

const DestinationSlider = ({ sliderRef }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="des-slider-container ">
      <Slider {...settings} ref={sliderRef}>
        <div className="des-slider card " key={1}>
          <img
            className="img-fluid "
            src="http://themescare.com/demos/peulis-v6/assets/img/destination-2.jpg"
            alt="..."
          />
        </div>
        <div className="des-slider  card" key={2}>
          <img
            src="http://themescare.com/demos/peulis-v6/assets/img/destination-2.jpg"
            className="img-fluid "
            alt="..."
          />
        </div>
        <div className="des-slider  card " key={3}>
          <img
            src="http://themescare.com/demos/peulis-v6/assets/img/destination-2.jpg"
            className="img-fluid "
            alt="..."
          />
        </div>
        <div className="des-slider  card " key={3}>
          <img
            src="http://themescare.com/demos/peulis-v6/assets/img/destination-2.jpg"
            className="img-fluid "
            alt="..."
          />
        </div>
        <div className="des-slider  card " key={3}>
          <img
            src="http://themescare.com/demos/peulis-v6/assets/img/destination-2.jpg"
            className="img-fluid "
            alt="..."
          />
        </div>
        <div className="des-slider  card " key={3}>
          <img
            src="http://themescare.com/demos/peulis-v6/assets/img/destination-2.jpg"
            className="img-fluid "
            alt="..."
          />
        </div>
        <div className="des-slider  card " key={3}>
          <img
            src="http://themescare.com/demos/peulis-v6/assets/img/destination-2.jpg"
            className="img-fluid "
            alt="..."
          />
        </div>
        <div className="des-slider  card " key={3}>
          <img
            src="http://themescare.com/demos/peulis-v6/assets/img/destination-2.jpg"
            className="img-fluid "
            alt="..."
          />
        </div>
      </Slider>
    </div>
  );
};

export default DestinationSlider;
