/** @format */

import React, { useContext, useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import { CartContext } from "../../Context/cartContext";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import PriceFormat from "../PriceFormat/PriceFormat";
export default function Cart() {
  let { getCart, deleteFromCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [isloading, setisloading] = useState(false);
  // get cart items
  async function getCartItems() {
    setisloading(true);
    let {data} =  await getCart();
    console.log(data)
        if (data.data) {
          console.log(data.data)
          setProducts(data?.data.products);
          setisloading(false);
        }
  }
  //APIS
  useEffect(() => {
    getCartItems();
  }, []);
  //delete cart specific  item
  async function deleteCartItem(id) {
    let response = await deleteFromCart(id);
    setProducts(response?.data.data.products);
  }
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      {isloading ? (
        <Loader />
      ) : (
        <>
          <div className="container m-auto my-12 bg-light-color p-3">
            <h1 className="text-xl">Shop Cart</h1>
            <div className="flex gap-1 text-main-color">
              <h3>Total Price: </h3>

            </div>
            {products.map((product, index) => (
              <div key={index} className="relative my-5">
                <div className="flex flex-wrap justify-between align-middle after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[95%]  after:h-[1px] after:bg-gray-500">
                  <div className="w-1/2 flex flex-wrap justify-between align-middle">
                    <figure className="w-2/12 my-5">
                      <img
                        className="w-full"
                        src={product.product.imageCover}
                        alt={product.product.title}
                      />
                    </figure>
                    <div className="w-10/12 my-auto">
                      <div className="px-4 flex flex-col">
                        <h2>{product.product.title}</h2>
                        <div className="flex gap-1 text-main-color">
                          <h3>Price: </h3>
                          <PriceFormat price={product.price} />
                        </div>
                        <button
                          onClick={() => deleteCartItem(product.product._id)}
                          className="cursor-pointer my-5 ms-0 text-start"
                        >
                          <i className="fa-solid fa-trash-can text-main-color text-lg  me-2"></i>{" "}
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 my-auto flex gap-3 items-center justify-end p-2">
                    <button className="btn-fun me-0">+</button>
                    <p className=" text-center text-black">{product.count}</p>
                    <button className="btn-fun me-0">-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

