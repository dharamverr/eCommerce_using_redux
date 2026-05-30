import React, { useState } from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { getAllCartItem, getAllCartItems } from "../Store/cartSlice";

export default function Cart() {
  /***********************************************************************
   *    while optimizing the cartItems we got a warning : 'Selector unknown
   *    returned a different result when called with the same parameters. 
   *    This can lead to unnecessary rerenders.' To avoid this warning we have to 
   *    use selector function.

   *    What is selector function : the function which pass inside the 
   *    useSelector is called selector function.
   *    The best practice it use selector function is that do not defined 
   *    inline like this useSelector((state) => state.cartItems). we defined 
   *    this selector function inside the slices.
   ***********************************************************************/
   const cartItems = useSelector(getAllCartItems);

  const { isLoading, fetchError, cartList }  = useSelector(getAllCartItem);
  
  //console.log(cartItems)
  const totalAmount = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );
  //console.log(cartItems)
  return (
    <div className="py-6 sm:px-10 lg:px-25 px-5">
      <h2 className="text-center font-bold text-xl sm:text-2xl pb-6">
        Item in your cart
      </h2>
      <div className="w-full overflow-x-auto">
        <div className="min-w-120">
          <div className="grid grid-cols-[4fr_1fr_1fr_1fr] items-center pt-8 pb-1 px-4 border-b font-medium">
            <div>Item</div>
            <div className="justify-self-center">Price</div>
            <div className="justify-self-center">Quantity</div>
            <div className="justify-self-end">Total</div>
          </div>
          {isLoading ? (
            <h1 className="col-span-full text-center mt-4 text-2xl mx-auto">
              Loading...
            </h1>
          ) : fetchError ? (
            <h1 className="col-span-full text-center mt-4 text-2xl mx-auto">
              {fetchError}
            </h1>
          ) : (
            cartItems.map(({ id, title, price, image, rating, quantity }) => (
              <CartItems
                key={id}
                productId={id}
                title={title}
                rating={rating.rate}
                image={image}
                price={price.toFixed(2)}
                quantity={quantity}
              />
            ))
          )}
          <div className="grid grid-cols-[4fr_1fr_1fr_1fr] items-center pt-1 pb-1 px-4">
            <div></div>
            <div></div>
            <div className="justify-self-center font-bold">Total Amount</div>
            <div className="justify-self-end font-bold">
              $ {totalAmount.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
