/* eslint-disable no-undef */
// import { useContext } from "react";
import { Link, useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import  { AuthContexts } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
// import AuthProvider from "../AuthProvider/AuthProvider";

const Register = () => {
  // const auth = useContext(AuthProvider)
  // const auth = useAuth()
  const { registerWithEmail } = useContext(AuthContexts);
  // console.log(auth)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    
    const email = data?.email;
    const role = "buyer";
    const status = "pending";
    const wishlist = [];
    const userInfo = {email,role,status,wishlist}
    registerWithEmail(data?.email, data?.password).then(()=>{
      axios.post('http://localhost:3000/users',userInfo)
      .then(res => {
        if (res?.data?.insertedId) {
          Swal.fire({
            title: "Register Successfully",
            icon: "success",
            draggable: true
          });
        }
        navigate("/")
        console.log(res.data,'data')
        })
    })
    console.log(userInfo,'info here')
   
    // console.log(data);
  };
  // console.log(register)
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* onSubmit={formdata} */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors?.name && (
                  <p className="text-red-400">Name is required</p>
                )}
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
                  {...register("photo", { required: true })}
                />
                {errors?.photo && (
                  <p className="text-red-400">photo is required</p>
                )}
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
