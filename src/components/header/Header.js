import React, { useEffect, useState } from 'react'
import "./header.css"
import Sidebar from '../sidebar/Sidebar'
import { Link} from 'react-router-dom'
import { quantity } from '../../pages/home/Home'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../store/store'

const Header = () => {
    
    const [totalQuantity,setTotalQuantity] = useState(0)
    const carts = useSelector(store => store.cart)
    const [favQuantity,setfavQuantity] = useState(0)


useEffect(()=>{
    let total=0;
    carts.forEach((item,index) => {
        total += (item.quantity)
    });
    
    setTotalQuantity(total)
},)
    
    return (
        <div className='header'>
            <Sidebar/>

            <div className='logo pacifico-regular'>
                <h1 style={{ color: "#f15483",fontSize:"30px" }}>SHOOPPING</h1>
            </div>
            <div className='header-icons'>
                <ul>
                    <li title='sign-in'>
                        <Link to='/login'>
                            <span class="material-symbols-outlined">account_circle</span>
                        </Link>
                    </li>
                    <li title='favorite'>
                        <Link to='/'>
                        <span className='ft'>{favQuantity}</span>
                        <span class="material-symbols-outlined">favorite</span>
                        </Link>
                    </li>
                    <li title='cart'>
                        <Link to='/cartTab'>
                            <span className='rt'>{totalQuantity}</span>
                            <span class="material-symbols-outlined">shopping_cart</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header