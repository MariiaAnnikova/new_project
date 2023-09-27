import React from 'react'
import { incrementCart, decrementCart, deleteCard  } from '../../store/reducers/cart'
import s from './CartCard.module.css'
import { useDispatch} from 'react-redux'
import { PlusOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons'
export default function CartCard({id, title, image, price, discont_price, count }) {


    const dispatch = useDispatch();
    
    const delete_card = () => dispatch(deleteCard(id));
    const increment = () =>  dispatch(incrementCart(id))
    const dicrement = () => dispatch(decrementCart (id))


  return (
    <div className={s.all_cart}>
     
    
        <div className={s.cart_img}>
        
<img src={`http://127.0.0.1:3333${image}`} alt = {title} />
</div>
<div className={s.inc_dicr_btn}>
<p>{title}</p>
<div className={s.inc_dicr}>
<p onClick={increment}><PlusOutlined /></p> 
  
    <p> { count } </p>
   <p onClick={dicrement}> <MinusOutlined /> </p>
   
   </div>
   </div> 
   <div className={s.price_cart}>
<p>{ price  * count} $</p>
<p>{ discont_price }$ </p>
</div> 
<div className={s.delete_cart}>
<p onClick={delete_card}> <CloseOutlined /> </p>
</div>

</div>
    
  )
}
