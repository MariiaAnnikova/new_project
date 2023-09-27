import React, { useEffect}  from 'react'
import CatalogCard from '../../components/CatalogCard/CatalogCard'
import { load_categories } from '../../requests/categories'
import { useDispatch, useSelector  } from 'react-redux'
import s from './CatalogPage.module.css'


export default function CatalogPage( { id }) {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
  console.log(categories);
  
  
    useEffect(() => {
      dispatch(load_categories)
    }, []);
  


  return (
    <div>
    <h1> Catalog </h1>
  
  <div className={s.catalog_page}>
 
  {   
     categories
     //.Math.random() * categories.length
     .sort(() => 0.5 - Math.random()).slice(0, 4)
     .map ((el) => <CatalogCard key={el.id} {...el} />)
  } 
</div>

</div>
)
}

