import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId,
  );
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartAddItem(state, action) {
      const findIndex = findItemIndex(state, action);
      if (findIndex !== -1) {
        state[findIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    cartRemoveItem(state, action) {
      const findIndex = findItemIndex(state, action);
      state.splice(findIndex, 1);
    },
    cartIncreaseQuantity(state, action) {
      const findIndex = findItemIndex(state, action);
      state[findIndex].quantity += 1;
    },
    cartDecreaseQuantity(state, action) {
      const findIndex = findItemIndex(state, action);
      if (state[findIndex].quantity <= 1) {
        state.splice(findIndex, 1);
      } else {
        state[findIndex].quantity -= 1;
      }
    },
  },
});

export const {
  cartAddItem,
  cartRemoveItem,
  cartIncreaseQuantity,
  cartDecreaseQuantity,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
