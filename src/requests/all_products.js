import { loadAllProduct } from "../store/reducers/allproducts"

export const load_all_products = dispatch => {
    fetch('https://example-2w77.onrender.com/all')
      .then(resp => resp.json())
      .then(json => dispatch(loadAllProduct(json)))
}
