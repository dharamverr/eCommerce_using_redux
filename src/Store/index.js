import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { productReducer } from "./productsSlice";
import {
  cartAddItem,
  cartDecreaseQuantity,
  cartDecreaseQuantityBy,
  cartIncreaseQuantity,
  cartIncreaseQuantityBy,
  cartReducer,
  cartRemoveItem,
} from "./cartSlice";
import {
  wishListAddItem,
  wishListReducer,
  wishListRemoveItem,
} from "./wishListSlice";

//combine reducer
const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishListItems: wishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// store.dispatch(cartAddItem(1))
// store.dispatch(cartAddItem(2))
// store.dispatch(cartAddItem(3))
// store.dispatch(cartAddItem(4))
// store.dispatch(cartAddItem(5))
// store.dispatch(cartRemoveItem(3))
// store.dispatch(cartIncreaseQuantity(2))
// store.dispatch(cartIncreaseQuantity(1))
// store.dispatch(cartDecreaseQuantity(1))
// store.dispatch(cartDecreaseQuantity(1))
// store.dispatch(cartIncreaseQuantityBy(4,10))
// store.dispatch(cartIncreaseQuantityBy(5,11))
// store.dispatch(cartDecreaseQuantityBy(5,10))

// store.dispatch(wishListAddItem(1))
// store.dispatch(wishListAddItem(2))
// store.dispatch(wishListRemoveItem(2))
