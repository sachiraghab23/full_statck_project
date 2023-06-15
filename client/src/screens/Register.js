import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Error from '../components/Error';
import Success from '../components/Success';
import Loader from '../components/Loader';
import { registerUser } from '../actions/userActions';
import './css/Register.css';

export default function Register() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('');
  var isAdmin = false;
  const merchantCheck = document.getElementById('isMerchant');
  const [password, setpassword] = useState('')
  const [cpassword, setcpassword] = useState('')
  const registerState = useSelector(state=>state.registerUserReducer)
  const {error, loading, success} = registerState;
  
  const dispatch = useDispatch();
  function register() {
    if (password !== cpassword) {
      alert('password not matched')
    }
    else {
      isAdmin = merchantCheck.checked;
      const user = {
        name,
        email,
        isAdmin,
        password
      }
      dispatch(registerUser(user));
      window.location.href='/login';
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          {loading && (<Loader/>)}
          {error && (<Error error='Email already registered'/>)}
          {success && (<Success success='User Registered successfully'/>)}

          <h2 className='text-center m-2 register-heading'>Register</h2>
          <div>
            <input type="text" placeholder='Name' className='form-control'
              value={name} onChange={(e) => { setname(e.target.value) }} required />
            <input type="email" placeholder='Email' className='form-control'
              value={email} reaonChange={(e) => { setemail(e.target.value) }} required />
            <div className='form-check'>
              <input className='form-check-input' type='checkbox' value='' id='isMerchant' />
              <label className='form-check-label' for='isAdmin'>Are you merchant</label>
            </div>
            
            <input type="password" 
              placeholder='Password' 
              className='form-control'
              value={password} 
              onChange={(e) => { setpassword(e.target.value) }} 
              required 
              id='password'
              />
                          
            <input type="password" 
              placeholder='Confirm password'
              className='form-control'
              value={cpassword}
              onChange={(e) => { setcpassword(e.target.value) }} 
              required />
            <button className='btn mt-3 mb-3' onClick={register}>Register</button>
            <br />
            <Link to='/login' className='click-link'>Click here to login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
