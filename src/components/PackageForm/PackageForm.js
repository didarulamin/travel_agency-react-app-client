import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./packages.css";
import { Link } from "react-router-dom";

const PackageForm = () => {
  const { handleSubmit, reset, register } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(user.uid);
    const submitBy = user.uid;
    axios
      .post("http://localhost:5000/api/addTourPackage/", { data, submitBy })
      .then((res) => {
        console.log(res);
        console.log(res.data);

        alert("success");
        window.location.reload();
        reset();
      });
  };

  return (
    <div>
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
        <div className="row row-cols-2 p-0 m-0">
          <div>
            <input
              className="form-control m-2 border border-darken-3"
              placeholder="Title"
              // defaultValue={defaultValue.title}
              {...register("title")}
            />
            <input
              className="form-control m-2 border border-darken-3"
              // defaultValue={defaultValue.price}
              placeholder="Price"
              {...register("price")}
            />
            <input
              className="form-control m-2 border border-darken-3"
              // defaultValue={defaultValue.rating}
              placeholder="Rating"
              {...register("rating")}
            />
            <input
              className="form-control m-2 border border-darken-3"
              // defaultValue={defaultValue.destination}
              placeholder="destination"
              {...register("destination")}
            />

            <input
              className="form-control m-2 border border-darken-3"
              placeholder="departure"
              // defaultValue={defaultValue.departure}
              {...register("departure")}
            />
            <input
              className="form-control m-2 border border-darken-3"
              placeholder="departure time"
              // defaultValue={defaultValue.departure_time}
              {...register("departure_time")}
            />
            <input
              className="form-control m-2 border border-darken-3"
              placeholder="Accommodation"
              // defaultValue={defaultValue.accommodation}
              {...register("accommodation")}
            />
          </div>

          <div>
            {" "}
            <input
              className="form-control m-2 border border-darken-3"
              // defaultValue={defaultValue.img_url}
              placeholder="Destination Image"
              {...register("img_url")}
            />
            <input
              className="form-control m-2 border border-darken-3"
              placeholder="Return Time"
              // defaultValue={defaultValue.return_time}
              {...register("return_time")}
            />
            <input
              className="form-control m-2 border border-darken-3"
              placeholder="Tour Duration"
              // defaultValue={defaultValue.tour_duration}
              {...register("tour_duration")}
            />
            <textarea
              className="form-control m-2 border border-darken-3"
              placeholder="Description"
              // defaultValue={defaultValue.description}
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("description")}
            ></textarea>
            <textarea
              className="form-control m-2 border border-darken-3"
              placeholder="What´s Included"
              // defaultValue={defaultValue.included}
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("included")}
            ></textarea>
            <textarea
              // defaultValue={defaultValue.not_included}
              className="form-control m-2 border border-darken-3"
              placeholder="Not Included"
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("not_included")}
            ></textarea>
          </div>
        </div>
        <input className=" m-2 btn btn-info  text-center" type="submit" />
      </form>
    </div>
  );
};

export default PackageForm;
