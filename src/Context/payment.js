/** @format */

import axios from "axios";
import { createContext } from "react";

export let paymentContext = createContext();
let headers = {
  headers: {
    token: localStorage.getItem("userToken"),
  },
};
function pay(address,id) {
  return axios
    .post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,
      {
        shippingAddress: address
      },
      headers
    )
    .then((res) => res)
    .catch((err) => err);
}

export default function PaymentContextProvider(props) {
  return (
    <paymentContext.Provider value={{ pay}}>
      {props.children}
    </paymentContext.Provider>
  );
}
