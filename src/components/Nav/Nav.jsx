import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import s from './Nav.module.css'
import { Link } from 'react-router-dom'
import {  HashLink  } from 'react-router-hash-link'



export default function Nav() {
  return (
    <div className={s.nav}> 
        <Link to='/categories'>Categories</Link>
        <HashLink smooth={true} to="/#Cupon"  > Cupon </HashLink>
        <HashLink smooth={true} to="/#Sale"> Sale </HashLink>
        <HashLink smooth={true} to="/#Contact"> Contact </HashLink>
       
 <Link to='cart'>< HiOutlineShoppingBag className={s.icon_bag} /></Link>
      </div>
    
  )
}
