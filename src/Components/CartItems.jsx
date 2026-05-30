import React from 'react'
import { cartDecreaseQuantity, cartIncreaseQuantity, cartRemoveItem } from '../Store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import deleteIcon from '../assets/delete-svgrepo-com.svg'

export default function CartItems({productId,title,rating,image,price,quantity}) {
    const dispatch = useDispatch()
   
  return (
    <div className="grid grid-cols-[4fr_1fr_1fr_1fr] items-center p-4 border-b">
        <div className='flex gap-4'>
            <div><img src={image} alt="item-image" className='w-16 h-16' /></div>
            <div className='flex flex-col justify-between gap-2'>
                <h3 className='text-sm font-bold'>{title}</h3>
                <p>{rating} ⭐⭐⭐⭐</p> 
            </div>
        </div>
        <div className="justify-self-center">$ {price}</div>
        <div className="justify-self-center flex gap-1">
            <button className='py-1 px-2 bg-gray-200 rounded cursor-pointer' onClick={() => dispatch(cartDecreaseQuantity({productId}))}>-</button>
            <span>{quantity}</span>
            <button className='py-1 px-2 bg-gray-200 rounded cursor-pointer' onClick={() => dispatch(cartIncreaseQuantity({productId}))}>+</button>
            <img src={deleteIcon} alt="delete-icon" className='w-8 h-8 cursor-pointer' onClick={() => dispatch(cartRemoveItem({productId}))}/>
        </div>
        <div className="justify-self-end">$ {(price * quantity).toFixed(2)}</div>
    </div>
  )
}
