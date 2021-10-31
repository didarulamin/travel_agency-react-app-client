import React, { useEffect, useState } from "react";
import AwesomeTour from "../../components/AwesomeTour/AwesomeTour";
import Banner from "../../components/Banner/Banner";
import Destination from "../../components/Destination/Destination";
import Packages from "../../components/TravelPackages/Packages";
import { Spinner } from "react-bootstrap";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Packages />
      <Destination />
      <AwesomeTour />
    </div>
  );
};

export default Home;
