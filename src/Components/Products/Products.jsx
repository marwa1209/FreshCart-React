/** @format */

import axios from "axios";
import Loader from "../Loader/Loader";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import PriceFormat from "../PriceFormat/PriceFormat";
export default function Products({ limit }) {
  //APIS
  function getAllProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let { data, isLoading, isError } = useQuery("products", getAllProducts);
  console.log(isError);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" my-16 container m-auto">
          <h2>OUR Products</h2>
          <div className="flex flex-wrap">
            {data?.data.data
              .slice(0, limit ? 18 : data.data.data.length)
              .map((product, index, limit) => (
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
ratingsAverage
                      </div>
                    </div>
                  </Link>
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
