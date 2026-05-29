import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);

const slice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    wishListAddItem(state, action) {
      state.push(action.payload);
    },
    wishListRemoveItem(state, action) {
      const findIndex = findItemIndex(state, action);
      if (findIndex !== -1) {
        state.splice(findIndex, 1);
      }
    },
  },
});

export const { wishListAddItem, wishListRemoveItem } = slice.actions;
export const wishListReducer = slice.reducer;
