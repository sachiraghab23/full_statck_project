export const addToCart= (product, quantity, varient)=>(dispatch, getState) => {
  var cartItem = {
    name : product.name,
    _id : product._id,
    image : product.image,
    varient : varient,
    quantity : Number(quantity),
    prices : product.prices,
    price : product.prices[0][varient] * quantity,
  };
  
  if(cartItem.quantity>10){
    alert('You cannot add more than 10.')
  }
  else{
    if(cartItem.quantity<1){
      dispatch({type:'DELETE_FROM_CART', payload:product})
    }
    else{
      dispatch({type:'ADD_TO_CART', payload : cartItem})
      localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems));
    }
  }  
}

export const deleteFromCart=(product)=>(dispatch, getState)=>{
  dispatch({type:'DELETE_FROM_CART', payload:product});
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems",JSON.stringify(cartItems));
};