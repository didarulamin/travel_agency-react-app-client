import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoginForm from "./LoginForm";
import "./login.css";
import { Helmet } from "react-helmet";
// import useFirebase from "../../hooks/useFirebase";

//log in components
const Login = () => {
  const { signInUsingGoogle, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogin = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="login p-4 ">
      <Helmet>
    <title>Login -  Talk Space</title>
    </Helmet>
      <div className=" form-container row ">
        <div>
          <div className="text-center">
            <h1 className="fs-3 my-2">Sign in to your account</h1>
            <p>
              Sign in to continue your therapy journey towards a happier,
              healthier you.
            </p>
          </div>
          <LoginForm></LoginForm>
          <div className="text-center ">
            <span>Don't have an account?</span>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className="text-center ">
            <span>Forgot password?</span>
            <Link to="/recovery">Reset</Link>
          </div>
        </div>
        <button onClick={handleGoogleLogin} className="btn btn-info ">
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
