import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const form = useForm();
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  const formSubmit = (data) => {
    console.log("Form data: ", data);
    try {
      axios
        .post("https://dummyjson.com/auth/login", {
          username: data.username,
          password: data.password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            navigate("/users");
          }
        });
    } catch (error) {
      console.error("Axios Error: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                // value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message: "Invalid password format",
              },
            })}
          />
          <p className="error">{errors.password?.message}</p>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Login;
