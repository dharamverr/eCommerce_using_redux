import { produce } from "immer";

//action type
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";
const CART_INCREASE_QUANTITY_BY = "cart/increaseQuantityBy";
const CART_DECREASE_QUANTITY_BY = "cart/decreaseQuantityBy";

//action creator
export function cartAddItem(productData) {
  return { type: CART_ADD_ITEM, payload: productData };
}
export function cartRemoveItem(productId) {
  return { type: CART_REMOVE_ITEM, payload: { productId } };
}
export function cartIncreaseQuantity(productId) {
  return { type: CART_INCREASE_QUANTITY, payload: { productId } };
}
export function cartDecreaseQuantity(productId) {
  return { type: CART_DECREASE_QUANTITY, payload: { productId } };
}
export function cartIncreaseQuantityBy(productId, count) {
  return { type: CART_INCREASE_QUANTITY_BY, payload: { productId, count } };
}
export function cartDecreaseQuantityBy(productId, count) {
  return { type: CART_DECREASE_QUANTITY_BY, payload: { productId, count } };
}

//reducer
export function cartReducer(OriginalState = [], action) {
  return produce(OriginalState, (state) => {
    const findIndex = state.findIndex(
      (cartItem) => cartItem.productId === action.payload.productId,
    );
    switch (action.type) {
      case CART_ADD_ITEM:
        {
          if (findIndex !== -1) {
            state[findIndex].quantity += 1;
          } else {
            state.push({ ...action.payload, quantity: 1 });
          }
        }
        break;
      case CART_REMOVE_ITEM:
        state.splice(findIndex, 1);
        break;
      case CART_INCREASE_QUANTITY:
        state[findIndex].quantity += 1;
        break;
      case CART_DECREASE_QUANTITY:
        if (state[findIndex].quantity <= 1) {
          state.splice(findIndex, 1);
        } else {
          state[findIndex].quantity -= 1;
        }
        break;
      case CART_INCREASE_QUANTITY_BY:
        state[findIndex].quantity += action.payload.count;
        break;
      case CART_DECREASE_QUANTITY_BY:
        if (state[findIndex].quantity <= 1) {
          state.splice(findIndex, 1);
        } else {
          state[findIndex].quantity -= action.payload.count;
        }
    }
    return state;
  });
}
