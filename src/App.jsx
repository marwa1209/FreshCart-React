/** @format */
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Orders from "./Components/Orders/Orders";
import NotFound from "./Components/NotFound/NotFound";
import Brands from "./Components/Brands/Brands";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useContext, useEffect } from "react";
import { TokenContext } from "./Context/token";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import ProducDetails from "./Components/ProducDetails/ProducDetails";
import Checkout from './Components/Checkout/Checkout'
function App() {
  const { setToken } = useContext(TokenContext);
  // routes/
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Navigate to="/home" />,
        },
        {
          path: "home",
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoutes>
              <Products />
            </ProtectedRoutes>
          ),
        },
        {
          path: "details/:id",
          element: (
            <ProtectedRoutes>
              <ProducDetails />
            </ProtectedRoutes>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoutes>
              <Categories />{" "}
            </ProtectedRoutes>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoutes>
              <Brands />
            </ProtectedRoutes>
          ),
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "checkout/:id",
          element: <Checkout />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      setToken(localStorage.getItem("userToken"));
    }
  }, []);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
