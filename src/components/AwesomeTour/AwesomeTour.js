import React from "react";
import "./awesometour.css";

const AwesomeTour = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 m-0 ">
      <div className="p-0">
        <img
          className="img-fluid"
          src="http://themescare.com/demos/peulis-v6/assets/img/awesome_bg.jpg"
          alt=""
        />
      </div>
      <div className="d-flex flex-column justify-content-center p-0 ps-5 awsometour-text">
        <h1 className="fs-1">
          Go Ahead & Make <br /> Awesome Tour
        </h1>
        <p className="fs-5">Discover Hidden Wonders On Trips With Peulis</p>

        <button className="btn btn-info w-25">Explore more</button>
      </div>
    </div>
  );
};

export default AwesomeTour;
