/** @format */

import axios from "axios";
import Loader from "../Loader/Loader";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import PriceFormat from "../PriceFormat/PriceFormat";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
export default function Products({ limit }) {
let { addToCart } = useContext(CartContext);
async function addCart(id) {
let {data} =await addToCart(id)
console.log(data)
if (data.status==="success") {
   toast.success("Product Added successfully", {
     duration: 4000,
     position: "bottom-right",
     icon: "👏",
     iconTheme: {
       primary: "#000",
       secondary: "#fff",
     },
   });
}
else{
  toast.error("error")
}
}
  function getAllProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let { data, isLoading, isError } = useQuery("products", getAllProducts);
  console.log(isError);
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" my-16 container m-auto">
          <h2>OUR Products</h2>
          <div className="flex flex-wrap">
            {data?.data?.data
              .slice(0, limit ? 18 : data.data.data.length)
              .map((product, index) => (
                <div
                  key={index}
                  className="item xl:w-1/6 lg:w-1/3 md:w-3/6 min-[420px]:w-full my-3"
                >
                  <Link to={"/details/" + product.id}>
                    <div className="px-4  cursor-pointer">
                      <img
                        className="mb-3 h-64  xl:w-full  min-[420px]:w-[80%] block m-auto"
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
                        <PriceFormat price={product.price} />
                        <div>
                          <i className="fa-solid fa-star text-rating-color"></i>
                          <span className="text-gray-600">
                            {product.ratingsAverage}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <button
                    className="btn-main py-1 rounded-md mx-auto"
                    onClick={() => addCart(product.id)}
                  >
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
