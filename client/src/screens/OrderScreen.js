import React, {useEffect} from 'react'
import './css/OrderScreen.css';
import {useDispatch, useSelector} from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from '../components/Error';
import Loader from '../components/Loader';

export default function OrderScreen() {
  const dispatch = useDispatch();
  const orderState = useSelector(state=>state.getUserOrderReducer)
  const {orders, error, loading} = orderState
  useEffect(()=>{
    dispatch(getUserOrders())
  },[dispatch])
  return (
    <div>
      <h2 style={{fontSize:'35px'}}>My orders</h2>
      <hr />
      <div className="row justify-content-center">
        {loading && (<Loader/>)}
        {error && (<Error error='Something went wrong'/>)}
        {orders && orders.map(order=>{
          return <div className='col-md-8' style={{backgroundColor:'red',color:'white'}}>
            <div className="flex-container">
              <div className='text-left w-100 m-1'>
                <h2 style={{fontSize:'25px'}}>Item</h2>
                <hr />
                {order.orderItems.map(item=>{
                  return <div>
                    <p>{item.name} [{item.varient}]*{item.quantity} = {item.price}</p>
                  </div>
                })}
              </div>
              <div className='text-left w-100 m-1'>
                <h2 style={{fontSize:'25px'}}>Address</h2>
                <hr />
                <p>Street : {order.shippingAddress.street}</p>
                <p>City : {order.shippingAddress.city}</p>
                <p>Country : {order.shippingAddress.country}</p>
                <p>Pincode : {order.shippingAddress.pincode}</p>
              </div>
              <div className='text-left w-100 m-1'>
                <h2 style={{fontSize:'25px'}}>Order info</h2>
                <hr />
                <p>Order amount : {order.orderAmount}</p>
                <p>Date : {order.createdAt.substring(0,10)}</p>
                <p>Transaction Id : {order.transactionId}</p>
                <p>Order Id : {order._id}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
