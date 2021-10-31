import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

import "./Service.css";

const Service = (props) => {
  const { _id, name, ourPackage, img, description } = props.service;
  return (
    <Col>
      <Card>
        <Card.Img
          className="img-fluid img-responsive"
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title className="display-5">{name}</Card.Title>
          <h5>
            <span className="text-decoration-underline package-name">
              Package Name
            </span>{" "}
            :{ourPackage}
          </h5>
          <div className="card-description fs-4">
            <ShowMoreText
              /* Default options */
              lines={3}
              more="Show more"
              less="Show less"
              className="content-css"
              anchorClass="my-anchor-css-class"
              expanded={false}
              width={280}
              truncatedEndingComponent={"... "}
            >
              <Card.Text>{description}</Card.Text>
            </ShowMoreText>
            <Card.Footer>
              <Link to={`/services/${_id}`}>
                <button>Book Now</button>
              </Link>
            </Card.Footer>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
