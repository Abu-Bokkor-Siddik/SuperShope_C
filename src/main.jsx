import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement:<h1>hello error</h1>,
    element: <Home></Home>,
    children: [
      
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

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
