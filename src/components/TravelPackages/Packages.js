import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./package.css";
import Rating from "react-rating";

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
      <div className="text-center my-4">
        <h1 className="fs-1 font-bold">Popular Tour Packages</h1>
        <p className="fs-4">Select Your Best Package For Your Travel</p>
      </div>

      <div className="package-container">
        <div className="row row-cols-1 row-cols-md-3 g-4 m-0">
          {packages.map((item) => (
            <div className="col">
              <div className="card h-100">
                <img
                  src={item.img_url}
                  className="card-img-top img-fluid "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fs-4 font-bold">
                    {item.title.slice(0, 20)}
                  </h5>
                  <p className="font-bold my-2">
                    <span>
                      <i class="fa-solid fa-hourglass text-info"></i>
                    </span>
                    {item.tour_duration}
                  </p>

                  <div className="d-flex justify-between ">
                    <span>
                      <Rating
                        initialRating={item.rating}
                        readonly
                        emptySymbol={["fa fa-star-o  icon"]}
                        fullSymbol={["fa fa-star  icon"]}
                      />
                    </span>

                    <div className="d-flex justify-between ">
                      <i class="fa-solid fa-plane-departure  m-1 p-2 bg-primary text-white rounded-3"></i>
                      <i class="fa-solid fa-bed bg-primary text-white rounded-3 m-1 p-2"></i>
                      <i class="fa-solid fa-utensils bg-primary text-white rounded-3 m-1 p-2"></i>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <Link to={`booking/${item.id}`}>
                    <button className="btn rounded-pill card-button px-4 ">
                      <span>
                        <i class="fa-solid fa-flag text-white p-2"></i>
                      </span>
                      Book Now
                    </button>
                  </Link>
                  <span className="text-primary fs-5">{item.price}</span>
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
