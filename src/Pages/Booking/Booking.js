import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const { id } = useParams();
  const [packData, setPackData] = useState([]);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const pack = packData[0];

  const onSubmit = (data) => {
    const bookedUser = user.uid;
    const bookedUserName = user.displayName;
    const userEmail = user.email;
    const packageId = id;
    const status = "pending";
    const packName = pack.title;

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
      .post("https://blooming-inlet-82006.herokuapp.com/api/booking/", {
        bookingData,
      })
      .then((res) => {
        toast("Submitted successfully");
      });

    reset();
  };

  useEffect(() => {
    axios
      .get(`https://blooming-inlet-82006.herokuapp.com/api/package/${id}`)
      .then((response) => {
        console.log(response);
        setPackData(response.data);
      });
  }, [id]);

  return (
    <div className="mx-sm-5">
      <ToastContainer />
      <Helmet>
        <title> Booking package</title>
      </Helmet>

      <div className="row   p-0 m-0 justify-content-center">
        <div className="col-12 col-sm-8 d-flex justify-center flex-column">
          <div className="mx-sm-5 mx-1  ">
            <div className="d-flex align-items-center justify-content-between">
              <h1 className="fs-2 m-2"> {pack?.title}</h1>
              <span className="fs-4 text-primary">{pack?.price}</span>
            </div>
            <div className="mx-3">
              <Rating
                initialRating={pack?.rating}
                readonly
                emptySymbol={["fa fa-star-o  icon"]}
                fullSymbol={["fa fa-star  icon"]}
              />
              <span>({pack?.rating} Reviews)</span>
            </div>
          </div>
          <div className="d-flex justify-center my-3">
            <img className="img-fluid" src={pack?.img_url} alt="" />
          </div>

          <div className="mx-sm-5 mx-1  ">
            <p>{pack?.description}</p>
          </div>

          <div className="mx-sm-5 mx-1 my-5 p-3 shadow-lg table-color">
            <table className="table p-3">
              <tbody>
                <tr>
                  <td>Destination</td>
                  <td>{pack?.destination}</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>{pack?.tour_duration}</td>
                </tr>
                <tr>
                  <td>Departure place</td>
                  <td>{pack?.departure}</td>
                </tr>
                <tr>
                  <td>Departure Time</td>
                  <td>{pack?.departure_time}</td>
                </tr>
                <tr>
                  <td>Return Time</td>
                  <td>{pack?.return_time}</td>
                </tr>
                <tr>
                  <td>Accommodation</td>
                  <td>{pack?.accommodation}</td>
                </tr>
                <tr>
                  <td>What´s Included</td>
                  <td>{pack?.included}</td>
                </tr>
                <tr>
                  <td>Not Included</td>
                  <td>{pack?.not_included}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-12 col-sm-4 ">
          <div className="text-center  shadow-lg p-5 m-3 ">
            <h1 className="fs-2 mb-2">Book This Package</h1>
            <span>
              {(errors.phone && "Phone is required") ||
                (errors.address && "Address is required") ||
                (errors.adult_count && "Adult count is required") ||
                (errors.child_count && "Child count is required")}
            </span>
            <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
              <div className=" d-flex flex-column ">
                <input
                  className="form-control my-2 border border-darken-4 p-3"
                  defaultValue={user.displayName}
                  placeholder="name"
                />
                <input
                  className="form-control my-2 border border-darken-4 p-3"
                  defaultValue={user.email}
                  placeholder="email"
                />
                <input
                  className="form-control my-2 border border-darken-4 p-3"
                  placeholder="Phone"
                  {...register("phone", { required: true })}
                />
                <input
                  className="form-control my-2 border border-darken-4 p-3"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                <input
                  className="form-control my-2 border border-darken-4 p-3"
                  placeholder="Adult"
                  {...register("adult_count", { required: true })}
                />
                <input
                  className="form-control my-2 border border-darken-4 p-3"
                  placeholder="Child "
                  {...register("child_count", { required: true })}
                />
                <textarea
                  className="form-control my-2 border border-darken-3"
                  placeholder="Message"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  {...register("message")}
                ></textarea>
              </div>
              <input
                className="form-control my-2 btn btn-info w-25"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
