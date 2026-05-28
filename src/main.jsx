import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/index.js";
import Cart from "./Components/Cart.jsx";
import Home from "./Components/Home.jsx";
import WishListItems from "./Components/WishListItems.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishList" element={<WishListItems />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
