import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loader from '../components/Loader';
import './css/Register.css';
import Success from '../components/Success';

export default function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const dispatch = useDispatch();
  const loginState = useSelector(state=>state.loginUserReducer)
  const {error, loading, success} = loginState

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  const loginHandler = () => {
    const user = {
      email,
      password
    };
    dispatch(loginUser(user));
  };

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          {loading && (<Loader/>)}
          {error && (<Error error='Invalid credentials'/>)}
          {success && (<Success success='User logged in successfully' />)}
          <h2 className='text-center m-2 login-heading'>Login</h2>
          <div>
            <input type="email" placeholder='Email' className='form-control'
              value={email} onChange={(e) => { setemail(e.target.value) }} required />
            <input type="password" placeholder='Password' className='form-control'
              value={password} onChange={(e) => { setpassword(e.target.value) }} required />
            <button className='btn mt-3 mb-3' onClick={loginHandler}>Login</button><br/>
            <Link to='/register' className='click-link'>Click here to register</Link>
          </div>
        </div>
      </div>
    </>
  )
}
