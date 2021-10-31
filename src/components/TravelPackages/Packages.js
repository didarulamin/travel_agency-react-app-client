import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./package.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    axios
      .get("https://blooming-inlet-82006.herokuapp.com/api/allpackages")
      .then((response) => {
        setPackages(response.data);
      });
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="fs-1">Popular Tours</h1>
        <p className="fs-4">
          Lorem ipsum dolor sit amet, conseetuer adipiscing elit.
          <br />
          Aenan comdo igula eget. Aenean massa cum sociis Theme natoque.
        </p>
      </div>

      <div className="package-container">
        <div className="row row-cols-1 row-cols-md-3 g-4 m-0">
          {packages.map((item) => (
            <div className="col">
              <div className="card">
                <img
                  src={item.des_img_url}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Glacier Walk Combo</h5>
                  <p> 5 Days / 6 Nights</p>

                  <div className="d-flex d-flex justify-content-between align-items-center ">
                    <span>Rating</span>

                    <div>Icons</div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <Link to={`booking/${item.id}`}>
                    <button className="btn btn-primary">Book Now</button>
                  </Link>
                  <span>$161/per person</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
