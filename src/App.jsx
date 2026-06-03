import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Products from './Components/Products'
import { useSelector } from 'react-redux'
import Header from './Components/Header'
import { Outlet } from 'react-router'

function App() {
  const productList = useSelector((store) => store.products)
  const [addWishList, setAddWishList] = useState(false)
  return (
    <>
      <Header wishListState = {[addWishList, setAddWishList]}/>
      <Outlet context={{ addWishList, setAddWishList }}/>
    </>
  )
}

export default App
