import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, getAllOrders } from '../../actions/orderActions';
import Loader from '../Loader';
import Error from '../Error';

export default function OrderList() {
  const allOrdersState = useSelector(state => state.allUserOrdersReducer)
  const dispatch = useDispatch();
  const { loading, error, orders } = allOrdersState;
  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])
  return (
    <div>
      <h1>Orders</h1>
      {loading && (<Loader />)}
      {error && (<Error error='Admin order request failed' />)}
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Email</th>
            <th scope="col">User ID</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order)=>{
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.transactionId}</td>
                <td>Rs {order.userAmount}/-</td>
                <td>{order.createdAt.substring(0,10)}</td>
                <td>{order.isDelivered ? 
                (<h6 className='text-success'>Delivered</h6>)
                : (<><button className='btn btn-danger' onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button></>)}</td>
              </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}
