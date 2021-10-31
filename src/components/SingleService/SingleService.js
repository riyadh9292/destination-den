import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../../Hooks/useAuth";
import Spinner from "../UI/Spinner/Spinner";
import "./SingleService.css";

const SingleService = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { displayName, email } = user;
  const { id } = useParams();
  const [userLocation, setUserLocation] = useState({});
  const [service, setService] = useState({
    img: "",
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      fetchLocationName(latitude, longitude);
    });
  }, []);

  const fetchLocationName = async (lat, lng) => {
    await fetch(
      "https://www.mapquestapi.com/geocoding/v1/reverse?key=	AYDNPVsnUrAQvhUndtYwnvEjnEhAhoYR&location=" +
        lat +
        "%2C" +
        lng +
        "&outFormat=json&thumbMaps=false"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const userLocatonInJson = JSON.stringify(responseJson);
        /*  console.log(JSON.parse(userLocatonInJson).results[0].locations[0]); */
        setUserLocation(JSON.parse(userLocatonInJson).results[0].locations[0]);
      });
  };

  useEffect(() => {
    fetch(`https://possessed-flesh-52711.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        /* setService(data); */
        // console.log(data);
        setService(data);
      });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      name: e.target[0].value,
      email: e.target[1].value,
      country: e.target[2].value,
      postalCode: e.target[3].value,
      city: e.target[4].value,
      street: e.target[5].value,
      productId: id,
      status: "pending",
      tripTo: service.name,
    };
    fetch("https://possessed-flesh-52711.herokuapp.com/order-submit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        alert("successfully added . Please wait for further information.");
      });
  };

  return (
    <div className="d-md-flex justify-content-evenly">
      <div className="single-service-image-container">
        <img className="" src={service.img} alt="" />
      </div>
      <div className="">
        <h1>{service.name}</h1>
        <p>{service.ourPackage}</p>
        <h4>{service.price}tk per/person</h4>
        <p>{service.description}</p>
        <h1 className="display-3">Address provide here</h1>
        <p>Enable browser geolocation for better user experience</p>
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={submitHandler}>
            <label>UserName : </label>
            <input type="text" value={displayName} readOnly />
            <br />
            <label>Password : </label>
            <input type="text" value={email} readOnly />
            <br />
            <label>Country : </label>
            <input
              defaultValue={userLocation.adminArea1 || ""}
              type="text"
              required
            />
            <br />
            <label>District name : </label>
            <input
              defaultValue={userLocation.adminArea5 || ""}
              type="text"
              required
            />
            <br />
            <label>Postal code : </label>
            <input
              defaultValue={userLocation.postalCode || ""}
              type="number"
              required
            />
            <br />

            <label>Street name : </label>
            <input
              defaultValue={userLocation.street || ""}
              type="text"
              required
            />
            <br />
            <input type="submit" />
          </form>
        )}
      </div>
    </div>
  );
};

export default SingleService;
