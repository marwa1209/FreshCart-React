/** @format */

import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
export default function Layout() {
  return (
    <div className={styles.host}>
      <NavBar />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
}
