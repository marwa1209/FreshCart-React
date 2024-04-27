/** @format */

import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import PriceFormat from "../PriceFormat/PriceFormat";
import Slider from "react-slick";
import { CartContext } from "../../Context/cartContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

export default function ProducDetails() {
  let { addToCart } = useContext(CartContext);
async function addCart(id) {
let res =await addToCart(id)
if (res.data.status === "success") {
  toast.success("Product Added successfully", {
    duration: 4000,
    position: "bottom-right",
    icon: "👏",
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
  });
} else {
  toast.error("error");
}
}
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let params = useParams();
  // get specific product with id
  function getProduct(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  let { data, isLoading } = useQuery("product", () => getProduct(params.id), {
    cacheTime: 0,
  });
  return (
    <>
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container m-auto my-10">
          <div className="flex flex-wrap justify-between align-middle md:gap-0 sm:gap-20 min-[420px]:gap-20">
            <div className="md:w-4/12 sm:w-full min-[420px]:w-3/4 min-[420px]:m-auto">
              <Slider {...settings}>
                {data?.data.data.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="md:w-full"
                    alt={data?.data.data.title}
                  />
                ))}
              </Slider>
            </div>
            <div className=" md:w-8/12 min-[420px]:w-3/4 sm:w-full min-[420px]:m-auto my-auto">
              <div className="productDetails ps-16 flex flex-col gap-5">
                <h1 className="text-lg text-black">{data?.data.data.title}</h1>
                <p className="text-sm text-gray-500 px-2">
                  {data?.data.data.description}
                </p>
                <div className="font-light">
                  <h4 className="mb-2">{data?.data.data.category.name}</h4>
                  <div className="flex justify-between align-middle">
                    <PriceFormat price={data?.data.data.price} />
                    <div>
                      <i className="fa-solid fa-star text-rating-color"></i>
                      <span className="text-gray-600">
                        {data?.data.data.ratingsAverage}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  className="btn-main w-full"
                  onClick={() => addCart(data?.data.data.id)}
                >
                  <i className="fa-solid fa-plus"></i> add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
