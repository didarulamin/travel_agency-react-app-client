import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import "../Login/login.css";
import PassResetForm from "./PassResetForm";
// import useFirebase from "../../hooks/useFirebase";

//password reset component
const PassReset = () => {
  const { signInUsingGoogle } = useAuth();

  const handleGoogleLogin = () => {
    signInUsingGoogle();
  };

  return (
    <div className="login p-4 ">
      {/* Page title using helmet */}
      <Helmet>
        <title>Pass reset- Talk Space</title>
      </Helmet>

      <div className=" form-container row shadow-lg p-3 bg-body rounded">
        <div>
          <div className="text-center">
            <h1 className="fs-3 my-2">Provide your email</h1>
          </div>
          <PassResetForm></PassResetForm>

          <div className="text-center ">
            <span>Don't have an account?</span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
        <button onClick={handleGoogleLogin} className="btn btn-info ">
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default PassReset;
