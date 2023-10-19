import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import AddProd from "./components/AddProd";
import MyCart from "./components/MyCart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AuthProv from "./components/Provider/AuthProv";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./Private/PrivateRoute";
import Products from "./components/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader :()=>fetch('http://localhost:5000/brandname')
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProd></AddProd></PrivateRoute>,
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products/:id",
        element: <PrivateRoute><Products></Products></PrivateRoute>,
        loader :({params})=>fetch(`http://localhost:5000/brandname/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProv>
      <RouterProvider router={router} />
    </AuthProv>
  </React.StrictMode>
);
