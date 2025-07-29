import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login({ open, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className='' >
      <dialog
        id="loginModal"
        className="modal p-2 w-[90vw] sm:w-[80vw] md:w-full max-w-md backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center bg-gray-200 fixed top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 dark:bg-gray-800 dark:text-white"
      >
        <div className="modal-box w-full"> 
          <form
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
            className="dark:bg-gray-800 p-4 rounded-lg w-full"
          >
            <button
              className="btn btn-sm btn-circle btn-ghost font-bold absolute right-2 top-2"
              onClick={() => document.getElementById("loginModal").close()}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-center">Login</h3>
            <label className="text-lg pt-4">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="w-full mt-2 mb-3 border-2 px-4 py-1 rounded-md bg-white"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
            <br />
            <label className="text-lg mt-4">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-2 mb-3 bg-white border-2 px-4 py-1 rounded-md"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
            <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-3 mt-4">
              <button
                type="submit"
                className="bg-pink-600 py-2 px-4 rounded-xl text-white hover:bg-pink-500 transition duration-200 w-full sm:w-auto"
              >
                Login
              </button>
              <p className="mt-2 text-center sm:mt-5">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => document.getElementById("loginModal").close()}
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>

    </div>

  );
}

export default Login;
