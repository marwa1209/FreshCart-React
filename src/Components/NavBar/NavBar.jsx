/** @format */

import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../../Context/token";
export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  let { token, setToken } = useContext(TokenContext);
  let navigate = useNavigate();
  const displayMenueBars = () => {
    setShowMenu(!showMenu);
  };
  function logOut() {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/login");
    setShowMenu(false);
  }
  useEffect(() => {
    setShowMenu(false);
  }, []);
  return (
    <nav className="py-4 w-full  relative z-30">
      <div className="container mx-auto flex justify-between items-center px-2">
        <Link className={`logo me-10`} to={"home"}>
          <img src={logo} alt="Logo" />
        </Link>
        {/* Nav-links-right */}
        {token ? (
          <ul
            className={`lg:flex gap-4 me-auto text-gray-500 list-none  min-[420px]:hidden`}
          >
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
        ) : null}
        {/* Nav-icons-left */}
        <ul className="lg:flex gap-4 ms-auto list-none min-[420px]:hidden">
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
          <li className={`${token ? "hidden" : "block"}`}>
            <Link className="text-capitalize cursor-pointer" to={"register"}>
              Register
            </Link>
          </li>
          <li className={`${token ? "hidden" : "block"}`}>
            <Link className="text-capitalize cursor-pointer" to={"login"}>
              Login
            </Link>
          </li>
          <li onClick={logOut} className={`${!token ? "hidden" : "block"}`}>
            <span className="text-capitalize cursor-pointer">SignOut</span>
          </li>
        </ul>
        <div className="lg:hidden min-[420px]:flex ">
          <i
            onClick={displayMenueBars}
            className={`fa-solid ${
              showMenu ? "fa-xmark" : "fa-bars"
            } cursor-pointer text-2xl transition-opacity duration-300`}
          ></i>
          <ul
            className={`absolute end-0 top-full bg-light-color py-3 w-full text-center list-none  gap-4 flex-col ${
              showMenu ? "flex" : "hidden"
            }`}
          >
            <div className={`${token ? "flex" : "hidden"} gap-4 flex-col`}>
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
            </div>
            <li className={`${token ? "hidden" : "block"}`}>
              <Link className="text-capitalize cursor-pointer" to={"register"}>
                Register
              </Link>
            </li>
            <li className={`${token ? "hidden" : "block"}`}>
              <Link className="text-capitalize cursor-pointer" to={"login"}>
                Login
              </Link>
            </li>
            <li onClick={logOut} className={`${!token ? "hidden" : "block"}`}>
              <span className="text-capitalize cursor-pointer">SignOut</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
