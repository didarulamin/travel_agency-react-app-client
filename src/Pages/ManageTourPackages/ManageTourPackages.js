import { Helmet } from "react-helmet";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./packages.css";
const ManageTourPackages = () => {
  const { handleSubmit, reset, register } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(user.uid);
    const submitBy = user.uid;
    axios
      .post("http://localhost:5000/api/addTourPackage/", { data, submitBy })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

    reset();
  };

  return (
    <div>
      <Helmet>
        <title>Manage Tour Packages</title>
      </Helmet>

      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center fs-2 m-2">Add Tour Packages</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="btnstyle flex-column ">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              className="form-control m-2 "
              name="title"
              {...register("title")}
            />
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              className="form-control m-2"
              name="Price"
              {...register("price")}
            />
            <TextField
              id="outlined-basic"
              label="Rating"
              variant="outlined"
              className="form-control m-2"
              name="Price"
              {...register("rating")}
            />
            <TextField
              id="outlined-basic"
              label="Destination"
              variant="outlined"
              name="Destination"
              className="form-control m-2"
              {...register("Destination")}
            />
            <TextField
              id="outlined-basic"
              label="Departure"
              variant="outlined"
              name="Departure"
              className="form-control m-2"
              {...register("Departure_place")}
            />
            <TextField
              id="outlined-basic"
              label="Departure Time"
              variant="outlined"
              name="Departure Time"
              className="form-control m-2"
              {...register("departure_time")}
            />
            <TextField
              id="outlined-basic"
              label="Accommodation"
              variant="outlined"
              name="Accommodation"
              className="form-control m-2"
              {...register("Accommodation")}
            />
            <TextField
              id="outlined-basic"
              label="Destination image"
              variant="outlined"
              name="Destination image"
              className="form-control m-2"
              {...register("des_img_url")}
            />
            <TextField
              id="outlined-basic"
              label="Return Time"
              variant="outlined"
              name="Destination image"
              className="form-control m-2"
              {...register("return_time")}
            />
            <TextField
              id="outlined-basic"
              label="Duration"
              variant="outlined"
              name="Destination image"
              className="form-control m-2"
              {...register("tour_duration")}
            />
            <textarea
              className="form-control m-2 border border-darken-3"
              placeholder="Description"
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("description")}
            ></textarea>
            <textarea
              className="form-control m-2 border border-darken-3"
              placeholder="What´s Included"
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("included")}
            ></textarea>
            <textarea
              className="form-control m-2 border border-darken-3"
              placeholder="Not Included"
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("not_included")}
            ></textarea>
          </div>
          <input className="form-control m-2 btn btn-info" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ManageTourPackages;
