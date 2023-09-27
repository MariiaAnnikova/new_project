import { loadCategories } from "../store/reducers/caregories"

export const load_categories = dispatch => {
  fetch('https://example-2w77.onrender.com/categories/all')
    .then(resp => resp.json())
    .then(json => dispatch(loadCategories(json)))
}