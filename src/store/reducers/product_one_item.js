const defaultState = {};

const LOAD_PRODUCT = 'LOAD_PRODUCT';

export const loadProductItem = payload => ({ type: LOAD_PRODUCT, payload });

export const productItemReducer = (state = defaultState, action) => {
  if (action.type === LOAD_PRODUCT){
    return action.payload
  } else {
    return state
  }
}