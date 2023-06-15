import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions';
import Error from '../components/Error';
import Success from '../components/Success';
import Loader from '../components/Loader';
import './css/Product.css';

export default function Checkout({ subtotal }) {
  const stripeKey = 'pk_test_51NFi0TSJJkeUmSE2XtxQllKTfgor4Q8j9U3IWti08uyJmMiTdVfCGkjG5Oct36Gc3wrZnyfv9qitgVYyTBzAU7KI00fBquu2SM';
  const orderState = useSelector((state)=>state.placeOrderReducer)
  const {loading, error, success} = orderState;
  const dispatch = useDispatch();
  function tokenHandler(token){
    dispatch(placeOrder(token, subtotal))
  }
  return (
    <div>
      {loading && (<Loader/>)}
      {error && (<Error error='Something went wrong'/>)}
      {success && (<Success success='Your order placed successfully'/>)}
      <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHandler}
        stripeKey={stripeKey} //product-key to be inserted inside the singlequote
        currency='INR'
      >
        <button className='btn'>Pay Now</button>
      </StripeCheckout>
    </div>
  )
}
