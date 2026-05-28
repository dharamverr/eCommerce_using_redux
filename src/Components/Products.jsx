import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAddItem } from "../Store/cartSlice";
import { wishListAddItem, wishListRemoveItem } from "../Store/wishListSlice";
import { useOutletContext } from "react-router";

export default function Products({ productId, title, rating, price, image }) {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishListItems);

  const { addWishList, setAddWishList } = useOutletContext();

  const isWishList = wishListItems.some((item) => item.productId === productId);

  const handleWishlist = () => {
    if (isWishList) {
      dispatch(wishListRemoveItem(productId));
    } else {
      dispatch(wishListAddItem({ productId, title, rating, price, image }));
    }
  };
  return (
    <div className="max-w-[250px] border border-gray-400 rounded-[10px] overflow-hidden p-2 flex flex-col justify-between gap-1">
      <div className="flex justify-center items-center relative">
        <button
          className="hover:text-red-500 cursor-pointer absolute top-1 right-1"
          onClick={handleWishlist}
        >
          {isWishList ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="none"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )}
        </button>
        <img src={image} alt="product-image" className="w-[60%] h-[150px]" />
      </div>
      <div className="title-container">
        <h3>
          <a href="#" className="no-underline text-gray-800 font-medium">
            {title}
          </a>
        </h3>
      </div>
      <div className="flex justify-between">
        <p className="rating">{rating} ⭐⭐⭐⭐</p>
        <p className="text-lg">${price}</p>
      </div>
      <div className="flex justify-between items-center font-medium">
        <button
          className="py-1 px-2 bg-gray-200 rounded cursor-pointer"
          onClick={() =>
            dispatch(cartAddItem({ productId, title, rating, price, image }))
          }
        >
          Add to cart
        </button>
        <button className="py-1 px-2 bg-gray-200 rounded cursor-pointer">
          Buy Now
        </button>
      </div>
    </div>
  );
}
