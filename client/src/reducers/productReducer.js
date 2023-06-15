export const getAllProductReducer = (state={products : []},action)=>{
  switch(action.type){
    case 'GET_PRODUCTS_REQUEST' : return{
      ...state,
      loading:true,
    }
    case 'GET_PRODUCTS_SUCCESS' : return{
      products: action.payload,
      loading : false,
    }
    case 'GET_PRODUCTS_FAILED' : return{
      error: action.payload,
      loading : false
    }
    default : return state
  }
}

export const addProductReducer = (state={},action)=>{
  switch(action.type){
    case 'ADD_PRODUCT_REQUEST' : return{
      ...state,
      loading:true,
    };
    case 'ADD_PRODUCT_SUCCESS' : return{
      loading : false,
      success : true,
    };
    case 'ADD_PRODUCT_FAILED' : return{
      error: action.payload,
      loading : false
    }
    default : return state;
  }
};

export const getProductByIdReducer = (state={},action)=>{
  switch(action.type){
    case 'GET_PRODUCTBYID_REQUEST' : return{
      ...state,
      loading:true
    };
    case 'GET_PRODUCTBYID_SUCCESS' : return{
      product: action.payload,
      loading : false
    }
    case 'GET_PRODUCTBYID_FAILED' : return{
      loading : false,
      error: action.payload
    }
    default : return state
  }
}

export const updateProductByIdReducer = (state={},action)=>{
  switch(action.type){
    case 'UPDATE_PRODUCTBYID_REQUEST' : return{
      ...state,
      updateloading:true
    };
    case 'UPDATE_PRODUCTBYID_SUCCESS' : return{
      updatesuccess: action.payload,
      updateloading : false
    }
    case 'UPDATE_PRODUCTBYID_FAILED' : return{
      updateloading : false,
      updateerror: action.payload,
    }
    default : return state;
  }
};