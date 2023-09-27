import React from 'react'
import s from './ProductCard.module.css'
import { Link } from 'react-router-dom';

import { addToCart } from '../../store/reducers/cart';
import { useDispatch } from 'react-redux';


export default function ProductCard({id, title, image, discont_price, price, count }) {

  const product_url = `/product/${id}`;
 
  const dispatch = useDispatch();
 

 const add_to_cart = () => dispatch(addToCart({id, title, image, discont_price, price, count}));

 const DiscountPrice = Math.round(((price - discont_price) / price) * 100);

 



return (
   
    <div className={s.product_card}>
      <div >
<Link to={product_url}>
 
<img src={`http://127.0.0.1:3333${image}`} alt = {title} />
</Link>
<button onClick={add_to_cart} >Add to Cart</button>
</div>
<div className={s.product_price}>
  <p>
          {discont_price}
          <span>$</span>
        </p>
        {DiscountPrice !== 0 && <p>{price}$</p>}
        {DiscountPrice!== 0 && <p>-{DiscountPrice}%</p>}

 </div>
 <Link to={product_url}>
 <p> { title } </p>
 </Link>
 
    </div>
   
  )
}
