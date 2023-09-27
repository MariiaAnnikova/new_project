import React, { useEffect} from 'react'
import { load_categories } from '../../requests/categories'
import { useDispatch, useSelector  } from 'react-redux'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import s from './CategoriesPage.module.css'

export default function CategoriesPage() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
console.log(categories);


  useEffect(() => {
    dispatch(load_categories)
  }, []);



  return (
    <div>
      <h1>Categories</h1>
    <div className={s.category_grid}>
    
      {
      categories.map((el) => <CategoryCard key={el.id} {...el} />)
    }
  </div>
  </div>
  )
}
