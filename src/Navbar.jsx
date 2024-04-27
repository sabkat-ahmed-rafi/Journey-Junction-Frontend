import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./firebase/Authentication";
import { GoogleAuthProvider } from "firebase/auth";

const Navbar = () => {
  
  const {logOut, user, userLoginInfo} = useContext(AuthContext)
  console.log(userLoginInfo)


  const provider = new GoogleAuthProvider();
  const handleLogOut = () => {
    logOut(provider)
    .then(() => {
      // Sign-out successful.
    })
  }


  const li = (
    <>
      <li className="font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold">
        <Link to="/addSpot">Add Tourists Spot</Link>
      </li>
      <li className="font-bold">
        <Link to="/allSpot">All Tourists Spot</Link>
      </li>
      <li className="font-bold">
        <Link to="/myList">My List</Link>
      </li>
      <li className="font-bold">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="font-bold">
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {li}
            </ul>
          </div>
          <Link to="/" className="btn gap-0 btn-ghost text-2xl font-extrabold">
            <span className="text-primary">J</span> ourney{" "}
            <span className="text-primary">J</span> unction
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{li}</ul>
        </div>
        <div className="navbar-end space-x-4">
          {/* User, Login, Register, Buttons */}

          {user ? (
            <>
            <section>
              <div className="relative group">
                <div className="btn btn-ghost btn-circle avatar">
                  <div className="w-14 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={userLoginInfo?.photo || user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                    />
                  </div>
                </div>
                <ul className="absolute right-5 mt-0 z-[6] p-2 shadow menu menu-sm dropdown-content bg-slate-100 rounded-box w-52 hidden group-hover:block disappear-3s ">
                  <li>
                    <a className="justify-between font-bold">
                      {userLoginInfo?.name || user?.displayName}
                      <span className="badge font-bold">New</span>
                    </a>
                  </li>
                  <li>
                    <Link onClick={handleLogOut} to="/login" className="font-bold">Logout</Link>
                  </li>
                </ul>
              </div>
            </section>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-primary text-white font-bold hover:text-black"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn bg-primary text-white font-bold hover:text-black"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
