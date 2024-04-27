/** @format */

import axios from "axios";
import Loader from "../Loader/Loader";
import { useQuery } from "react-query";
export default function Products() {
  //APIS
  function getAllProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
 let {data,isLoading,isError} = useQuery("products",getAllProducts);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" my-16">
          <h2>OUR Products</h2>
          <div className="flex flex-wrap">
            {data?.data.data.map((product, index) => (
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
