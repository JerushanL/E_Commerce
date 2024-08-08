import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart_icon from '../Assets/cart_icon.png'
import dropdown_arrow from '../Assets/nav_dropdown.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const { getTotalCartItems } = useContext(ShopContext)

  const menuRef = useRef()

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className="navbar" >
      {/* <img className='nav-dropdown' src={dropdown_arrow} onClick={dropdown_toggle} /> */}
      <div className="nav-logo">
        <FontAwesomeIcon icon={faBars} onClick={dropdown_toggle} className='nav-dropdown' />
        <Link to={"/"} style={{ textDecoration: "none" }} >
          <div className="nav-logo-2">
            <img src={logo} alt="" />
            <p>Shoppers</p>
          </div></Link>
      </div>

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none", color: "#272727" }} to={'/'}>Shop</Link> {menu === "shop" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: "none", color: "#272727" }} to={'/men'} >Men</Link> {menu === "men" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: "none", color: "#272727" }} to={'/women'}>Women</Link> {menu === "women" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: "none", color: "#272727" }} to={'/kids'}>Kids</Link> {menu === "kids" ? <hr /> : <></>} </li>
      </ul>


      <div className="nav-login-cart">
        <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
