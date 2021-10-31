import React from "react";
import { Alert } from "react-bootstrap";

const ManageAllOrder = (props) => {
  const { _id, name, email, status, tripTo } = props.order;
  return (
    <Alert>
      {name} email : {email} travelling to {tripTo}. Travelling status: {status}
      <button onClick={() => props.removeorder(_id)}>Remove</button>
      <button
        disabled={status === "going"}
        onClick={() => props.updateStatus(_id)}
      >
        update status
      </button>
    </Alert>
  );
};

export default ManageAllOrder;
