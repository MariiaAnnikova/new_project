
import { loadCategoryProduct } from "../store/reducers/product_items"

export const load_category_product = category => {
  return (dispatch) => {
    fetch(`http://localhost:3333/categories/${category}`)
    .then(resp => resp.json())
    .then(json => {
      const payload = json.map(el => ({
        ...el, 
        hide: false }));
      dispatch(loadCategoryProduct(payload))
    })
  }
 }
 
