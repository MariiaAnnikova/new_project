import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load_all_products } from '../../requests/all_products'
import AllProductsCard from '../../components/AllProductsCard/AllProductsCard';
import s from  './ProductAllPage.module.css'

export default function ProductAllPage() {

    const dispatch = useDispatch();

    const all_products = useSelector(state => state.all_products);

  console.log(all_products);
    
  
  useEffect(() => {
        dispatch(load_all_products);
      }, []);
      
    console.log(load_all_products);
      return (
        <div className={s.product_page}>
          {
          all_products.map((el) => <AllProductsCard key={el.id} {...el} />)
        }
      </div>
  )
}
