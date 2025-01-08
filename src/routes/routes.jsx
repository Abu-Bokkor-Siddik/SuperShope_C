
import { createBrowserRouter } from "react-router";
import Error from "../Components/Error";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayouts from "../layoutes/MainLayouts";

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
          element: <Contact></Contact>
        },
        {
          path:'checkout',
          element: <h2>check</h2>
        },
        {
          path: 'login',
          element: <h4>Login</h4>
        }
      ]
    }
  ])