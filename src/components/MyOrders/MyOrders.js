import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../../Hooks/useAuth";
import MyOrder from "./MyOrder/MyOrder";
import Spinner from "../UI/Spinner/Spinner";

const MyOrders = () => {
  const { name } = useParams();
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const removeTrip = (id) => {
    setLoading(true);
    const a = window.confirm("Are you not going to this trip?");
    if (a) {
      fetch(`https://possessed-flesh-52711.herokuapp.com/remove-order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainingOrders = userOrders.filter(
            (order) => order._id !== id
          );
          setUserOrders(remainingOrders);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    fetch(`https://possessed-flesh-52711.herokuapp.com/order-by/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserOrders(data);
        setLoading(false);
      });
  }, [loading]);
  return (
    <div>
      <h1>{name}'s Trips</h1>

      {loading ? (
        <Spinner />
      ) : userOrders.length === 0 ? (
        `${name} you have no trip to show`
      ) : (
        userOrders.map((order) => (
          <MyOrder key={order._id} order={order} removeTrip={removeTrip} />
        ))
      )}
    </div>
  );
};

export default MyOrders;
