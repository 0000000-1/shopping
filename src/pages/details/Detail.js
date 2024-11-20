import React, { useState, useEffect } from 'react'
import products from '../../assets/DummyData'
import { Link, useParams } from 'react-router-dom';
import "./detail.css"
import Header from '../../components/header/Header';
import { useDispatch } from 'react-redux';
import { addtoCart, removeItem } from '../../store/Storage';


const Detail = () => {
    const { slug } = useParams();
    const [quantity, setQuantity] = useState(1)
    const [detail, setdetail] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
      let findDetail = products.filter(products => products.slug === slug)
        if (findDetail.length > 0) {
            setdetail(findDetail[0])
        }
         else {
            window.location.href = "/"
        }
    }, { slug })

    function addquantity(){
        setQuantity(quantity + 1)
    }
    function minusquantity(){
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
    function addtocart(){
        dispatch(addtoCart({
            productId:detail.id,
            quantity:quantity
        }))
    }
    return (<>
        <Header/>
        <div className='detailpage'>
            <h2>PRODUCT DETAIL</h2>
            <div className='product-detail-page'>
                <div className='product-image'>
                    <img src={detail.productImage} alt='' className='w-full' />
                </div>
                <div className='product-details'>
                    <h1>{detail.productTitle}</h1>
                    <p className='price-product'>{detail.productPrice}</p>
                    <p>{detail.productType}</p>
                    <div className='buttons'>
                        <div style={{display:"inline"}}>
                            <button onClick={minusquantity}>-</button>
                            <span style={{padding:"8px",fontSize:".8em"}}>{quantity}</span>
                            <button onClick={addquantity}>+</button>
                        </div>
                        <button className="buttons" onClick={()=> addtocart(detail.id)}>Add To Cart</button>
                    </div>
                    <p style={{fontSize:".4em"}}>{detail.productDescription}</p>
                </div>
            </div>
        </div>
    </>
    )
}
export const {quantity} = Detail
export default Detail