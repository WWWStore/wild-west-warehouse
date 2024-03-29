import React, { useState, useContext } from 'react';
import base64 from 'base-64';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../authContext';
import Footer from './fixed-footer';

const superagent = require('superagent');
require('cors');
require('../styles/login.scss');

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginWasSuccessful, setLoginWasSuccessful] = useState(false);
  const authenticatedUser = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    superagent.get('https://wwwshop.herokuapp.com/signin')
      .set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`)
      .then(res => {
        authenticatedUser.changeUser(res.text);
        setLoginWasSuccessful(true);
      });
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  if(loginWasSuccessful) {
    return <Redirect to="/" />
  } else {
    return (
      <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" onChange={handleUsernameChange}></input>
  
          <label>Password</label>
          <input type="password" onChange={handlePasswordChange}></input>
          <div className="submitbutton">
          <input type="submit" value="Submit"></input></div>
        </form>
      </div>
      <div className="signup">
      <p>Don't have an account?</p><Link to="/signup">Sign up</Link>
      </div>
      <Footer />
      </>
    )
  }
};
