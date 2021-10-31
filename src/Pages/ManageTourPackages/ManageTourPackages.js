import { Helmet } from "react-helmet";
import "./packages.css";
import PackageForm from "../../components/PackageForm/PackageForm";

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
