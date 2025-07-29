import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log("Login Data:", data);
    };
  return (
    <dialog
      id="loginModal"
      className="modal flex item-center justify-center mt-15 border shadow-md p-5 rounded-md w-[350px] sm:w-[400px] left-1/3 "
      
    >
      <div className="modal-box w-[350px] sm:w-[400px]">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          <button
            className="btn btn-sm btn-circle btn-ghost font-bold absolute right-2 top-2"
            onClick={() => window.history.back()} 
          >
            ✕
          </button>
          <h3 className="text-xl font-bold mb-4 text-center">Signup</h3>

          <label className="text-lg">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full mt-2 mb-3 border-2 px-4 py-1 rounded-md bg-white"
          {...register("name", { required: true })}
            />
          {errors.email && <span className='text-red-500 text-sm  '>This field is required</span>}
<br />

          <label className="text-lg">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full mt-2 mb-3 border-2 px-4 py-1 rounded-md bg-white"
           {...register("email", { required: true })}
            />
          {errors.email && <span className='text-red-500 text-sm  '>This field is required</span>}
<br />
          <label className="text-lg">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full mt-2 mb-3 bg-white border-2 px-4 py-1 rounded-md"
            {...register("password", { required: true })}
            />
          {errors.email && <span className='text-red-500 text-sm  '>This field is required</span>}
          <div className="flex justify-around mt-4 gap-2">
            <button
              type="submit"
              className="bg-pink-600 py-2 px-4 rounded-xl text-white hover:bg-pink-500 transition duration-200 "
            >
              Signup
            </button>
            <p>
              Have account?{" "}
              <Link
                to="/"
                className="text-blue-500 underline cursor-pointer"
                onClick={() => document.getElementById("loginModal").showModal()}
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Signup;
