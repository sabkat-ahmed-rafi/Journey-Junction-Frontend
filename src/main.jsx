import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Error from "./Error";
import AddSpot from "./AddSpot";
import AllSpot from "./AllSpot";
import MyList from "./MyList";
import Authentication from "./firebase/Authentication";
import PrivateRoute from './PrivateRoute';
import SpotDetails from "./component/SpotDetails";
import UpdateSpot from "./component/UpdateSpot";
import CountryWise from "./component/CountryWise";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
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
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>,
      },
      {
        path: "/allSpot",
        element: <AllSpot></AllSpot>,
        
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      },
      {
        path: "/addSpot/spotDetails/:id",
        element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/addSpot/spotDetails/${params.id}`)
      },
      {
        path:"/updateSpot/:id",
        element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/updateSpot/${params.id}`)
      },
      {
        path: "/contries/:id",
        element: <CountryWise></CountryWise>,
        loader: ({params}) => fetch(`http://localhost:3000/contries/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
      <RouterProvider router={router} />
    </Authentication>
  </React.StrictMode>
);
