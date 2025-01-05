import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* onSubmit={handellogins} */}
          <form className="card-body">
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
                required
              />
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
                required
              />
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {/* <button onClick={googlelog} className='btn btn-primary mx-8'>google</button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
