import React from "react";
import { Link } from "react-router";
import cartImage from "../assets/cart-icon.svg";
import { useSelector } from "react-redux";
export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishListItems = useSelector((state) => state.wishListItems);
  return (
    <header className="flex justify-between items-center py-3 px-10 shadow-md sm:px-25 sticky top-0 bg-white z-50 gap-4">
      <Link to="/" className="grow-1">
        <h1 className="text-2xl font-bold">Shopee</h1>
      </Link>
        <Link to="/wishList">
        <div className="w-5 h-5 bg-black rounded-full flex justify-center items-center">
          <span className="text-white text-xs">{wishListItems.length}</span>
        </div>
        {wishListItems.length !== 0 ? (
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
      </Link>
      <Link to="cart" className="flex flex-col justify-between items-center">
        <div className="w-5 h-5 bg-black rounded-full flex justify-center items-center">
          <span className="text-white text-xs">{cartItems.length}</span>
        </div>
        <img src={cartImage} alt="shopping-cart" className="w-7 h-6" />
      </Link>
    </header>
  );
}
