import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./packages.css";
import { useState, useEffect } from "react";
import ManageTourPack from "../ManageTourPack/ManageTourPack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const PackupdateForm = () => {
  const { handleSubmit, register, reset } = useForm();
  const [defaultValue, setdefaultValue] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://blooming-inlet-82006.herokuapp.com/api/allpackages")
      .then((response) => setData(response.data));
  }, []);

  const onSubmit = (newdata) => {
    const id = defaultValue.id;
    const data = newdata;
    axios
      .put(
        `https://blooming-inlet-82006.herokuapp.com/api/package/update/${id}`,
        {
          data,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);

        alert("success");
        // window.location.reload();
        // reset();
      });

    toast("Wow so easy!");
  };

  function onUpdate(id) {
    const response = data.find((item) => item.id === id);
    reset(response);
    setdefaultValue(response);

    // reset(defaultValue);
    window.scrollTo({ top: 70, behavior: "smooth" });
  }

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
      <div>
        <form
          className="m-2 m-sm-5 text-center shadow-lg p-sm-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="fs-2 p-2"> Update Tour Package</h1>
          <div className="row row-cols-2 p-0 m-0">
            <div>
              <input
                className="form-control m-2 border border-darken-3"
                placeholder="Title"
                {...register("title")}
              />
              <input
                className="form-control m-2 border border-darken-3"
                placeholder="Price"
                {...register("price")}
              />
              <input
                className="form-control m-2 border border-darken-3"
                placeholder="Rating"
                {...register("rating")}
              />
              <input
                className="form-control m-2 border border-darken-3"
                placeholder="destination"
                {...register("destination")}
              />

              <input
                className="form-control m-2 border border-darken-3"
                placeholder="departure"
                {...register("departure")}
              />
              <input
                className="form-control m-2 border border-darken-3"
                placeholder="departure time"
                {...register("departure_time")}
              />
              <input
                className="form-control m-2 border border-darken-3"
                placeholder="Accommodation"
                {...register("accommodation")}
              />
            </div>

            <div>
              {" "}
              <input
                className="form-control m-2 border border-darken-3"
                placeholder="Destination Image"
                {...register("img_url")}
              />
              <input
                className="form-control m-2 border border-darken-3"
                placeholder="Return Time"
                {...register("return_time")}
              />
              <input
                className="form-control m-2 border border-darken-3"
                placeholder="Tour Duration"
                {...register("tour_duration")}
              />
              <textarea
                className="form-control m-2 border border-darken-3"
                placeholder="Description"
                id="exampleFormControlTextarea1"
                rows="3"
                {...register("description")}
              ></textarea>
              <textarea
                className="form-control m-2 border border-darken-3"
                placeholder="What´s Included"
                id="exampleFormControlTextarea1"
                rows="3"
                {...register("included")}
              ></textarea>
              <textarea
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
      <div>
        <h1 className="fs-2 text-center">Manage Tour Package</h1>
        <ManageTourPack data={data} onUpdate={onUpdate} />
      </div>
    </div>
  );
};

export default PackupdateForm;
