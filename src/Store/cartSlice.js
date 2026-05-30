import { createSelector, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { getAllProductList } from "./productsSlice";

const findItemIndex = (state, action) =>
  state.cartList.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId,
  );
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    cartList: [],
    fetchError: "",
  },
  reducers: {
    cartLoading(state, action) {
      state.isLoading = true;
      state.fetchError = "";
    },
    cartItemFetchError(state, action) {
      state.isLoading = false;
      state.fetchError = action.payload || "Cart Item not fetched.";
    },
    cartItemFetch(state, action) {
      state.isLoading = false;
      state.cartList = action.payload.products;
    },
    cartAddItem(state, action) {
      const findIndex = findItemIndex(state, action);
      if (findIndex !== -1) {
        state.cartList[findIndex].quantity += 1;
      } else {
        state.cartList.push({ ...action.payload, quantity: 1 });
      }
    },
    cartRemoveItem(state, action) {
      const findIndex = findItemIndex(state, action);
      state.cartList.splice(findIndex, 1);
    },
    cartIncreaseQuantity(state, action) {
      const findIndex = findItemIndex(state, action);
      state.cartList[findIndex].quantity += 1;
    },
    cartDecreaseQuantity(state, action) {
      const findIndex = findItemIndex(state, action);
      if (state.cartList[findIndex].quantity <= 1) {
        state.cartList.splice(findIndex, 1);
      } else {
        state.cartList[findIndex].quantity -= 1;
      }
    },
  },
});

//selector function
const getCartItem = (cartItems, products) => {
    return cartItems.cartList
      .map(({ productId, quantity }) => {
        const cartProduct = products.list.find(
          (product) => product.id === productId,
        );
        return { ...cartProduct, quantity };
      })
      .filter(({ title }) => title);    
  }

const {cartItemFetchError,cartLoading} = cartSlice.actions;
export const getAllCartItem = (state) => state.cartItems
export const getAllCartItems = createSelector([getAllCartItem,getAllProductList], getCartItem)

export const fetchCartItemsData = () => (dispatch) => {
       dispatch(cartLoading())
        fetch('https://fakestoreapi.com/carts/1')
        .then(res => res.json())
        .then(data => dispatch(cartItemFetch(data)))
        .catch((error) => dispatch(cartItemFetchError()))
    }

export const {
  cartItemFetch,
  cartAddItem,
  cartRemoveItem,
  cartIncreaseQuantity,
  cartDecreaseQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
