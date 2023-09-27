import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './reducers/caregories';
import thunk from 'redux-thunk'
import { productReducer} from './reducers/product_items';
import { productItemReducer } from './reducers/product_one_item';
import { allProductReducer } from './reducers/allproducts';
import { cartReducer } from './reducers/cart';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';



const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2

     
    
  }

const rootReducer = combineReducers({
 categories: categoriesReducer,
 product:productReducer,
 item_product:productItemReducer,
 all_products:allProductReducer,
 cart:cartReducer 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
//const persistor = persistStore(store)
//export { persistor}