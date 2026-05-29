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
//import { produce } from "immer";

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

/*understanding immer js library working*/
const users = [
  {
    name: "Dharamveer",
    age: 23,
  },
  {
    name: "Nilkanth",
    age: 24,
  },
  {
    name: "Harish",
    age: 19,
  },
];

/*mutating way we are changing age*/
// users[1].age = 56
// console.log(users[1])

/*non mutating way we are changing age*/
// const newUsers = users.map((user,i) => {
//   if(i === 1) {
//     return {...user, age:54}
//   }else {
//     return user
//   }
// })

// console.log(newUsers)
// console.log(users)

//syntax of produce method in immer js
// const returnValue = produce(OriginaState, (copyState) => {
//   //write your code here
// })

/****************************************************************************
immer js: 

Immer is a JavaScript library that makes it easier to work with immutable state updates.

In normal JavaScript, objects and arrays are mutable — meaning they can be changed directly:

const user = { name: "Rahul" };
user.name = "Amit"; // mutation

But in Redux, state is supposed to be immutable. Instead of changing existing state, you create a new copy of the state with the updates applied.

Without Immer, Redux updates can become deeply nested and hard to read.

Why immutability matters in Redux

Redux depends on immutability because:

It helps detect state changes efficiently
Enables predictable updates
Supports features like time-travel debugging
Prevents accidental side effects

Redux checks whether object references changed:

oldState !== newState

If you mutate the original object directly, Redux may not detect updates correctly.

Problem without Immer

Suppose Redux state looks like this:

const state = {
  user: {
    profile: {
      name: "Rahul"
    }
  }
};

Updating name immutably manually:

return {
  ...state,
  user: {
    ...state.user,
    profile: {
      ...state.user.profile,
      name: "Amit"
    }
  }
};

This becomes messy for deeply nested state.

How Immer solves this

Immer lets you write code that looks mutable:

draft.user.profile.name = "Amit";

But internally, Immer creates a brand-new immutable state safely.

Example:

import produce from "immer";

const nextState = produce(state, draft => {
  draft.user.profile.name = "Amit";
});

The original state is untouched.
****************************************************************************/
