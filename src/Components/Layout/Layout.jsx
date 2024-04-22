/** @format */

import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
