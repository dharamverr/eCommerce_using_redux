import React from 'react'
import { useSelector } from 'react-redux';
import Products from './Products';

export default function WishListItems() {
      const wishListItems = useSelector((state) => state.wishListItems);
  return (
    <div className="xs:grid xs:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xs:gap-4 xs:py-4 xs:px-24 grid py-10 px-7 gap-3">
      {
        wishListItems.map((product) => {
          const { productId, title, rating, price, image } = product
          return <Products key={productId} productId={productId} price={price} image={image} rating={rating} title={title}/>
        })
      }
    </div>
  )
}
