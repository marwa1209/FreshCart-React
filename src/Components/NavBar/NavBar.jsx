/** @format */

import React from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="logo me-10" to={"home"}>
          <img src={logo} alt="Logo" />
        </Link>
        {/* Nav-links-right */}
        <ul className="flex gap-4 me-auto text-gray-500 list-none">
          <li>
            <Link to={"home"}>Home</Link>
          </li>
          <li>
            <Link to={"cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"products"}>Products</Link>
          </li>
          <li>
            <Link to={"categories"}>Categories</Link>
          </li>
          <li>
            <Link to={"brands"}>Brands</Link>
          </li>
        </ul>
        {/* Nav-icons-left */}
        <ul className="flex gap-4 ms-auto list-none">
          <li>
            <Link
              className="nav-link"
              to={"https://www.instagram.com/"}
              target="blank"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={"https://www.facebook.com/"}
              target="blank"
            >
              <i className="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={"https://www.tiktok.com/"}
              target="blank"
            >
              <i className="fab fa-tiktok"></i>
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={"https://www.twitter.com/"}
              target="blank"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={"https://www.linkedin.com/"}
              target="blank"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to={"https://www.youtube.com/"}
              target="blank"
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </li>
          <li>
            <Link className="text-capitalize cursor-pointer" to={"register"}>
              Register
            </Link>
          </li>
          <li>
            <Link className="text-capitalize cursor-pointer" to={"login"}>
              Login
            </Link>
          </li>
          <li>
            <span className="text-capitalize cursor-pointer">SignOut</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
