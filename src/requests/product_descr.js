import { loadProductItem } from "../store/reducers/product_one_item"

export const getProductItem = id => {
    return dispatch => { 
    fetch(`http://localhost:3333/products/${id}`)
      .then(resp => resp.json())
      .then(json => 
        dispatch(loadProductItem(json[0])))
  }
}
