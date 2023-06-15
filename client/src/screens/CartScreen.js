import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart, deleteFromCart} from '../actions/cartActions';
import Checkout from '../components/Checkout';

export default function CartScreen() {
  const cartstate = useSelector((state)=>state.cartReducer);
  const cartItems = cartstate.cartItems;
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce((x,item)=> x+item.price, 0);
 
  return (
    <div>
      <div className='row justify-content-center' style={{marginTop:'1.25rem'}}>
        <div className="col-md-5">
          <h2 className='cart-heading' style={{width:"300px"}}>My Cart</h2>
          {cartItems.map((item)=>{
            return <div className="flex-container">
              <div className='text-left m-1 w-100' key={item._id}>
                <h1>{item.name} [{item.varient}]</h1>
                <h1>Price : {item.quantity} X {item.prices[0][item.varient]} = {item.price}</h1>
                <h1 className='d-inline'>Quantity : 
                  <i className="fa fa-plus text-success" aria-hidden='true' onClick={(item)=>{dispatch(addToCart(item, item.quantity+1, item.varient));
                  }}></i>
                  {item.quantity}
                  <i className="fa fa-minus" aria-hidden='true' onClick={(item)=>{
                    dispatch(addToCart(item, item.quantity-1, item.varient));
                  }}></i>
                </h1>
                <hr />
              </div>
              <div className='m-1 w-100'>
                <img src={item.image} className="cart-item-image" alt="item" />
              </div>
              <div className='m-1 w-100'>
                  <i className="fa fa-trash mt-5" aria-hidden='true' 
                  onClick={()=>{dispatch(deleteFromCart(item))}}></i>
              </div>
            </div>
          })}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{fontSize:'45px'}}>SubTotal: {subtotal}/-</h2>
          <Checkout subtotal={subtotal}/>
        </div>
      </div>
    </div>
  )
}
