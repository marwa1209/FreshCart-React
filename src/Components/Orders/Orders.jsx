/** @format */

import React, { useContext } from "react";

import styles from "./Orders.module.css";
import { paymentContext } from "../../Context/payment";
import { useQuery } from "react-query";
export default function Orders() {
  let { getAllOrders } = useContext(paymentContext);
  function Allorders() {
    return getAllOrders();
  }
   let { data, isLoading, isError } = useQuery("orders", Allorders);
   console.log(data);
  return <div className="container bg-green-500 p-4 m-auto"><h2 className="text-center text-white">Congratulations</h2></div>;
}
