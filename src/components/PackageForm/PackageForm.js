import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./packages.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PackageForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(user.uid);
    const submitBy = user.uid;
    axios
      .post("https://blooming-inlet-82006.herokuapp.com/api/addTourPackage/", {
        data,
        submitBy,
      })
      .then((res) => {
        toast("Success", { type: "success" });
        // window.location.reload();
        reset();
      });
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="fs-2 text-center">Manage Tour Packages</h1>
      <div className="text-center m-2">
        <Link to="/update">
          <button className="btn btn-primary m-2"> Update tour</button>
        </Link>

        <Link to="/create">
          <button className="btn btn-primary m-2"> create tour</button>
        </Link>
      </div>
      <form
        className="m-2 m-sm-5 text-center shadow-lg p-sm-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="fs-2 p-2">Add a Tour Package</h1>
        {(errors.title && "name is required") ||
          (errors.price && "price is required") ||
          (errors.rating && "rating is required") ||
          (errors.destination && "destination is required") ||
          (errors.tour_duration && "duration  is required") ||
          (errors.return_time && "return time is required") ||
          (errors.not_included && "Not included is required") ||
          (errors.included && "included is required") ||
          (errors.img_url && "Image is required") ||
          (errors.destination && "destination is required") ||
          (errors.description && "description is required") ||
          (errors.departure_time && "departure time is required") ||
          (errors.departure && "departure is required") ||
          (errors.accommodation && "accommodation is required")}
        <div className="row row-cols-2 p-0 m-0">
          <div>
            <input
              className="form-control m-2 border border-darken-3"
              placeholder="Title"
              // defaultValue={defaultValue.title}
              {...register("title", { required: true })}
            />
            <input
              className="form-control m-2 border border-darken-3"
              // defaultValue={defaultValue.price}
              placeholder="Price"
              {...register("price", { required: true })}
            />
            <input
              className="form-control m-2 border border-darken-3"
              // defaultValue={defaultValue.rating}
              placeholder="Rating"
              {...register("rating", { required: true })}
            />
            <input
              className="form-control m-2 border border-darken-3"
              // defaultValue={defaultValue.destination}
              placeholder="destination"
              {...register("destination", { required: true })}
            />

            <input
              className="form-control m-2 border border-darken-3"
              placeholder="departure"
              // defaultValue={defaultValue.departure}
              {...register("departure", { required: true })}
            />
            <input
              className="form-control m-2 border border-darken-3"
              placeholder="departure time"
              // defaultValue={defaultValue.departure_time}
              {...register("departure_time", { required: true })}
            />
            <input
              className="form-control m-2 border border-darken-3"
              placeholder="Accommodation"
              // defaultValue={defaultValue.accommodation}
              {...register("accommodation", { required: true })}
            />
          </div>

          <div>
            {" "}
            <input
              className="form-control m-2 border border-darken-3"
              // defaultValue={defaultValue.img_url}
              placeholder="Destination Image"
              {...register("img_url", { required: true })}
            />
            <input
              className="form-control m-2 border border-darken-3"
              placeholder="Return Time"
              // defaultValue={defaultValue.return_time}
              {...register("return_time", { required: true })}
            />
            <input
              className="form-control m-2 border border-darken-3"
              placeholder="Tour Duration"
              // defaultValue={defaultValue.tour_duration}
              {...register("tour_duration", { required: true })}
            />
            <textarea
              className="form-control m-2 border border-darken-3"
              placeholder="Description"
              // defaultValue={defaultValue.description}
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("description", { required: true })}
            ></textarea>
            <textarea
              className="form-control m-2 border border-darken-3"
              placeholder="What´s Included"
              // defaultValue={defaultValue.included}
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("included", { required: true })}
            ></textarea>
            <textarea
              // defaultValue={defaultValue.not_included}
              className="form-control m-2 border border-darken-3"
              placeholder="Not Included"
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("not_included", { required: true })}
            ></textarea>
          </div>
        </div>
        <input className=" m-2 btn btn-info  text-center" type="submit" />
      </form>
    </div>
  );
};

export default PackageForm;
