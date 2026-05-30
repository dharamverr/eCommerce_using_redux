import React, { useState } from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

export default function Cart() {
  //const cartItems = useSelector(state => state.cartItems)

  /*Now we are going to save memory using previous data use. Initial we are 
  making api call to get all product details. these individual product adding
  in cart by add to cart button. On clicking this add to cart button previously we
  are dispatching all required data. but now we are dispatching only productId 
  and remaining data use of products slice. we are implementing this in below*/
  const cartItems = useSelector(({ cartItems, products }) => {
    return cartItems.cartList
      .map(({ productId, quantity }) => {
        const cartProduct = products.list.find(
          (product) => product.id === productId,
        );
        return { ...cartProduct, quantity };
      })
      .filter(({ title }) => title);
    /*Here filter is used for handle error which is comes when cartItemFetch() 
    api call comes before fetchProductData() api call. In this case we gor 
    productId first and start finding in productList which is not comes yet.
    Hence it throw error. so to prevent this error we are using filter that
    we kept only those cartItems who has title. in this way we handled this
    error.*/
  });
  const cart = useSelector((state) => state.cartItems);
  const { isLoading, fetchError, cartList } = cart;
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
