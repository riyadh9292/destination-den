import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
import Spinner from "../../UI/Spinner/Spinner";
import AOS from "aos";
import "./Services.css";
import "aos/dist/aos";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetch("https://possessed-flesh-52711.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      <h1 className="display-1 my-5 services-header">Our Major services</h1>
      {loading ? (
        <Spinner />
      ) : (
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Services;
