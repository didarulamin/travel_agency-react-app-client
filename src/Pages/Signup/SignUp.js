import React from "react";
import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import "../Login/login.css";
import SignUpFrom from "./SignupForm";
// import useFirebase from "../../hooks/useFirebase";

const SignUp = () => {
  const { signInUsingGoogle } = useAuth();
  const handleGoogleLogin = () => {
    signInUsingGoogle();
  };

  //signup form component
  return (
    <div className="login p-4 mb-5">
      <div className=" form-container row ">
        <div>
          <div className="text-center">
            <h1 className="fs-3 my-2">Sign Up</h1>
            <p>
              Sign up in to continue your therapy journey towards a happier,
              healthier you.
            </p>
          </div>
          <SignUpFrom></SignUpFrom>
          <div className="text-center ">
            <span>Already have an account?</span>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
        <button onClick={handleGoogleLogin} className="btn btn-info my-3 ">
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
