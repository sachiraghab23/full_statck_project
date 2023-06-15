import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import './css/Admin.css';
import AddNewProduct from '../components/Admin Panel/AddNewProduct';
import EditProduct from '../components/Admin Panel/EditProduct';
import OrderList from '../components/Admin Panel/OrderList';
import ProductsList from '../components/Admin Panel/ProductsList';
import UserList from '../components/Admin Panel/UserList';

export default function Admin({history}) {
  const userstate = useSelector((state)=>state.loginUserReducer);
  const {currentUser }=userstate;
  useEffect(()=>{
    if(localStorage.getItem('currentUser')===null || currentUser.isAdmin){
      window.location.href="/";
    }
  }, [currentUser]);

  return (<>
    <div>
      <h2>Admin Panel</h2>
      <div className='row'>
        <div className="col-md-2">
          <div class="btn-group-vertical btn-set" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" onClick={()=>history.push('/admin/userlist')} style={{minHeight:'400px'}}>All users</button>
            <button type="button" class="btn btn-secondary" onClick={()=>history.push('/admin/productslist')}>All products</button>
            <button type="button" class="btn btn-secondary" onClick={()=>history.push('/admin/addnewproduct')}>Add new product</button>
            <button type="button" class="btn btn-secondary" onClick={()=>history.push('/admin/orderlist')}>All orders</button>
          </div>
        </div>
        <div className="col-md-10">
          <Routes>
            <Route path='/admin' component={<UserList/>} exact />
            <Route path='/admin/addnewproduct' component={<AddNewProduct/>} exact />
            <Route path='/admin/editproduct/:productId' component={<EditProduct/>} exact />
            <Route path='/admin/orderlist' component={<OrderList/>} exact />
            <Route path='/admin/productslist' component={<ProductsList/>} exact />
            <Route path='/admin/userlist' component={<UserList/>} exact />
          </Routes>
        </div>
      </div>
    </div>
    </>
    )
}
