import React from 'react'
import Products from './Products'
import { useSelector } from 'react-redux'
import ProductShimmer from './ProductShimmer'
import { getAllProductList } from '../Store/productsSlice'
//import { productList } from '../../productList'

export default function Home() {
  const productList = useSelector(getAllProductList)
  //console.log(productList)
  const {isLoading, list, isError} = productList
  return (
     <div className="xs:grid xs:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xs:gap-4 xs:py-4 xs:px-24 grid py-10 px-7 gap-3">
      { isLoading ? Array.from({length:10}).map((_, index) => <ProductShimmer key={index}/>) : isError ? <h1 className='col-span-full text-center mt-4 text-2xl mx-auto'>{isError}</h1> :
        list.map((product) => {
          const {id,price,image,rating,title} = product
          return <Products key={id} productId={id} price={price} image={image} rating={rating.rate} title={title}/>
        })
      }
    </div>
  )
}
