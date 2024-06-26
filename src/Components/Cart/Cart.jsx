/** @format */

import React, { useContext, useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import { CartContext } from "../../Context/cartContext";
import Loader from "../Loader/Loader";
import PriceFormat from "../PriceFormat/PriceFormat";
import { Link } from "react-router-dom";
export default function Cart() {
  let { getCart, deleteFromCart, updateProductQuan } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(false);
  // get cart items
  async function getCartItems() {
    setisloading(true);
    let { data } = await getCart();
    if (data?.data) {
      setProducts(data?.data.products);
    }
    if (data) {
      setdata(data);
    }
    setisloading(false);
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
  async function updatequantity(id, count) {
    let data = await updateProductQuan(id, count);
    setProducts(data?.data.data.products);
    if (count === 0) {
      deleteCartItem(id);
    }
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
        {products.length > 0 ? (
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
                    <button
                      onClick={() =>
                        updatequantity(product.product._id, product.count + 1)
                      }
                      className="btn-fun me-0"
                    >
                      +
                    </button>
                    <p className=" text-center text-black">{product.count}</p>
                    <button
                      onClick={() =>
                        updatequantity(product.product._id, product.count - 1)
                      }
                      className="btn-fun me-0"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to={"/checkout/" + data?.data._id}
              className="btn-main lg:w-3/12 md:w-4/12 min-[420px]:w-1/2  text-center"
            >
              checkout
            </Link>
          </div>
        ) : (
          <div className="container m-auto my-12 bg-light-color p-3 ">
            <h1> No items in the cart</h1>
            <Link
              to={"/products"}
              className="btn-main lg:w-3/12 md:w-4/12 min-[420px]:w-1/2 text-center"
            >
              Add Some Products
            </Link>
          </div>
        )}
      </>
    )}
  </>
);


}
