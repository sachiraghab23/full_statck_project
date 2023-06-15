import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllUsers, deleteUser } from '../../actions/userActions';
import Loader from '../Loader';

export default function UserList() {
  const userstate = useSelector(state=> state.getAllUsersReducer);
  const dispatch = useDispatch();
  const {loading, error, users}= userstate;
  useEffect(()=>{
    dispatch(getAllUsers())
  },[dispatch])
  return (
    <div>
      <h1>Users list</h1>
      {loading && <Loader/>}
      {error && {}}
      <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">S/n</th>
      <th scope="col">User Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {users &&
      users.map((user,i)=>{
        return (<tr key={user._id}>
          <td>{i+1}</td>
          <td>{user._id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <i class="bi bi-trash" style={{cursor:'pointer', color:'red'}}
            onClick={()=>{dispatch(deleteUser(user._id))}}></i>
          </td>
        </tr>
        );
      })}
  </tbody>
</table>
    </div>
  )
}
