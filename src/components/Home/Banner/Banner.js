import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  const images = [
    "https://i.ibb.co/NmDnmDx/9-Z-2102-w017-n001-368-B-p15-368.png",
    "https://i.ibb.co/PCRjQ5K/123-Z-2012-w020-n001-932-B-p15-932.png",
    "https://i.ibb.co/9wcCRZW/2123.png",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      changeBackgroundImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);
  const changeBackgroundImage = () => {
    let newCurrentImg = 0;
    const noOfImages = images.length;
    newCurrentImg = currentImage !== noOfImages - 1 ? currentImage + 1 : 0;
    setCurrentImage(newCurrentImg);
  };
  let urlString = `url('${images[currentImage]}')`;
  return (
    <Container fluid>
      <div className="dynamicImage" style={{ backgroundImage: urlString }}>
        <img
          className="short-image-for-mobile"
          src="https://i.ibb.co/9htDpbp/Destination-den-removebg-preview.png"
          alt=""
        />
        <h3 className="display-5 text-white">
          WE PROVIDE YOU THE BEST EXPERIENCE IN CHEAPEST RATE
        </h3>
      </div>
    </Container>
  );
};

export default Banner;
