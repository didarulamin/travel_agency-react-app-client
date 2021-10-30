import axios from "axios";
import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";

const ManageBookings = () => {
  const [booking, setBookings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/allbookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  const onApprove = (id) => {
    console.log(id);
    const status = "Approve";
    axios
      .put(`http://localhost:5000/api/booking/status/${id}`, {
        status,
      })
      .then((response) => {})
      .then((response) => {
        alert("Success");
      });
  };
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
  const onDelete = (id) => {
    axios
      .put(`http://localhost:5000/api/booking/delete/${id}`)
      .then((response) => {})
      .then((response) => {
        alert("Success");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Manage Bookings</title>
      </Helmet>
      <h1 className="fs-2 text-center">Manage Bookings</h1>
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
            {booking.map((item) => (
              <tr>
                <th scope="row">{item.bookingId?.toString().slice(0, 8)}</th>
                <td>{item?.bookedUserName}</td>
                <td>{item?.packName}</td>
                <td>{item?.phone}</td>
                <td>{item?.email}</td>
                <td>{item?.status}</td>
                <td className="d-flex">
                  <button
                    onClick={() => onApprove(item.bookingId)}
                    className="btn btn-info m-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => onCancel(item.bookingId)}
                    className="btn btn-info m-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => onDelete(item.doc_id)}
                    className="btn btn-info m-2"
                  >
                    Delete
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

export default ManageBookings;
