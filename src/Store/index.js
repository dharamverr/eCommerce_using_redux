import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productsSlice";
import {
  cartAddItem,
  cartDecreaseQuantity,
  cartIncreaseQuantity,
  cartReducer,
  cartRemoveItem,
} from "./cartSlice";
import {
  wishListAddItem,
  wishListReducer,
  wishListRemoveItem,
} from "./wishListSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishListItems: wishListReducer,
  },
});
