import React from 'react'
import './css/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';

export default function Navbar() {
  const cartState = useSelector(state => state.cartReducer)
  const userSate = useSelector(state => state.loginUserReducer)
  const dispatch = useDispatch()
  const { currentUser } = userSate;
  const cartItemNumber = cartState.cartItems.length;
  console.log(currentUser);
  
  return <>
    <nav className="navbar navbar-collapse navbar-expand-lg navbar-light bg-dark" style={{height:'80px'}}>
      <div className="container">
        <Link to="/" className='remove-link-style'>
          <div className="navbar-brand">
            YUMMY PLAZA
          </div>
        </Link>
        <div className="navbar-toggle navbar-nav"></div>
        <div className="collapse navbar-collapse navbar-nav" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto tab-name">          
            {currentUser ? (
              <Link to='/' className='remove-link-style'>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle tab-name" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {currentUser.name}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item tab-name remove-link-style" to='/orders'>order</Link>
                    <div className="dropdown-item tab-name"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >Logout</div>
                  </div>
                </div>
              </Link>
            ) : (
              <>
                {" "}
                <Link to='/login' className='remove-link-style'>
                  <div className="nav-link tab-name ">Login</div>
                </Link>
              </>
            )}

            <Link to='/cart' className='remove-link-style'>
              <div className="nav-link tab-name">
                Cart &nbsp;              
                <span className='cart-item-length'>
                  {cartItemNumber}
                </span>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </nav >
  </>
}
