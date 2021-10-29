import React, { useState } from "react";
import { useForm } from "react-hook-form";

import useAuth from "../../hooks/useAuth";

const PassResetForm = () => {
  const { handleResetPassword } = useAuth();
  //for error msg
  const [successemail, setSuccessemail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //react hook form on submit
  const onSubmit = (data) => {
    // registerNewUser(data);

    handleResetPassword(data);
    setSuccessemail(true);
  };

  //react hook form
  return (
    <div className="d-flex flex-column text-center">
      {successemail && <span className="m-4">Recovery email sent</span>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mt-3 p-2"
          placeholder="email"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {/* errors will return when field validation fails  */}

        {errors.email && <span className="m-4">This field is required</span>}
        <br />

        <input
          className="btn btn-info my-4"
          type="submit"
          value="Reset password"
        />
      </form>
    </div>
  );
};
export default PassResetForm;
