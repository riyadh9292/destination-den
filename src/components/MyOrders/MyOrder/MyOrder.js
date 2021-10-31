import React from "react";

const MyOrder = ({ order, removeTrip }) => {
  const { _id, tripTo, email, city, status } = order;

  return (
    <p>
      {city} to {tripTo} from {email}--------{status}
      <button onClick={() => removeTrip(_id)} className="btn-sm">
        X
      </button>
    </p>
  );
};

export default MyOrder;
