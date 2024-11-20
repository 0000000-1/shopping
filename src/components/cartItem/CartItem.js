import React, { useState, useEffect } from 'react'
import products from "../../assets/DummyData"
import { useDispatch} from 'react-redux';
import {changeQuantity } from '../../store/Storage';
import "./cartItem.css"


const CartItem = (props) => {

    const [detail, setdetail] = useState([]);
    const { productId, quantity } = props.data;
    console.log(quantity);

    const dispatch = useDispatch()
    useEffect(() => {
        const filterproduct = products.filter(product => product.id === productId)[0]
        setdetail(filterproduct)
    }, [productId])

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }))
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }))
    }

    return (
        <div className="container ">
            <img src={detail.productImage} alt="" className="container-image" />
            <h3 className=' pacifico-regular'>{detail.productTitle}</h3>
            <p className=' pacifico-regular'> ${detail.productPrice * quantity}</p>
            <div className="container-btn">
                <button className="btns" onClick={handleMinusQuantity}>-</button>
                <span className=' pacifico-regular'>{quantity}</span>
                <button className="btns" onClick={handlePlusQuantity}>+</button>
            </div>
        </div>
    )
}

export default CartItem