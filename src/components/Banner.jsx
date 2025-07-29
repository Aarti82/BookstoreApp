import React from 'react'
import banner from "/public/assets/banner.png";


 function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row">
    <div className='w-full md:w-1/2 mt-12 md:mt-32'>
    <div className='space-y-12'>
      <h1 className='text-4xl font-bold'>Hello, Welcomes here to learn something <span className='text-pink-600'>new everyday!!!</span></h1>
    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid ipsum autem vitae velit, rerum quasi quae tempora. Vero nihil, modi beatae et minus vel commodi ratione consequuntur quia. Commodi.</p>
    </div>
  <div className="relative w-full max-w-md mt-5">
  <svg
    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-16 w-5 text-gray-400 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </g>
  </svg>

  <input
    type="email"
    placeholder="Enter your email to login"
    required
     className="w-full max-w-md pl-11 py-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
  />
<div>
  <button className=" bg-pink-600 py-3 px-4 mt-4 rounded-xl text-white hover:bg-pink-500 transition duration-200">
   Secondary
  </button>
  </div>
</div>

    </div>
   <div className=" w-full h-auto max-w-md md:max-w-lg lg:max-w-xl object-contain ">
  <img
    src={banner}
    alt="Banner"
    className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl object-contain  "
  />
</div>

    </div>
    </>
  );
}
export default Banner;
