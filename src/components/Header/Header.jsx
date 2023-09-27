import React from 'react'
import  imageNav from '../../img/imageNav.png'
import s from './Header.module.css'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Button from '../Button/Button'
export default function Header() {
  return (
    <header>
    <div className={s.header}>
        <div className={s.funct_header}>
    <Link to='/'><img src={imageNav} alt='logo' ></img></Link>
       <Link to='products'> <Button> All products </Button> </Link>
        </div>
        <div>
        <Nav />
        </div>
    </div>
    </header>
  )
}
