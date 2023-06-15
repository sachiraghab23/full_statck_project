import { combineReducers, applyMiddleware} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllProductReducer, addProductReducer, getProductByIdReducer, updateProductByIdReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer, loginUserReducer } from './reducers/userReducer';
import { placeOrderReducer, getUserOrdersReducer, allUserOrdersReducer } from './reducers/orderReducer';

const finalReducer = combineReducers({
  getAllProductReducer: getAllProductReducer,
  getProductByIdReducer : getProductByIdReducer,
  allUserOrdersReducer : allUserOrdersReducer,
  addProductReducer : addProductReducer,
  cartReducer: cartReducer,
  registerUserReducer : registerUserReducer,
  loginUserReducer : loginUserReducer,
  placeOrderReducer : placeOrderReducer,
  getUserOrdersReducer : getUserOrdersReducer,
  updateProductByIdReducer : updateProductByIdReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
  cartReducer: {
    cartItems: cartItems
  },
  loginUserReducer: {
    currentUser : currentUser
  }
}
const composeEnhancers = composeWithDevTools({})
const middleware = [thunk];
const store = configureStore(
  {reducer:finalReducer}, 
  initialState, 
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;