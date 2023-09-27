import React from 'react'
import s from './OfferCard.module.css'
import { Link} from 'react-router-dom'

export default function OfferCard({id, image, title, price, discont_price}) {

  const product_url = `/product/${id}`;

  const DiscountPrice = Math.round(((price - discont_price) / price) * 100);

  return (
   
  
    <div>
       
         <div className={s.offer_cards}>
         <Link to = {product_url}>
        <img src={`http://127.0.0.1:3333${image}`} alt = {title } ></img>
        </Link>
        <div className={s.offer_price}>
        <p className={s.discont_price}>
          {discont_price}
          <span>$</span>
        </p>
        {DiscountPrice !== 0 && <p>{price}$</p>}
        {DiscountPrice!== 0 && <p>-{DiscountPrice}%</p>}
      
       
        </div>
       
        <p> { title} </p> 
    </div>
   
    </div>
  )
}
