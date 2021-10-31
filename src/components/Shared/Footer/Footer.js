import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const facebookLogo = <FontAwesomeIcon icon={faFacebook} />;
  const instagramLogo = <FontAwesomeIcon icon={faInstagramSquare} />;
  const twitterLogo = <FontAwesomeIcon icon={faTwitter} />;
  const phoneLogo = <FontAwesomeIcon icon={faPhoneAlt} />;

  return (
    <div className="footer-container">
      <div className="d-md-flex justify-content-around ">
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid"
            src="https://i.ibb.co/nCKTy9X/Destination-den.png"
            alt=""
          />
        </div>
        <div className="">
          <h3>CONTENT</h3>
          <ul>
            <li>Questions</li>
            <li>Jobs</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="">
          <h3>INFORMATION</h3>
          <ul>
            <li>About us</li>
            <li>User Reviews</li>
            <li>Success Story</li>
          </ul>
        </div>
        <div className="">
          <h3>LEGAL</h3>
          <ul>
            <li>Plans and pricing</li>
            <li>About us</li>
            <li>Sell your content</li>
            <li>LEGAL Terms and conditions License</li>
            <li> Agreement Privacy policy</li>
            <li>Copyright information </li>
            <li>Cookies policy</li>
          </ul>
        </div>
      </div>
      <div className="social-media">
        <h2>Follow us</h2>
        {facebookLogo}
        {instagramLogo}
        {twitterLogo}
      </div>
      <div className="social-media mt-5 fw-bold fs-1">
        {" "}
        Call me: 01792681297 {phoneLogo}
      </div>
    </div>
  );
};

export default Footer;
