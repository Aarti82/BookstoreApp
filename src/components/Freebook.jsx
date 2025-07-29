import React, { useEffect, useState } from "react";
import Card from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Freebook() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  const filteredData = list.filter((data) => data.category === "free");
  console.log("Filtered Data", filteredData); 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    
    ],
  };

  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-10 py-6">
        <h1 className="font-semibold text-xl md:text-2xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, non cupiditate. Odio consequatur mollitia molestiae quos veniam dolorem temporibus perferendis, amet totam soluta nobis voluptas quasi voluptatem porro cum distinctio.
        </p>
      </div>

     <div className="w-full px-4 md:px-10 pb-10">
        <Slider {...settings}>
          {filteredData.map((item) => (

            <Card item={item} key={item.id} />

          ))}
        </Slider>

      </div>
    </div>
  );
}

export default Freebook;
