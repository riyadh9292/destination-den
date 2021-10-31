import React, { useEffect, useState } from "react";
import ManageAllOrder from "./ManageAllOrder/ManageAllOrder";
import Spinner from "../UI/Spinner/Spinner";

const ManageAllOrders = () => {
  const [loading, setLoading] = useState(true);
  const [allOrders, setAllOrders] = useState([]);
  const removeorder = (id) => {
    const a = window.confirm("Are you not going to this trip?");
    if (a) {
      fetch(`https://possessed-flesh-52711.herokuapp.com/remove-order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainingOrder = allOrders.filter(
            (allOrder) => allOrder._id !== id
          );
          setAllOrders(remainingOrder);
        });
    }
  };
  const updateStatus = (id) => {
    setLoading(true);
    const status = { status: "going" };
    fetch(`https://possessed-flesh-52711.herokuapp.com/update-order/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => setLoading(false));
  };
  useEffect(() => {
    fetch("https://possessed-flesh-52711.herokuapp.com/all-orders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
        setLoading(false);
      });
  }, [loading]);
  return (
    <div>
      <h1>Manage All Orders</h1>
      <p>We must be a super user to moderate the following content</p>
      {loading ? (
        <Spinner />
      ) : allOrders.length === 0 ? (
        "No more orders"
      ) : (
        allOrders.map((allOrder) => (
          <ManageAllOrder
            key={allOrder._id}
            order={allOrder}
            removeorder={removeorder}
            updateStatus={updateStatus}
          />
        ))
      )}
    </div>
  );
};

export default ManageAllOrders;
