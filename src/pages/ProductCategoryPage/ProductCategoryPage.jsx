import {React, useEffect} from 'react'
import { load_category_product} from '../../requests/product_req'
import { useDispatch, useSelector  } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import s from './ProductCategoryPage.module.css'
import { sortProduct, searchPrice } from '../../store/reducers/product_items'


export default function ProductCategoryPage() {

  const { category } = useParams();

 console.log(category);

  const dispatch = useDispatch();
  const products_in_category = useSelector(state => state.product)
  const name_categories = useSelector(state => state.categories)

 console.log(products_in_category);

useEffect(() => {
     dispatch(load_category_product(category))
   },[]);

   const NameCtegories= name_categories.length >= 1 ? name_categories[category - 1].title : "";
 
console.log(NameCtegories);

  const sort_products = (event) => dispatch(sortProduct(event.target.value));

  const search = event => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(searchPrice({ min_value, max_value}));
  }

  return (


<div className={s.all_page_product_category}>
  <p>{ NameCtegories} </p>
     <div className={s.product_category_sort}>
        <div className={s.pr_category_sort_price}>
          <span>Price:</span>
              <form className={s.search_form}  onSubmit={search}>
                 <input type='number' placeholder='from' name='min' />
                 <input type='number' placeholder='to' name='max' />
                 <button>Search</button>
              </form>
        </div>
<div className={s.pr_category_sort_options} >
<span>Sort by:</span>
          <select className={s.sort_select} onInput={sort_products}>
            <option value='default'>default</option>
            <option value='title'>title</option>
            <option value='price'>price</option>
          </select>
</div>
  </div>
    <div className={s.grid_product_in_category}>
    {
        products_in_category
        .filter((el) => !el.hide)
        .map(el => <ProductCard key={el.id} {...el}/>)
      }
      </div>
      </div>
  )
}
