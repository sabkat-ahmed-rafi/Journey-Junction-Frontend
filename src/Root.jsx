import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthContext } from "./firebase/Authentication";



const Root = () => {

  const {loading} = useContext(AuthContext)

  return (
    
    <>
    {loading && <span className="loading loading-bars loading-lg text-primary sticky top-[300px] left-[650px] z-10"></span>}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
