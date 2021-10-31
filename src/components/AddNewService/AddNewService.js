import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../UI/Spinner/Spinner";

const AddNewService = () => {
  const [loading, setLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    fetch("https://possessed-flesh-52711.herokuapp.com/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        reset();
      });
  };
  return (
    <div className="py-5">
      <h1>Add a new service</h1>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            defaultValue=""
            {...register("name", { required: true })}
            placeholder="enter your service name"
          />{" "}
          <br />
          {errors.name && <p>This field is required</p>}
          <input
            defaultValue=""
            {...register("img", { required: true })}
            placeholder="enter your service image url must be a hosted image"
          />{" "}
          <br />
          {errors.img && <p>This field is required</p>}
          <input
            placeholder="enter trip cost"
            type="number"
            {...register("price", { min: 1000, max: 5000000 })}
          />{" "}
          <br />
          {errors.price && <p>price range should be 1000-500000</p>}
          <textarea
            {...register("description", { required: true })}
            placeholder="Enter description about the trip here"
          />{" "}
          <br />
          {errors.description && <p>This field is required</p>}
          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("ourPackage", { required: true })}
            placeholder="enter package name"
          />{" "}
          <br />
          {errors.ourPackage && <p>This field is required</p>}
          <input type="submit" />
        </form>
      )}
    </div>
  );
};

export default AddNewService;
