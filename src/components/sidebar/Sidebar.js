import React, { useState } from 'react'
import "./sidebar.css"

import { Link} from "react-router-dom";


const Sidebar = (props) => {
    const [displayHidden, setDisplayHidden] = useState("-20%")
    function toggle() {
        setDisplayHidden("0px")
    }
    function toggleReverse() {
        setDisplayHidden("-20%")
    }
    const [headValue,setHeadValue] =useState("Home")
    return (
        <div style={{ transition: "2s" }} >
            <div className='menu' onClick={toggle} id='menu' title='menu' style={{ cursor:"pointer",position: "relative", transition: ".4s" }} ><span class="material-symbols-outlined">
                menu</span>
            </div>
            <div className='sidebar' style={{ left: `${displayHidden}` }}>
                <div className='sidebar-head'>
                    <h1>{headValue}</h1>
                    <div style={{color:"white" }}className='menu-close' onClick={toggleReverse} >
                        <span class="material-symbols-outlined">close</span>
                    </div>
                </div>
                <div className='sidebar-links'>

                    <Link to='/' onClick={() => setHeadValue("Home")}>Home</Link>
                    <Link to='/' onClick={() => setHeadValue("Categpry")} > Category </Link>
                    <Link to='/cartTab' onClick={() => setHeadValue("Cart")} > Cart </Link>
                    <Link to='/' onClick={() => setHeadValue("More us")} > More Us </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar