import React from "react";
import { Accordion, Container } from "react-bootstrap";
import {
  faShieldAlt,
  faPowerOff,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import "./WhyBookWithDestinationDen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyBookWithDestinationDen = () => {
  const shield = <FontAwesomeIcon icon={faShieldAlt} />;
  const powerOff = <FontAwesomeIcon icon={faPowerOff} />;
  const award = <FontAwesomeIcon icon={faAward} />;
  return (
    <Container>
      <h1 className="display-1 text-align-left">
        Why Book with destination den
      </h1>
      <Accordion className="d-flex">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="fs-2">{shield}</span>
            World class security
          </Accordion.Header>
          <Accordion.Body>
            We always provide some guide for travellers. Security concern is our
            first target.Security is freedom from, or resilience against,
            potential harm caused by others. Beneficiaries of security may be of
            persons and social groups, objects and institutions, ecosystems or
            any other entity or phenomenon vulnerable to unwanted change.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="fs-2">{award}</span>Get Award
          </Accordion.Header>
          <Accordion.Body>
            We give amazing awards to our clients, like 1 night extra,5%-25% off
            and many more. To learn more about our upcoming awards please stay
            connected.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span className="fs-2">{powerOff}</span>Cancel AnyTime
          </Accordion.Header>
          <Accordion.Body>
            You can cancel anytime . But please check our terms and conditions
            section to learn more.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default WhyBookWithDestinationDen;
