import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const { id } = useParams();
  const [packData, setPackData] = useState([]);
  const { handleSubmit, reset, register } = useForm();

  const { user } = useAuth();

  const packName = packData[0]?.title;
  const onSubmit = (data) => {
    const bookedUser = user.uid;
    const bookedUserName = user.displayName;
    const userEmail = user.email;
    const packageId = id;
    const status = "pending";

    const bookingData = {
      ...data,
      bookedUser,
      packageId,
      status,
      bookedUserName,
      userEmail,
      packName,
    };
    axios
      .post("http://localhost:5000/api/booking/", { bookingData })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    alert("success");
    reset();
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/package/${id}`).then((response) => {
      console.log(response);
      setPackData(response.data);
    });
  }, [id]);

  return (
    <div>
      <Helmet>
        <title>Manage Tour Packages</title>
      </Helmet>

      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center fs-2 m-2">Book This Tour {packName}</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="btnstyle flex-column ">
            <TextField
              defaultValue={user.displayName}
              id="outlined-basic"
              label="Your name"
              variant="outlined"
              className="form-control m-2 "
              name="title"
              //   {...register("name")}
            />
            <TextField
              defaultValue={user.email}
              id="outlined-basic"
              label="Your email"
              variant="outlined"
              className="form-control m-2 "
              name="title"
              //   {...register("email")}
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              className="form-control m-2"
              name="Price"
              {...register("phone")}
            />
            <TextField
              id="outlined-basic"
              label="Adult"
              variant="outlined"
              className="form-control m-2"
              name="Price"
              {...register("adult_count")}
            />
            <TextField
              id="outlined-basic"
              label="Child"
              variant="outlined"
              name="Destination"
              className="form-control m-2"
              {...register("child_count")}
            />

            <textarea
              className="form-control m-2 border border-darken-3"
              placeholder="Message"
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("message")}
            ></textarea>
          </div>
          <input className="form-control m-2 btn btn-info" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
