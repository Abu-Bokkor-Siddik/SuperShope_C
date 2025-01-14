
import { createBrowserRouter } from "react-router";
import Error from "../Components/Error";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayouts from "../layoutes/MainLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoardLayout from "../layoutes/DashBoardLayout";
import Private from "./private/Private";

export const router = createBrowserRouter([
    {
      path: '/',
      errorElement:<Error></Error>,
      element: <MainLayouts></MainLayouts>,
      children: [
        
        {
          path: '/',
          element: <Home></Home>
          // loader: cartProductsLoader
        },
        {
          path: 'about',
          element: <About></About>
          // loader: cartProductsLoader
        },
        {
          path: 'contact',
          element: <Private><Contact></Contact></Private>
        },
        {
          path:'register',
          element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>
        }
      ]
    },
    {
      path: '/dashboard',
      errorElement:<Error></Error>,
      element: <DashBoardLayout></DashBoardLayout>,
      children:[{}]
    }

  ])