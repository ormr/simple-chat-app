import React from 'react';

import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="login">
      <form className="login-form">
        <h1>Войти</h1>
        <div className="form-group">
          <input type="text" id="username" className="login-username" placeholder="Username" />
          <label htmlFor="username">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <use xlinkHref="#user" />
            </svg>
          </label>
        </div>
        <div className="form-group">
          <input type="password" id="password" className="login-password" placeholder="Password" autoComplete="on"/>
          <label htmlFor="password">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <use xlinkHref="#padlock" />
            </svg>
          </label>
        </div>
        <div className="form-group">
          <input type="submit" className="login-submit" value="Log in" />
        </div>
        <Link to="/and-what-you-expect?" className="login-forgotpassword">Forgot Password?</Link>
      </form>
      <svg>
        <symbol id="user" viewBox="0 0 1792 1792">
          <path d="M1329 784q47 14 89.5 38t89 73 79.5 115.5 55 172 22 236.5q0 154-100 263.5t-241 109.5h-854q-141 0-241-109.5t-100-263.5q0-131 22-236.5t55-172 79.5-115.5 89-73 89.5-38q-79-125-79-272 0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5 198.5 40.5 163.5 109.5 109.5 163.5 40.5 198.5q0 147-79 272zm-433-656q-159 0-271.5 112.5t-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5-112.5-271.5-271.5-112.5zm427 1536q88 0 150.5-71.5t62.5-173.5q0-239-78.5-377t-225.5-145q-145 127-336 127t-336-127q-147 7-225.5 145t-78.5 377q0 102 62.5 173.5t150.5 71.5h854z" />
        </symbol>
        <symbol id="padlock" viewBox="0 0 1792 1792">
          <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
        </symbol>
      </svg>
    </div>
  );
};

export {
  Login
};