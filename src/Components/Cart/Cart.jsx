/** @format */

import React, { useContext} from "react";

import { Helmet } from "react-helmet";
import { CartContext } from "../../Context/cartContext";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import PriceFormat from "../PriceFormat/PriceFormat";
export default function Cart() {
  let { getCart } = useContext(CartContext);
  function getCartItems() {
    return getCart();
  }
  let { data, isLoading, isError } = useQuery("products", getCartItems);
  const products = data?.data.data.products;
  console.log(data?.data.data);
  if (isError === true) {
    toast.error("error");
  }
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="container m-auto bg-light-color p-3">
            <h1 className="text-xl">Shop Cart</h1>
            <div className="flex gap-1 text-main-color">
              <h3>Total Price: </h3>
              <PriceFormat price={data?.data.data.totalCartPrice} />
            </div>
            {products.map((product, index) => (
              <div key={index} className="relative my-5">
                <div className="flex flex-wrap justify-between align-middle after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[95%]  after:h-[1px] after:bg-gray-500">
                  <div className="w-1/2 flex flex-wrap justify-between align-middle">
                    <figure className="w-2/12">
                      <img
                        className="w-full"
                        src={product.product.imageCover}
                        alt={product.product.title}
                      />
                    </figure>
                    <div className="w-10/12">
                      <div className="px-4 flex flex-col">
                        <h2>{product.product.title}</h2>
                        <div className="flex gap-1 text-main-color">
                          <h3>Price: </h3>
                          <PriceFormat price={product.price} />
                        </div>
                        <span><link><i class="fa-solid fa-trash-can text-main-color text-lg  me-2"></i> Remove</link></span>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">j</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
