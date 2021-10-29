import React from "react";
import "./Footer.css";
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
          <p className="text-white fs-4 text-start">Talk Space</p>
          <p>2578 Broadway #607 New York, NY 10025</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-white fs-4 text-start">About</p>
          <div className="company">
            <Link to="#">Join our network</Link>
            <Link to="#">Career</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Privacy policy</Link>
            <Link to="#">Terms of use</Link>
            <Link to="#">Contact</Link>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-white fs-4 text-start">Services</p>
          <div className="company">
            <Link to="#">Online therapy</Link>
            <Link to="#">Psychiatry</Link>
            <Link to="#">Team therapy</Link>
            <Link to="#">LGBTQIA community</Link>
            <Link to="#">Unlimited messaging therapy</Link>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-white fs-4 text-start">Useful links</p>
          <div className="company">
            <Link to="#">Find a therapist</Link>
            <Link to="#">Mental health library</Link>
            <Link to="#">Free mental health test</Link>
            <Link to="#">Terms & Conditions</Link>
            <Link to="#">Anxiety test</Link>
          </div>
        </div>
        {/* <div className="subscribe d-flex flex-column justify-content-start">
          <p className="text-white fs-4 text-start">Subscribe</p>
          <input type="text" placeholder="Your email address" />
          <p className="w-75 text-start">
            Get the latest news and updates right at your inbox.
          </p>
        </div> */}
      </div>
      <div className=" copyright">
        <span> © 2022 Talk Space, All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
