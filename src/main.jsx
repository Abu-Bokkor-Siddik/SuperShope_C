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
    children: [
      {
        path: '/',
        element: <h1>home</h1>
      },
      {
        path: 'orders',
        element: <h1>Orders</h1>,
        // loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <h2>inventory</h2>
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
