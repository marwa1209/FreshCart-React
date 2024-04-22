/** @format */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Products from './Components/Products/Products'
import Categories from "./Components/Categories/Categories";
import Orders from "./Components/Orders/Orders";
import NotFound from "./Components/NotFound/NotFound";
import Brands from "./Components/Brands/Brands";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Product from "./Components/Product/Product";
import ProducDetails from "./Components/ProducDetails/ProducDetails";
function App() {
  // routes/

 const routes = createBrowserRouter([
   {
     path: "",
     element: <Layout />,
     children: [
       { path: "home", element: <Home /> },
       { path: "products", element: <Products /> },
       { path: "categories", element: <Categories /> },
       { path: "orders", element: <Orders /> },
       { path: "cart", element: <Cart /> },
       { path: "login", element: <Login /> },
       { path: "brands", element: <Brands /> },
       { path: "register", element: <Register /> },
       { path: "*", element: <NotFound /> },
     ],
   },
 ]);
  return <RouterProvider router={routes}></RouterProvider>
}

export default App;
