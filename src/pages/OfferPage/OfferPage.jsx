import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OfferCard from '../../components/OfferCard/OfferCard';
import { load_all_products} from '../../requests/all_products'
import s from './OfferPage.module.css'


export default function OfferPage() {

   const dispatch = useDispatch();

    const all_products = useSelector(state => state.all_products);

  console.log(all_products);
    
  
  useEffect(() => {
        dispatch(load_all_products);
      }, []);

 
    
  return (
    <div id='Sale'>
    <h1> Sale </h1>
    <div className={s.offer_card}>
      
       {
    all_products
    .sort(() => 0.5 - Math.random()).slice(0, 3)
    .map((el) => <OfferCard key={el.id} {...el} />)
  }
    </div>
    </div>
  )
}
