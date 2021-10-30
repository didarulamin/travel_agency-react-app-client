import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
  const [mybookings, setMyBookings] = useState([]);
  const { user } = useAuth();
  const id = user.uid;
  useEffect(() => {
    axios.get(`http://localhost:5000/api/mybooking/${id}`).then((response) => {
      console.log(response);
      setMyBookings(response.data);
    });
  }, [id]);

  const onCancel = (id) => {
    const status = "Cancel";
    axios
      .put(`http://localhost:5000/api/booking/status/${id}`, {
        status,
      })
      .then((response) => {})
      .then((response) => {
        alert("Success");
      });
  };

  return (
    <div>
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
