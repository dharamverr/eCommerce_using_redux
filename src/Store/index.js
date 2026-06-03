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
import { logger } from "./middleware/logger";
import { apiCall } from "./middleware/customApiMiddleware";
import { func } from "./middleware/func";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishListItems: wishListReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),apiCall,func]
});
