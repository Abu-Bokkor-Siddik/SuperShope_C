/* eslint-disable no-undef */
// import { useContext } from "react";
import { Link } from "react-router";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthProvider, { AuthContexts } from "../AuthProvider/AuthProvider";
// import AuthProvider from "../AuthProvider/AuthProvider";

const Register = () => {
  // const auth = useContext(AuthProvider)
  // const auth = useAuth()
  const {registerWithEmail} = useContext(AuthContexts)
  // console.log(auth)
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    registerWithEmail(data?.email,data?.password)
    // console.log(auth)
    console.log(data)
  }
  // console.log(register)
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* onSubmit={formdata} */}
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                 {...register("name",{required:true})}
                 
                />
                {errors?.name && <p className="text-red-400">Name is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  {...register("photo",{required:true})}
                />
                {errors?.photo&& <p className="text-red-400">photo is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email",{required:true})}
                />
                {errors?.email && <p className="text-red-400">Email is required</p>}
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
                  {...register("password",{required:true,minLength:8})}
                />
                {errors?.password?.type==='required' && <p className="text-red-400">Password is required</p>}
                {errors?.password?.type==='minLength' && <p className="text-red-400">Password must be 8 letter</p>}
              </div>
              <p>
                If you hava an account{" "}
                <Link className="text-blue-800" to="/login">
                  Go Login
                </Link>
              </p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
