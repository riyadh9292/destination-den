import React from "react";
import { Spinner } from "react-bootstrap";
import Banner from "./Banner/Banner";
import Honeymoon from "./HoneyMoon/Honeymoon";
import Services from "./Services/Services";
import WhyBookWithDestinationDen from "./WhyBookWithDestinationDen/WhyBookWithDestinationDen";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <WhyBookWithDestinationDen />
      <Honeymoon />
    </div>
  );
};

export default Home;
