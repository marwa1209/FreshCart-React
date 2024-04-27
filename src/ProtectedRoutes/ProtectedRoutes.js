/** @format */

import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes(props) {
  if (localStorage.getItem("userToken") != null) {
    return props.children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
}
export  function authProtectedRoutes(props) {
  if (localStorage.getItem("userToken") == null) {
    return props.children;
  } else {
    return <Navigate to={"/home"}></Navigate>;
  }
}
