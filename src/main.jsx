import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement:<h1>hello error</h1>,
    element: <App></App>,
    // children: [
    //   {
    //     path: '/',
    //     element: <Shop></Shop>
    //   },
    //   {
    //     path: 'orders',
    //     element: <Orders></Orders>,
    //     loader: cartProductsLoader
    //   },
    //   {
    //     path: 'inventory',
    //     element: <Inventory></Inventory>
    //   },
    //   {
    //     path:'checkout',
    //     element: <Checkout></Checkout>
    //   },
    //   {
    //     path: 'login',
    //     element: <Login></Login>
    //   }
    // ]
  }
])

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
