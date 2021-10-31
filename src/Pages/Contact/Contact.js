import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./contact.css";

//contact page component
const Contact = () => {
  return (
    <div className="row justify-content-center m-sm-5 p-0 m-0">
      {/* page titile tag using react helmate */}
      <Helmet>
        <title>Contact - Go Beyond Travels</title>
      </Helmet>

      <div className="text-center my-5 d-flex flex-column align-items-center ">
        <h1 className="fs-1 my-2 heading ">Get in touch with us</h1>
        <p className="fs-5 my-2">
          Go Beyond Travels - is a trusted and reliable tour and travel agency
          among all the leading and updated tour-operating services in
          Bangladesh. We are here to bring the luxury to your travelling. It is
          highly recommended to you that you talk to us about yours tours and
          travels. We have Our experienced tour experts who will guide you with
          all valid information that you need.
        </p>
        <div>
          <p>
            <span className="fs-2 my-1"> Phone number </span> <br />
            <span className="fs-2 my-1 text-primary">+ 0800 278 55 1565</span>
            <span className="fs-5 my-1 d-block">
              The line is open 24/7, 365 days a year
            </span>
          </p>
        </div>
        <Link to="/">
          <button className=" btn btn-info my-5">See our Destination</button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
