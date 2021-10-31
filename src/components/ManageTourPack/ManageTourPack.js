import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const ManageTourPack = ({ data, onUpdate }) => {
  // console.log(data);
  const onDelete = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .get(
                `https://blooming-inlet-82006.herokuapp.com/api/package/delete/${id}`
              )
              .then((response) =>
                // setData(response.data);
                alert("Success")
              );
          },
        },
        {
          label: "No",
          onClick: () => alert("Data not deleted"),
        },
      ],
    });
  };

  return (
    <div className="m-2 m-sm-5 text-center shadow-lg p-sm-5">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Place</th>
            <th scope="col">Destination</th>
            <th scope="col">Departure place</th>
            <th scope="col">departure time</th>
            <th scope="col">price</th>
            <th scope="col">Return time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <th scope="row">{item.doc_id.toString().slice(0, 10)}</th>
              <td>{item.title}</td>
              <td>{item.destination}</td>
              <td>{item.departure}</td>
              <td>{item.departure_time}</td>
              <td>{item.price}</td>
              <td>{item.return_time}</td>
              <td className="d-flex">
                <button
                  onClick={() => onUpdate(item.id)}
                  className="btn btn-primary m-1"
                >
                  update
                </button>
                <button
                  onClick={() => onDelete(item.doc_id)}
                  className="btn btn-primary m-1"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTourPack;
