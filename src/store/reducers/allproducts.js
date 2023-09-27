const defaultState = [];

const LOAD_ALL_PRODUCT = 'LOAD_ALL_PRODUCT';

export const loadAllProduct = payload => ({ type: LOAD_ALL_PRODUCT, payload});

export const allProductReducer = (state = defaultState, action) => {
  if (action.type === LOAD_ALL_PRODUCT){
    return action.payload
  } else {
    return state
  }
}