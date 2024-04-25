import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="flex justify-center py-2">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-slate-100 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Sign up</h1>
          <form noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block ">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border border-slate-200  dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block ">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-slate-200  dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block ">
                PhotoURL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="PhotoURL"
                className="w-full px-4 py-3 rounded-md border border-slate-200  dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md  border border-slate-200 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-md dark:text-gray-50 bg-primary font-bold">
              Sign in
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Already have an account?
            <Link
              to="/register"
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-gray-800"
            >
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
