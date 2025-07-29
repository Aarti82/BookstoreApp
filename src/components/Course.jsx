import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Course() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/list.json')
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.error('Failed to load JSON:', err));
  }, []);

  const categoriesToShow = ['free', 'Horror', 'Love', 'Pics', 'Animals', 'Weather', 'Music', 'Sports'];
  const filteredData = list.filter(item => categoriesToShow.includes(item.category));

  return (
    <div className="min-h-80 flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-900  ">
      <div className="max-w-3xl text-center mt-20">
        <h1 className="font-semibold text-3xl sm:text-4xl text-gray-900 dark:text-white">
          We're delighted to have you <span className="text-pink-600">Here! 🎉</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, vitae delectus cupiditate veritatis, hic iste soluta non sint temporibus culpa illum quos quibusdam similique nisi labore? In nesciunt expedita assumenda.
        </p>
        <Link to="/">
          <button className="bg-pink-600 py-2 px-4 mt-4 rounded text-white hover:bg-pink-500 transition duration-200">
            Back
          </button>
        </Link >
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {filteredData.map((item) =>
          item?.image ? (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border-2 p-4 flex flex-col hover:scale-105 transform transition duration-100 mb-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-30 w-full object-cover rounded bg-gray-800"
              />
              <h3 className="text-lg font-semibold mt-2 text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <p className="font-medium text-sm  text-gray-600 dark:text-gray-300">{item.title}</p>
              <div className=" flex justify-between  mt-4 space-x-2 pb-3 ">
                <div className="text-xl font-medium text-pink-600 rounded-xl ">₹{item.price}</div>
                <div className="text-sm border-[2px] border-gray-400 rounded-xl px-3 py-1 dark:bg-pink-900 hover:bg-pink-600 hover:text-white hover:border-0 cursor-pointer">
                  Buy now
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Course;
