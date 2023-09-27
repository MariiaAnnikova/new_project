import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartCard from '../../components/CartCard/CartCard';
import { clearCart } from '../../store/reducers/cart';
import s from './CartPage.module.css'
import { useForm } from 'react-hook-form';

export default function CartPage() {

  const { register, handleSubmit, formState: { errors} } = useForm({ 
    mode: 'onBlur'
  });

  const submit = data => console.log(data);

     
      const mobileRegister = register('phone', {
        required: " * The field phone number is required",
        pattern: {
          value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
          message:'* not value phone format '
        }
      });

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch();

  const clear_card = () => dispatch(clearCart());

  const total = Math.round(cart.reduce((prev, {price, count}) => prev + price * count, 0));
  
  
   
   

  return (
    <div className={s.cart_page}>
      
     <div className={s.all_cart_page}>
     <h1>Shooping cart</h1>
      {
        cart.length === 0
        ? <h3>The cart is empty...</h3>
        : <div>
          
      {
      cart.map(el => <CartCard key={el.id} {...el} /> )
    }
    </div>
} 
</div>
  <div className={s.order_box}>  
 
  
    <h2>Order details </h2>  
   
    <p>Total: <span>{total} $</span> </p>
    
     <form onSubmit={handleSubmit(submit)}>
      <input type='text' name='phone' placeholder='Phone number ' { ...mobileRegister }/>
       <button> Order </button>
       <button onClick={clear_card}>Clear cart</button>
      </form>
   <div>     { errors.phone &&  <p>  { errors.phone?.message} </p>} </div>
  </div>
       
  </div> 
   
   
 

)
}

