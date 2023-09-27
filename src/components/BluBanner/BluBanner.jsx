import React from 'react'
import s from './BluBanner.module.css'
import Bush  from '../../img/Bush.png'

export default function BluBanner() {
  return (
    <div className={s.blu_pic}>
    <div className={s.blu_left}>
        <h1> Discount </h1>
        <h2> For new season</h2>
        <div className={s.button_on_blu}>
        <button className={s.white_button}> All promo </button>
        <button className={s.blu_button}> Ditails </button>
        </div>
    </div>
    <div className={s.blu_right}>
    <img src={Bush} alt='green' ></img>

    </div>
  </div>
 
  )
}
