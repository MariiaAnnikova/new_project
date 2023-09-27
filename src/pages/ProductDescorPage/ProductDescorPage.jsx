import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProductItem } from '../../requests/product_descr';
import s from './ProductDescorPage.module.css'
import { addToCart } from '../../store/reducers/cart';

export default function ProductDescorPage() {

  const dispatch = useDispatch();
  const product = useSelector(state => state.item_product);

 const add_to_cart = () => dispatch(addToCart({id: +id, title, image, price, discont_price}))

  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getProductItem(id))
  }, []);

    const { title, description, price, image, discont_price } = product;
    console.log(product);
    
  return (
   
    <div className={s.product_descr}>
      
      <div>
      <img className={s.img_descor} src={`http://127.0.0.1:3333${image}`} alt = {title } ></img>
      </div>

      <div className={s.descr_right}>
         <div className={s.descr_price}>
         <p>{discont_price}$ </p>
        <p>{ price }$</p>
        <p> - 7% </p>
        </div>
        <div className={s.descr_title}>
        <button onClick={add_to_cart}>  Add to card </button>
        <h1>Description</h1>
        <p>{ description }</p>
        </div>
    </div>
    
    </div>
   
  )
}
