import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const cartCount = useSelector(state=> state.cart.length)
  const [menu,setMenu] = useState('')
  return (
      <div className='navbar'>
          <div className='nav-logo'>
              <img src={logo} alt='' />
              <p>SHOPPER</p>
          </div>
          <ul className='nav-menu'>
              <li onClick={()=>{ setMenu('shop') }}><Link to='/'>Shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
              <li onClick={()=>{setMenu('men')}}><Link to='/men'>Men</Link>{menu === 'men' ? <hr /> : <></>}</li>
              <li onClick={()=>{setMenu('women')}}><Link to='/women'>Women</Link>{menu === 'women' ? <hr /> : <></>}</li>
              <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>              
          </ul>
          <div className='nav-login-cart'>
              <button>Login</button>
                <div style={{position: 'relative'}}>
              <Link to='/cart' onClick={()=>{ setMenu('') }} >
                <img src={cart_icon} alt='' />
              </Link>
                <span style={{backgroundColor: 'red', color: 'white', minWidth: '30px', aspectRatio: '1', borderRadius: '50%', position: 'absolute', textAlign: 'center', fontSize: '20px'}}>
                  {cartCount}
                  </span>
                </div>
          </div>
    </div>
  )
}
