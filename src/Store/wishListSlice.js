import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

//ACTION TYPE
// const WISHLIST_ADD_ITEM = "wishlist/addItems";
// const WISHLIST_REMOVE_ITEM = "wishlist/removeItems";

//action creator
// export function wishListAddItem(productData) {
//     return {type: WISHLIST_ADD_ITEM,payload:productData}
// }

// export function wishListRemoveItem(productId) {
//     return {type:WISHLIST_REMOVE_ITEM,payload:{productId}}
// }

//reducer
// export function wishListReducer(OriginalState=[],action) {
//    return produce(OriginalState, (state) => {
//     const findIndex = state.findIndex((item) => item.productId === action.payload.productId)
//      switch(action.type) {
//         case WISHLIST_ADD_ITEM:
//             //return [...state, action.payload]
//             state.push(action.payload)
//             break
//         case WISHLIST_REMOVE_ITEM:
//             //return state.filter((wishlistItem) => wishlistItem.productId !== action.payload.productId)
//             state.splice(findIndex,1)
//     }
//     return state
//    })
// }
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

//console.log(slice.reducer);
export const { wishListAddItem, wishListRemoveItem } = slice.actions;
export const wishListReducer = slice.reducer;
