import React, { useState } from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector(state => state.cartItems)

  const totalAmount = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price*currentValue.quantity , 0)
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
          {cartItems.map(({ productId, title, price, image, rating ,quantity}) => (
            <CartItems
              key={productId}
              productId={productId}
              title={title}
              rating={rating.rate}
              image={image}
              price={price.toFixed(2)}
              quantity={quantity}
            />
          ))}
          <div className="grid grid-cols-[4fr_1fr_1fr_1fr] items-center pt-1 pb-1 px-4">
            <div></div>
            <div></div>
            <div className="justify-self-center font-bold">Total Amount</div>
            <div className="justify-self-end font-bold">$ {totalAmount.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

