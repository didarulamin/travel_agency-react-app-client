import React, { useState } from "react";
import AwesomeTour from "../../components/AwesomeTour/AwesomeTour";
import Banner from "../../components/Banner/Banner";
import Destination from "../../components/Destination/Destination";
import Packages from "../../components/TravelPackages/Packages";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const [loading, setLoading] = useState(true);

  window.onload = (event) => {
    setLoading(false);
  };
  return (
    <div>
      <Banner />
      <Packages />
      <Destination />
      <AwesomeTour />

      {loading && <Spinner animation="border" />}
    </div>
  );
};

export default Home;
