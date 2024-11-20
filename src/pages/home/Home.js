import "./home.css"
import React, { useState } from 'react'
import products from "../../assets/DummyData.js"
import { Link } from "react-router-dom"
import { favouriteToggle, addtoCart, addtofavourite } from "../../store/Storage.js"
import { useDispatch, useSelector } from "react-redux"


const Home = (props) => {
    const [productdata, setProductData] = useState(products)
    const added = <span title="add-to-cart" class="material-symbols-outlined">add</span>
   
    const dispatch = useDispatch();
    // const {id} = props.data;

    function cartAdded(id) {
        dispatch(addtoCart({
            productId: id,
            quantity: 1,
            favourite:false
        }))
    }

    function addfavourite() {
        dispatch(favouriteToggle())
    }

    return (
        <div className="home">
            <div className="filter-options">
                <h3>
                    Filter
                </h3>
            </div>
            <div className="products">
                <h1 >Recommended</h1>
                {
                    productdata.map((elem, id) => {
                        return (
                            <>
                                <div key={id} className="product-Card">
                                    <Link to={elem.slug} >
                                        <div className="image-cart ">
                                            <img src={elem.productImage} alt="i" className="object-contain w-full h-full"></img>
                                        </div>
                                    </Link>
                                    <div className="info" style={{ padding: ".8rem 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className="discription">
                                            <h6 key={1}>{elem.productTitle}</h6>
                                            <p style={{fontSize:"14px",fontWeight:"400"}}>$<span style={{fontSize:"20px",fontWeight:"600"}}>{elem.productPrice} </span></p>
                                        </div>
                                        <div className="option-icons" style={{ gap: "6px", display: "flex", flexDirection: "column" }}>
                                            <span onClick={() => cartAdded(id)}>{added}</span>
                                            <span class="material-symbols-outlined" onClick={() => addfavourite(id)}>favorite</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
export const { quantity } = Home
export default Home