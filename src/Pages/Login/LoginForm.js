import React, { useState } from "react";
import { useForm } from "react-hook-form";

import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Form = () => {
  const { signInUsingEmailAndPassword, setUser, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  //state for error handling
  const [loginSuccess, setLoginSuccess] = useState(false);

  const redirect_uri = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // registerNewUser(data);
    const { email, password } = data;
    signInUsingEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        history.push(redirect_uri);
        // ...
      })
      .catch((error) => {
        setLoginSuccess(false);
      })
      .finally(() => {
        setIsLoading(false);
        setLoginSuccess(!false);
      });
  };

  //return react hook form
  return (
    <div className="d-flex flex-column text-center">
      {loginSuccess && (
        <span className="text-danger fs-4">Password or email is wrong</span>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="form-control my-3 p-2"
          placeholder="email"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {/* errors will return when field validation fails  */}
        {errors.email && <p>This field is required</p>}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="form-control my-3 p-2 "
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.password && <p>This field is required</p>}

        <input className="btn btn-info my-4" type="submit" value="Sign in" />
      </form>
    </div>
  );
};
export default Form;
