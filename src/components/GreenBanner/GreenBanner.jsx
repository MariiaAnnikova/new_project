import React from 'react'
import s from './Greenbanner.module.css'
import gnome from '../../img/gnome.png'
import { useForm } from 'react-hook-form'


export default function GreenBanner() {

  const { register, handleSubmit, formState: { errors} } = useForm();

 const phoneRegister = register('phone', {
  required: " * The field phone number is required",
  pattern: {
    value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
    message:'* not value phone format '
  }
});

  const submit = data => console.log(data);


  return (
    
    <div className={s.green_line} id='Cupon'>
       <div className={s.green_left}>
         <img src={gnome} alt='sell'></img>
    </div>
         <div className={s.green_right}>
      <div className={s.green_title}> 
      <h1> Off 5 % </h1>
      <h2> For the first order </h2>
      </div>
     <div>    
     <form onSubmit={handleSubmit(submit)} className={s.form}>
      <input type='number' name='number ' placeholder=' + 7 ' { ...phoneRegister} />
       <button className={s.grn_btn}> Get discount </button>
      </form>
      <div>     { errors.phone &&  <p>  { errors.phone?.message} </p>} </div>
      </div>
      
      </div>
      </div>
     
      
      
  )
}
