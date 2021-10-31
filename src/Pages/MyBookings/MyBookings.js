import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";

const MyBookings = () => {
  const [mybookings, setMyBookings] = useState([]);
  const { user } = useAuth();
  const id = user.uid;
  useEffect(() => {
    axios
      .get(`https://blooming-inlet-82006.herokuapp.com/api/mybooking/${id}`)
      .then((response) => {
        setMyBookings(response.data);
      });
  }, [id]);

  const onCancel = (id) => {
    const status = "Cancel";

    confirmAlert({
      title: "Confirm to cancel",
      message: "Are you sure to cancel",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .put(
                `https://blooming-inlet-82006.herokuapp.com/api/booking/status/${id}`,
                {
                  status,
                }
              )
              .then((response) => {})
              .then((response) => {
                toast("success", { type: "success" });
              });
          },
        },
        {
          label: "No",
          // onClick: () => alert("Booking not cancel"),
        },
      ],
    });
  };

  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>My Bookings</title>
      </Helmet>
      <h1 className="fs-2 text-center">My Bookings</h1>

      <div className="m-2 m-sm-5 text-center shadow-lg p-sm-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Booking Id</th>
              <th scope="col">Booked by</th>
              <th scope="col">Package name</th>
              <th scope="col">User phone</th>
              <th scope="col">User email</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {mybookings.map((item) => (
              <tr>
                <th scope="row">{item.bookingId.toString().slice(0, 8)}</th>
                <td>{item?.bookedUserName}</td>
                <td>{item?.packName}</td>
                <td>{item?.phone}</td>
                <td>{item?.email}</td>
                <td>{item?.status}</td>
                <td className="d-flex">
                  <button
                    onClick={() => onCancel(item.bookingId)}
                    className="btn btn-info m-2"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
