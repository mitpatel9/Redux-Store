import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const item=useSelector((state)=>( state.cart ))
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <span className='logo'>Redux Store</span>
    <div >
        <NavLink to='/' style={{marginRight:"20px", textDecoration:'none'}}>Home</NavLink>
        <NavLink to='/cart' style={{marginRight:"20px", textDecoration:'none'}}>Cart</NavLink>
      <span className=''>cart item: {item.length}</span>
    </div>
    </div>
  )
}

export default Navbar
