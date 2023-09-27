import { loadProductItem } from "../store/reducers/product_one_item"

export const getProductItem = id => {
    return dispatch => { 
    fetch(`https://example-2w77.onrender.com/products/${id}`)
      .then(resp => resp.json())
      .then(json => 
        dispatch(loadProductItem(json[0])))
  }
}
