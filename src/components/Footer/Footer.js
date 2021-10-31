import React from "react";
import "./Footer.css";
import payment from "../../assets/creditcard-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//footer component
const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer-section-one col-12 row row-cols-1 row-cols-sm-4">
        <div className="brand text-start d-flex flex-column justify-content-center align-items-center">
          <div>
            <FontAwesomeIcon
              icon={faTwitter}
              color="white"
              size="2x"
              className="m-1"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              color="white"
              size="2x"
              className="m-1"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              color="white"
              size="2x"
              className="m-1"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color="white"
              size="2x"
              className="m-1"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              color="white"
              size="2x"
              className="m-1"
            />
          </div>
          <p className="text-white fs-1 text-start">Go Beyond Travels</p>
          <p>2578 Broadway #607 New York, NY 10026</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-white fs-2 my-2 text-start">About</p>
          <div className="company">
            <Link to="#">Why Us</Link>
            <Link to="#">Career</Link>
            <Link to="#">Reviews</Link>
            <Link to="#">Why Touring</Link>
            <Link to="#">Travel Insurance</Link>
            <Link to="#">Programme</Link>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-white fs-2 text-start my-2">Support</p>
          <div className="company">
            <Link to="/contact">Contact Us</Link>
            <Link to="/contact">About Us</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Oue Blog</Link>
            <Link to="/">Package</Link>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-white fs-2 text-start my-2">We Accepts:</p>
          <div className="company">
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
      <div className=" copyright">
        <span> © 2022 Go Beyond Travels, All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
