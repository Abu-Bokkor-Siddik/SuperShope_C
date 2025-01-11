import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContexts } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { logins,user } = useContext(AuthContexts);
  console.log(user,'user here')
  // console.log(logins)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
 logins(data?.email,data?.password)
    //  console.log(data)
    };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* onSubmit={handellogins} */}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <p className="text-center text-3xl font-semibold">Login</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors?.email && (
                <p className="text-red-400">Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors?.password?.type === "required" && (
                <p className="text-red-400">Password is required</p>
              )}
              {errors?.password?.type === "minLength" && (
                <p className="text-red-400">Password must be 8 letter</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                name="conformPassword"
                type="password"
                placeholder="conformPassword"
                className="input input-bordered"
                {...register("conformPassword", {
                  required: true,
                  minLength: 8,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Your password not match.";
                    }
                  },
                })}
              />
              {errors?.conformPassword && (
                <p className="text-red-400">Password is not match</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>
              If you have no account{" "}
              <Link className="text-blue-800" to="/register">
                Go Register
              </Link>
            </p>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          {/* <button onClick={googlelog} className='btn btn-primary mx-8'>google</button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
