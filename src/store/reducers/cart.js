const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART'
const CLEAR_CART = 'CLEAR_CART'
const INCREMENT_CART = 'INCREMENT_CART'
const DECREMENT_CART = 'DECREMENT_CART'
const DELETE_CARD = 'DELETE_CARD';

export const addToCart = payload => ({type:ADD_TO_CART, payload})
export const clearCart = payload => ({type:CLEAR_CART, payload})
export const deleteCard = payload => ({ type: DELETE_CARD, payload });
export const incrementCart = payload => ({type:INCREMENT_CART, payload})
export const decrementCart = payload => ({type:DECREMENT_CART, payload})

const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id);
    if(productInState){
      productInState.count++
      return [...state]
    } else {
      return [...state, {
        ...payload,
        count: 1
      }]
    }
  }

export const cartReducer = (state = defaultState, action) => {
    if(action.type === ADD_TO_CART){
        return checkProduct(state, action.payload)
    } else if(action.type === CLEAR_CART) { 
        return defaultState
      } else if (action.type === DELETE_CARD){
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === INCREMENT_CART) {
        state.find(el => el.id === action.payload).count++
        return [...state]
    } else if(action.type === DECREMENT_CART){
        const target_card = state.find(el => el.id === action.payload)
        if (target_card.count === 1){
          state = state.filter(el => el.id !== action.payload)
        } else {
          target_card.count--
        }
        return [...state]
      } else {
        return state
      }
    }




   