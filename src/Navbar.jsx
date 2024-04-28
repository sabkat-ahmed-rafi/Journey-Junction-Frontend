import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./firebase/Authentication";
import { GoogleAuthProvider } from "firebase/auth";
import { Bounce } from "react-awesome-reveal";


const Navbar = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { logOut, user, userLoginInfo, loading } = useContext(AuthContext);
  console.log(userLoginInfo);

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark');
  };

  const provider = new GoogleAuthProvider();
  const handleLogOut = () => {
    logOut(provider).then(() => {
      // Sign-out successful.
    });
  };

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
      {loading && (
        <span className="loading loading-bars loading-lg text-primary sticky top-[300px] left-[650px] z-10"></span>
      )}
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
          <Bounce>
          <Link to="/" className="btn gap-0 btn-ghost text-xl lg:text-2xl font-extrabold">
            <span className="text-primary">J</span> ourney{" "}
            <span className="text-primary">J</span> unction
          </Link>
          </Bounce>
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
                        alt="Photo"
                        src={
                          userLoginInfo?.photo ||
                          user?.photoURL ||
                          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        }
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
                      <Link
                        onClick={handleLogOut}
                        to="/login"
                        className="font-bold"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
              {/* Theme Controler  */}
              <div className={`app ${isDarkTheme ? 'dark' : 'light'}`}>
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value="synthwave"
                    onChange={handleThemeChange}
                  />

                  {/* sun icon */}
                  <svg
                    className={`swap-off fill-current w-10 h-10 ${isDarkTheme ? 'hidden' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className={`swap-on fill-current w-10 h-10 ${isDarkTheme ? '' : 'hidden'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
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
