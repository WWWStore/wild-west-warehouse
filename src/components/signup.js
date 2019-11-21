import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../authContext';
import Footer from './footer';

require('../styles/login.scss');
const superagent = require('superagent');

export default function Signup() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [loginWasSuccessful, setLoginWasSuccessful] = useState(false);
  const [passwordDoesMatch, setPasswordDoesMatch] = useState(true);

  const authenticatedUser = useContext(AuthContext);

  const handleSubmit = (e) => {
    if(passwordDoesMatch) {
      e.preventDefault();
      e.target.reset();
      superagent.post('https://wwwshop.herokuapp.com/signup')
        .send({
          "username": username,
          "password": password
      })
        .then(res => {
          authenticatedUser.changeUser(res.text);
          setLoginWasSuccessful(true);
        })
    } else {
      alert('Password fields must match');
    }
    
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if(e.target.value === confirmPassword && password) {
      setPasswordDoesMatch(true);
      document.getElementById('submit').removeAttribute('disabled');
    } else {
      let flag=document.createAttribute("disabled");
      document.getElementById('submit').setAttributeNode(flag);
    }
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if(e.target.value === password) {
      setPasswordDoesMatch(true);
      document.getElementById('submit').removeAttribute('disabled');
    } else {
      setPasswordDoesMatch(false);
      let flag=document.createAttribute("disabled");
      document.getElementById('submit').setAttributeNode(flag);
    }
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
  
          <label>Confirm Password</label>
          <input type="password" onChange={handleConfirmPasswordChange}></input>
          <div className="submitbutton">
          <input type="submit" value="Submit" disabled id="submit"></input></div>
        </form>
      </div>
      <p>{authenticatedUser.username}</p>
      <div className="signup">
      <p>Already have an account?</p><Link to="/login">Log in</Link></div>
      <Footer />
      </>
    )
  }
  
};
