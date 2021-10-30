import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

//react hook form
const SignUpFrom = () => {
  const { registerNewUser } = useAuth();
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    registerNewUser(data);
    setSuccess(true);

    axios
      .post("http://localhost:5000/api/signup/admin/", { data })
      .then((response) => {
        console.log(response);
      });
  };

  //react hook form
  return (
    <div className="d-flex flex-column text-center">
      {/* Page title using helmet */}
      <Helmet>
        <title>SignUp - Talk Space</title>
      </Helmet>
      {success && (
        <p
          className="
      text-danger fs-4"
        >
          Your account created <br /> verification link has been sent
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control my-3 p-2"
          placeholder="User name"
          {...register("username", {
            required: true,
          })}
        />
        {/* errors will return when field validation fails  */}
        {errors.username && <p>This field is required</p>}
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
        <div>
          <input
            className="form-check-input m-1"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            {...register("isAdmin", {})}
          />
          <label className="form-check-label " for="flexCheckDefault">
            Request for admin signup?
          </label>
        </div>

        <input className="btn btn-info my-4 " type="submit" value="Sign up" />
      </form>
    </div>
  );
};
export default SignUpFrom;
