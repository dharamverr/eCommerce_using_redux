import React from 'react'
import Products from './Products'
import { productList } from '../../productList'

export default function Home() {
  return (
     <div className="xs:grid xs:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xs:gap-4 xs:py-4 xs:px-24 grid py-10 px-7 gap-3">
      {
        productList.map((product) => {
          const {id,price,image,rating,title} = product
          return <Products key={id} productId={id} price={price} image={image} rating={rating.rate} title={title}/>
        })
      }
    </div>
  )
}
