/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TokenContextProvider from "./Context/token";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "../node_modules/react-query/es/devtools/devtools";
import CartContextProvider from "./Context/cartContext";
import PaymentContextProvider from "./Context/payment";
const root = ReactDOM.createRoot(document.getElementById("root"));
let query = new QueryClient();
root.render(
  <PaymentContextProvider>
    <CartContextProvider>
      <QueryClientProvider client={query}>
        <React.StrictMode>
          <TokenContextProvider>
            <App />
          </TokenContextProvider>
          {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
        </React.StrictMode>
      </QueryClientProvider>
    </CartContextProvider>
  </PaymentContextProvider>
);
