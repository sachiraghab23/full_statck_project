import axios from "axios";
import swal from "sweetalert";

export const getAllProducts = ()=> async (dispatch)=>{
  dispatch({type:"GET_PRODUCTS_REQUEST"})
  try{
    const response = await axios.get("/api/products/getAllProducts");
    dispatch({type:"GET_PRODUCTS_SUCCESS", payload : response.data});
  } catch(error){
    dispatch({type:"GET_PRODUCTS_FAILED", payload : error})
  }
};

export const addProduct = (product)=> async (dispatch)=>{
  dispatch({type:"ADD_PRODUCT_REQUEST"});
  try{
    await axios.post("/api/products/addproduct",{product})    
    dispatch({type:"ADD_PRODUCT_SUCCESS"});
  } catch(error){
    dispatch({type:"ADD_PRODUCT_FAILED", payload : error})
  }
}

export const getProductById = (productId)=> async (dispatch)=>{
  dispatch({type:"GET_PRODUCTBYID_REQUEST"});
  try{
    const response = await axios.post("/api/products/getproductbyid",{productId});
    dispatch({type:"GET_PRODUCTBYID_SUCCESS",payload: response.data})
  } catch(error){
    dispatch({type:"GET_PRODUCTBYID_FAILED", payload : error})
  }
}

export const updateProduct = (updatedProduct)=> async (dispatch)=>{
  dispatch({type:"UPDATE_PRODUCTBYID_REQUEST"})
  try{
    const response = await axios.post("/api/products/updateproduct",{updatedProduct});
    dispatch({type:"UPDATE_PRODUCTBYID_SUCCESS",payload: response.data})
    window.location.href = "/admin/productslist"
  } catch(error){
    dispatch({type:"UPDATE_PRODUCTBYID_FAILED", payload : error})
  }
};

export const deleteProduct = (productId) => async (dispatch)=>{
  try{
    await axios.post("/api/products/deleteproduct",{productId});
    swal("Item removed successfully","success");
    window.location.href="/admin/productslist";
  }catch(error){
    swal("Error while deleting product");
  }  
}

export const filterProduct = (searchKey,category)=> async (dispatch)=>{
  let filteredProduct;
  dispatch({type:"GET_PRODUCTS_REQUEST"});
  try{
    const res = await axios.get("/api/products/getAllProducts");
    filteredProduct = res.data.filter((product)=> product.name.toLowercase().includes(searchKey)
    );
    if(category !== "all"){
      filteredProduct = res.data.filter((product) => 
        product.category.toLowercase()===category);
    }
    dispatch({type:"GET_PRODUCTS_SUCCESS", payload : filteredProduct})
  } 
  catch(error){
    dispatch({type:"GET_PRODUCTS_FAILED", payload : error})
  }
}