import axios from 'axios';
import swal from 'sweetalert';

export const registerUser = (user)=> async (dispatch) =>{
  dispatch({type:'USER_REGISTER_REQUEST'});
  try{
    await axios.post('/api/users/register', user);
    dispatch({type:'USER_REGISTER_SUCCESS'});
  } catch (error){
    dispatch({type:'USER_REGISTER_FAILED', payload: error});
  }
};

export const loginUser = (user)=>async (dispatch) =>{
  dispatch({type:'USER_LOGIN_REQUEST'})
  try{
    const response = await axios.post('/api/users/login', user);
    dispatch({type:'USER_LOGIN_SUCCESS', payload: response.data})
    localStorage.setItem('currentUser',JSON.stringify(response.data))
    window.location.href='/';
  } catch (error){
    dispatch({type:'USER_LOGIN_FAILED', payload: error})
  }
};

export const logoutUser=()=>(dispatch)=>{
  localStorage.removeItem('currentUser')
  window.location.href='/login'
}

export const getAllUsers = ()=> async (dispatch)=>{
  dispatch({type:'GET_USERS_REQUEST'})
  try{
    const response = await axios.get('/api/users/getallusers');
    dispatch({type:'GET_USERS_SUCCESS', payload : response.data})
  } catch(error){
    dispatch({type:'GET_USERS_FAILED', payload : error})
  }
}

export const deleteUser = (userId) => async (dispatch)=>{
  try{
    await axios.post('/api/users/deleteUser',{userId})
    swal("User deleted successfully",'success');
    window.location.reload();
  } catch(error){
    swal('Error while deleting user');
  }
};