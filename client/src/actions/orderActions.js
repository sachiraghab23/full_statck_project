import axios from "axios";
export const placeOrder = (token, subTotal) => async (dispatch,getState)=>{
  dispatch({type:"PLACE_ORDER_REQUEST"});
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try{
    await axios.post("/api/orders/placeorder", {
      token, 
      subTotal,
      currentUser, 
      cartItems,
    });
    dispatch({type:"PLACE_ORDER_SUCCESS"});
  } catch(error){
    dispatch({type:"PLACE_ORDER_FAILED"})
  }
};

export const getUserOrders = ()=> async (dispatch, getState)=>{
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({type:"USER_ORDER_REQUEST"});
  try{
    const response = await axios.post("/api/orders/getuserorders", {userId : currentUser._id});
    dispatch({type:"USER_ORDER_SUCCESS", payload : response.data})
  } catch(error){
    dispatch({type:"USER_ORDER_FAILED", payload : error});
  }
}

export const getAllOrders = ()=> async (dispatch, getState)=>{
  // const currentUser = getState().loginUserReducer.currentUser
  dispatch({type:"ALL_ORDER_REQUEST",});
  try{
    const response = await axios.get("/api/orders/alluserorder");
    dispatch({type:"ALL_ORDER_SUCCESS", payload : response.data})
  } catch(error){
    dispatch({type:"ALL_ORDER_FAILED", payload : error})
  }
};

export const deliverOrder = (orderId)=> async (dispatch, getState)=>{
  dispatch({type:"GET_ALL_ORDER_REQUEST",});
  try{
    await axios.post("/api/orders/deliverorder",{orderId});
    alert("Order delivered successfully")
    const orders = await axios.get("/api/orders/alluserorder");
    dispatch({type:"GET_ALL_ORDER_SUCCESS", payload : orders.data})
    window.location.href="/admin/orderlist";
  } catch(error){
    dispatch({type:"GET_ALL_ORDER_FAILED", payload : error});
  }
};