import { useContext, useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router";
import { AuthContexts } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const [sroll, setScroll] = useState(false);
  const { user, logout } = useContext(AuthContexts);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const logOut = () => {
    logout()
      // eslint-disable-next-line no-unused-vars
      .then((res) => Navigate('/'))
      .catch((err) => console.log(err));
      
  };
  return (
    <div className="z-30 ">
      <div className="drawer z-50  fixed   ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col">
          {/* Navbar */}
          <div
            style={
              sroll
                ? { backdropFilter: "blur(50px)" }
                : { backgroundColor: "transparent" }
            }
            className="w-full  h-auto lg:h-20 navbar   "
          >
            {/**navbar 1200px */}
            <div className=" w-full  lg:max-w-[1200px]   mx-auto ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block bg-white  w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className=" flex flex-1   px-2 mx-2">
                {/**here is logo and nav bar  */}
                <div className="flex   lg:justify-start items-center ">
                  <pre className="text-2xl  text-[#06283D] font-bold">
                    𝓼𝓲𝓭𝓭𝓲𝓴.𝓼𝓱𝓸𝓹𝓮
                  </pre>
                </div>
              </div>
              <div className="flex-none  hidden lg:block">
                <div className="menu  menu-horizontal">
                  {/* Navbar menu content here */}

                  <div className="flex  gap-10 justify-center items-center  ">
                    <NavLink
                      className="text-lg text-[#06283D]  font-semibold"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      className="text-lg text-[#06283D]  font-semibold"
                      to="/about"
                    >
                      About
                    </NavLink>
                    <NavLink
                      className="text-lg text-[#06283D]  font-semibold"
                      to="/contact"
                    >
                      Contact
                    </NavLink>

                    {user ? (
                      <NavLink
                        onClick={logOut}
                        className="text-lg text-[#06283D]  font-semibold"
                        to="login"
                      >
                        LogOut
                      </NavLink>
                    ) : (
                      <NavLink
                        className="text-lg text-[#06283D]  font-semibold"
                        to="login"
                      >
                        Login
                      </NavLink>
                    )}
                  </div>

                  {/** user name and profile would be here  */}

                  <div className="flex gap-3 justify-center items-center  "></div>
                </div>
              </div>
              {/**end */}
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side  ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-[#DFF6FF] p-4 w-80 min-h-full ">
            {/* Sidebar content here */}
            <div className="flex flex-col gap-2">
              <NavLink className="text-lg text-[#06283D]  font-semibold" to="/">
                Home
              </NavLink>
              <NavLink
                className="text-lg text-[#06283D]  font-semibold"
                to="/about"
              >
                ABOUT
              </NavLink>

              <NavLink
                className="text-lg text-[#06283D]  font-semibold"
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
