import React, { useState } from 'react';
import { Link } from 'react-router-dom';
require('../styles/login.scss');
const superagent = require('superagent');

export default function Signup() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordDoesMatch, setPasswordDoesMatch] = useState(true);

  const handleSubmit = (e) => {
    if(passwordDoesMatch) {
      e.preventDefault();
      superagent.post('https://wwwshop.herokuapp.com/signup')
        .send({
          "username": username,
          "password": password
      })
        .then(res => {
          console.log(res);
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
  }

  const handleConfirmPasswordChange = (e) => {
    if(e.target.value === password) {
      setPasswordDoesMatch(true);
    } else {
      setPasswordDoesMatch(false);
    }
  }

  return (
    <>
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" onChange={handleUsernameChange}></input>

        <label>Password</label>
        <input type="text" onChange={handlePasswordChange}></input>

        <label>Confirm Password</label>
        <input type="text" onChange={handleConfirmPasswordChange}></input>

        <input type="submit" value="Submit" disabled></input>
      </form>
    </div>
    <p>Already have an account?</p><Link to="/login">Log in</Link>
    </>
  )
};
