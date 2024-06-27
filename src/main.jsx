import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './components/Home.jsx';
import Details from './components/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  
  },
  {
    path: "/contact",
    element: <h1>Contact Us</h1>,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  
)
