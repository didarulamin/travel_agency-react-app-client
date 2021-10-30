import { Helmet } from "react-helmet";
import "./packages.css";
import ManageTourPack from "../../components/ManageTourPack/ManageTourPack";
import PackageForm from "../../components/PackageForm/PackageForm";
import { useState } from "react";
import PackupdateForm from "../../components/PackageForm/PackupdateForm";
import { Link } from "react-router-dom";

const ManageTourPackages = () => {
  return (
    <div>
      <Helmet>
        <title>Manage Tour Packages</title>
      </Helmet>

      <PackageForm />
    </div>
  );
};

export default ManageTourPackages;
