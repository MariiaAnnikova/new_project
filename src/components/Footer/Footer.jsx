import React from 'react'
import s from './Footer.module.css'
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';



export default function Footer() {
  return (
    
    <div className={s.footer} id='Contact'> 
    <div className={s.footer_left}>
       <h1> Contacts </h1> 
       <h2> + 39 3484558411 </h2>
       <div className={s.icons}>
       <InstagramOutlined  className={s.inst}/>
       <WhatsAppOutlined className={s.whats}/>
       </div>
    </div>
    <div className={s.footer_right}>
        <h1> Adress </h1>
        <h2> Italy, Alessandria, via Victoria 34</h2>
        <p className={s.open_time}>Open hours </p>
        <p className={s.open_day}>24 hours a day</p>
    </div>
    </div>
  )
}
