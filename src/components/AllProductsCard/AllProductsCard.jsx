import React, { useEffect} from 'react'
import { load_all_products } from '../../requests/all_products'
import s from './AllProductsCard.module.css'
import { addToCart } from '../../store/reducers/cart';
  import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';

export default function AllProductsCard({id, image, title, price, discont_price, count}) {

  const dispatch = useDispatch();
 
  const products = useSelector(state => state.all_products)
  console.log(products);

  // const Discount = []; 
  // const NoDiscount = []; 

  // products.forEach((products) => {
  //   if (products.discont_price === true) {
  //     Discount = (`${products.discont_price} `);
  //   } else if (products.discont_price === false || products.discont_price === null) {
  //      NoDiscount =  (`${products.price} `);;
  //     //(`${products.title} does not have a discount.`);
  //   }
  // });

  // console.log(Discount);
  // console.log(NoDiscount);

  useEffect(() => {
    dispatch(load_all_products);
  }, []); 
  const add_to_cart = () => dispatch(addToCart({id, title, image, discont_price, price, count}));
  
  const DiscountPrice = Math.round(((price - discont_price) / price) * 100);
 


  return (
    <div className={s.all_products}>
 <div className={s.all_products_card}>
  <Link to = { `/product/${id}` }>
   <img src={`http://127.0.0.1:3333${image}`} alt = {title } />
   <p>{ title } </p>
   </Link>
   <div className={s.price_all}> 

   
        <p className={s.discont_price}>
          {discont_price}
          <span>$</span>
        </p>
        {DiscountPrice !== 0 && <p>{price}$</p>}
        {DiscountPrice!== 0 && <p>-{DiscountPrice}%</p>}
      </div>
   <button onClick={add_to_cart} >Add to Cart</button>
   </div>
</div>
  )
}
