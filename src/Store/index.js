import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
//import { produce } from "immer";

//combine reducer
// const reducer = combineReducers({
//   products: productReducer,
//   cartItems: cartReducer,
//   wishListItems: wishListReducer,
// });

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );


export const store = configureStore({reducer : {
    products: productReducer,
  cartItems: cartReducer,
  wishListItems: wishListReducer,
}})