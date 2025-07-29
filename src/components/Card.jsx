import React from 'react';

function Card({ item }) {
     if (!item || !item.image) return null;
    return (
        <div className="bg-base-100 shadow-xl hover:shadow-xl transform border rounded-md dark:border-white hover:scale-105 transition duration-300 ease-in-out mb-5 mx-auto w-full max-w-xs sm:max-w-sm md:w-80">
            <figure className="overflow-hidden h-58 sm:h-56 md:h-64 ">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover bg-sky-200" />
            </figure>
            <div className="card-body text-sm px-3 mt-2">
                <h2 className="card-title flex flex-wrap gap-2 items-center">
                    <div className="font-semibold">{item.name}</div>
                    {item.price === 0 && (
                        <div className="bg-pink-600 rounded-2xl px-2 text-white">
                            {item.category}
                        </div>
                    )}
                </h2>
                <p>{item.title}</p>
                <div className="card-actions flex justify-between items-center mt-4 space-x-2 pb-5 px-2">
                    <div className="text-sm border-2 border-gray-400 rounded-xl px-2 hover:bg-pink-600 hover:text-white hover:border-0">
                        ₹{item.price}
                    </div>
                    <div className="text-sm border-[2px] border-gray-400 rounded-xl px-3 py-1 hover:bg-pink-600 hover:text-white hover:border-0 cursor-pointer">
                        Buy now
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
