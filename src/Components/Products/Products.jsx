/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [isloading, setisloading] = useState(false);
  //APIS
  async function getProducts() {
    setisloading(true);
    let { data } = await axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .catch((err) => {
        setisloading(false);
        console.log(err);
      });
    if (data.data) {
      setProducts(data.data);
      setisloading(false);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <div className=" my-16">
          <h2>OUR Products</h2>
          <div className="flex flex-wrap">
            {products.map((product, index) => (
              <div
                key={index}
                className="item cursor-pointer w-full md:w-1/6  my-3"
              >
                <div className="px-4">
                  <img
                    className="mb-3 h-64  w-full block m-auto"
                    src={product.imageCover}
                    alt={product.title}
                  />
                  <h3 className="text-sm text-main-color">
                    {product.category.name}
                  </h3>
                  <h4 className="text-xl mb-4">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h4>
                  <div className="flex justify-between align-middle">
                    <div>{product.price} EGP</div>
                    <div>
                      <i className="fa-solid fa-star text-rating-color"></i>
                      <span className="text-gray-600">
                        {product.ratingsAverage}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="btn-main py-1 rounded-md mx-auto">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
