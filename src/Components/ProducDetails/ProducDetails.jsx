/** @format */

import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import PriceFormat from "../PriceFormat/PriceFormat";

export default function ProducDetails() {
  let params = useParams();
  console.log(params);
  // get specific product with id
  function getProduct(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  let { data, isLoading } = useQuery("product", () =>
    getProduct(params.id)
  );
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container m-auto">
          <div className="flex flex-wrap justify-between align-middle">
            <div className="md:w-4/12 sm:w-full min-[420px]:w-3/4 min-[420px]:m-auto">
              <img
                src={data?.data.data.imageCover}
                className="md:w-full"
                alt={data?.data.data.title}
              />
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
                <button className="btn-main w-full">
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
