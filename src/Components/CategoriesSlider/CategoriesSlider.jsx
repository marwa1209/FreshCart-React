/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Loader from "../Loader/Loader";

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);
  const [isloading, setisloading] = useState(false);
  //APIS
  async function getcategories() {
    setisloading(true);
    let { data } = await axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .catch((err) => {
        setisloading(false);
        console.log(err);
      });
    if (data.data) {
      setCategories(data.data);
      setisloading(false);
    }
  }
  useEffect(() => {
    getcategories();
  }, []);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <Slider {...settings} className="mb-6">
          {categories.map((cat, index) => (
            <div key={index} className="item">
              <img src={cat.image} className="w-full h-52" alt={cat.name} />
              <h5>{cat.name}</h5>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
}
