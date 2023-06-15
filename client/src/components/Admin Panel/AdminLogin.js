import React from 'react';
import {Link} from 'react-router-dom';

export default function AdminLogin() {
  return (
    <>
      {/*  Pills navs*/}
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <Link 
            className="nav-link active" 
            id="tab-login" 
            data-mdb-toggle="pill" 
            to="pills-login" 
            role="tab"
            aria-controls="pills-login" 
            aria-selected="true">Login</Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link className="nav-link" 
            id="tab-register" 
            data-mdb-toggle="pill" 
            to="pills-register" 
            role="tab"
            aria-controls="pills-register" 
            aria-selected="false">Register</Link>
        </li>
      </ul>
      {/* Pills navs  */}

      {/* Pills content  */}
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form>            
            <p className="text-center">or:</p>

            {/* Email input  */}
            <div className="form-outline mb-4">
              <input type="email" id="loginName" className="form-control" />
              <label className="form-label" for="loginName">Email address</label>
            </div>

            {/* Password input  */}
            <div className="form-outline mb-4">
              <input type="password" id="loginPassword" className="form-control" />
              <label className="form-label" for="loginPassword">Password</label>
            </div>

            
            {/* Submit button  */}
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

            {/* Register buttons */}
            <div className="text-center">
              <p>Not a member? <Link to="/register">Register</Link></p>
            </div>
          </form>
        </div>
        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
          <form>
            {/* Name input  */}
            <div className="form-outline mb-4">
              <input type="text" id="registerName" className="form-control" />
              <label className="form-label" for="registerName">Name</label>
            </div>

            {/* Phone input */}
            <div className="form-outline mb-4">
              <input type="text" id="registerUsername" className="form-control" />
              <label className="form-label" for="registerUsername">Username</label>
            </div>

            {/* Email input  */}
            <div className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label" for="registerEmail">Email</label>
            </div>

            {/* Password input  */}
            <div className="form-outline mb-4">
              <input type="password" id="registerPassword" className="form-control" />
              <label className="form-label" for="registerPassword">Password</label>
            </div>

            {/* Repeat Password input  */}
            <div className="form-outline mb-4">
              <input type="password" id="registerRepeatPassword" className="form-control" />
              <label className="form-label" for="registerRepeatPassword">Repeat password</label>
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
          </form>
        </div>
      </div>
      {/* Pills content     */}
    </>
  )
}
