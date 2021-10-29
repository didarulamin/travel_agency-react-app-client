import React from "react";
import DestinationSlider from "../DestinationSlider/DestinationSlider";
import "./destination.css";
const Destination = () => {
  return (
    <div className="destination-area">
      <div className=" d-flex flex-column justify-content-center align-items-center mx-3">
        <div className="section-head ">
          <h5 className="fs-1">Feature Tours</h5>
          <h2 className="fs-4">See Our Best Popular Destinations</h2>
        </div>

        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
