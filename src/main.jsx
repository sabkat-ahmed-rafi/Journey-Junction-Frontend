import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home"
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Error from "./Error";
import AddSpot from "./AddSpot";
import AllSpot from "./AllSpot";
import MyList from "./MyList";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error/>,
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addSpot",
        element: <AddSpot></AddSpot>,
      },
      {
        path: "/allSpot",
        element: <AllSpot></AllSpot>,
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
