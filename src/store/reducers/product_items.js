const defaultState = [];
let first_state = [];

const LOAD_CATEGORY_PRODUCT = 'LOAD_CATEGORY_PRODUCT';
const SORT_PRODUCT = 'SORT_PRODUCT'
const SEARCH_PRICE = 'SEARCH_PRICE';



export const loadCategoryProduct = payload => ({ type: LOAD_CATEGORY_PRODUCT, payload });
export const sortProduct = payload => ({ type: SORT_PRODUCT, payload });
export const searchPrice = payload => ({ type: SEARCH_PRICE, payload });

export const productReducer = (state = defaultState, action) => {
  if (action.type === LOAD_CATEGORY_PRODUCT){
    first_state = action.payload;
  return action.payload
}  else if (action.type === SORT_PRODUCT) {
  if (action.payload === 'default'){
    return first_state
  } else if(typeof state[0][action.payload] === 'string') {
    return [...state].sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
  } else {
    return [...state].sort((a, b) => a[action.payload] - b[action.payload])
  }
} else if (action.type === SEARCH_PRICE){
  const { min_value, max_value } = action.payload;
        return state.map(el => {
            if (el.discont_price >= min_value && el.discont_price <= max_value) {
                el.hide = false
            } else {
                el.hide = true
            }
            return el
        })
    }   else {
        return state
    }
}