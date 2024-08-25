import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'
import { Link } from 'react-router-dom'
import {StoreContext} from '../../context/StoreContext.jsx'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home")
    const {getTotalCartAmount,token,setToken,LogOut} = useContext(StoreContext)

  return (
    <div className='navbar' id='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
            <a href='#exploremenu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
            <a href='#app-download' onClick={() => setMenu("mobile app")} className={menu === "mobile app" ? "active" : ""}>mobile app</a>
            <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                {getTotalCartAmount() > 0 ? <div className="dot"></div> : <></>}
            </div>
            {!token
             ? <button onClick={() => setShowLogin(true)}>sign in</button>
             : <div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className='drop-down'>
                    <li><img src={assets.bag_icon} alt="" /><p>orders</p></li>
                    <hr />
                    <li><img src={assets.address_book_icon} alt="" className='address-icon'/><p>address</p></li>
                    <hr />
                    <li onClick={LogOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
             </div>
            }
        </div>
    </div>
  )
}

export default Navbar;