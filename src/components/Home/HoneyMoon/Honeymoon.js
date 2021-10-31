import React from "react";
import { Container } from "react-bootstrap";
import "./HoneyMoon.css";

const Honeymoon = () => {
  return (
    <div className="py-5">
      <h1 className="display-1 my-5 services-header">
        Our Very very Special Package
      </h1>

      <div className="parallax">
        <h1 className="pt-5 display-1 honeymoon-title">HoneyMoon Package</h1>
        <h4 className="honeymoon-title">80% off any package</h4>
        <button className="booking-button fs-1 fw-bold">Book Now</button>
      </div>
      <div className="parallax-content honeymoon-conditions">
        <h1 className="honeymoon-title">
          Terms and conditions for Honeymoon package
        </h1>
        <ol>
          <li>
            Our CEO of this company have to be invited in your wedding ceremony.
          </li>
          <li>Our CEO had to attend your program</li>
          <li>You have to take at least 3 of our packages previously.</li>
          <li>Which Honeymoon package to give you , it's depend on us.</li>
          <li>You can't sue us for this package</li>
        </ol>
      </div>
    </div>
  );
};

export default Honeymoon;
