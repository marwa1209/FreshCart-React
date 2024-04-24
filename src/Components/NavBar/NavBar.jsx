/** @format */

import React from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="logo me-10" to={"home"}>
          <img src={logo} alt="Logo" />
        </Link>
        <div className="flex gap-4 me-auto text-gray-500">
          <Link to={"home"}>Home</Link>
          <Link to={"cart"}>Cart</Link>
          <Link to={"products"}>Products</Link>
          <Link to={"categories"}>Categories</Link>
          <Link to={"brands"}>Brands</Link>
        </div>
        <ul class="flex gap-4 ms-auto list-none">
          <li>
            <Link
              class="nav-link"
              to={"https://www.instagram.com/"}
              target="blank"
            >
              <i class="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link
              class="nav-link"
              to={"https://www.facebook.com/"}
              target="blank"
            >
              <i class="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link
              class="nav-link"
              to={"https://www.tiktok.com/"}
              target="blank"
            >
              <i class="fab fa-tiktok"></i>
            </Link>
          </li>
          <li>
            <Link
              class="nav-link"
              to={"https://www.twitter.com/"}
              target="blank"
            >
              <i class="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link
              class="nav-link"
              to={"https://www.linkedin.com/"}
              target="blank"
            >
              <i class="fab fa-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link
              class="nav-link"
              to={"https://www.youtube.com/"}
              target="blank"
            >
              <i class="fab fa-youtube"></i>
            </Link>
          </li>
          <li>
            <span class="text-capitalize cursor-pointer">SignOut</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
