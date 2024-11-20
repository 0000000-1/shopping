import React from 'react'
import "./cartTab.css"
import CartItem from '../cartItem/CartItem'
import Header from '../header/Header'
import { useSelector } from 'react-redux'
import products from "../../assets/DummyData";

const CartTab = () => {
  const carts = useSelector(store => store.cart)
  const statusTab = useSelector(store => store.cart.statusTab)
  const handleCloseTabCart = () => {
  }

  return (
    <div>
      <Header />
      <div className='main-container'>
        <h5 className='main-title'>Shopping Cart</h5>
        <div className='container-cart'>
          <div className='big-container'>
            {carts.map((item, key) =>
              <CartItem key={key} data={item} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTab