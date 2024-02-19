import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  const formSubmit = async (data) => {
    try {
      const res = await axios.post(" https://dummyjson.com/auth/login", data);
      navigate("/users", { state: res.data });
    } catch (error) {
      console.log("Posting user error: ", error);
    }
  };

  return (
    <>
      <div className="h-screen w-auto flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl text-gray-600">Login Form</h1>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-1 m-4"
        >
          <label
            htmlFor="username"
            className="text-start text-xl text-gray-500 uppercase mt-3"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            {...register("username", {
              required: "Username is required",
            })}
            className="border-2 border-slate-600 rounded-md p-1"
          />
          <p className="text-start text-sm text-red-600">
            {errors.username?.message}
          </p>

          <label
            htmlFor="password"
            className="text-start text-xl text-gray-500 uppercase mt-3"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
            className="border-2 border-slate-600 rounded-md p-1"
          />
          <p className="text-start text-sm text-red-600">
            {errors.password?.message}
          </p>

          <button className=" mt-4 border-2 text-xl border-gray-700 py-1 px-2 rounded-md hover:bg-slate-400 hover:text-white">
            Submit
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
};

export default Login;
