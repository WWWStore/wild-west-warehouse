import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main';
import { AuthContext } from './authContext';
import { useCookies } from 'react-cookie';
//import { CookiesProvider } from 'react-cookie';

const jwt = require('jsonwebtoken');

function App() {
  const updateAuthenticatedUser = (token) => {
    console.log(token);
    let decoded = jwt.decode(token);
    setCookie('token', token);
    setUsername(decoded.username);
    setToken(token)
  }

  const [username, setUsername] = useState('Guest');
  const [token, setToken] = useState(null);
  const [cookies, setCookie] = useCookies();

  let authenticatedUser;

  if(cookies.token) {
    authenticatedUser = {
      username: jwt.decode(cookies.token).username,
      token: cookies.token,
      changeUser: updateAuthenticatedUser
    }
  } else {
    authenticatedUser = {
      username: username,
      token: token,
      changeUser: updateAuthenticatedUser
    }
  }

  return (
      <AuthContext.Provider value={authenticatedUser}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
