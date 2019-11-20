import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main';
import { AuthContext } from './authContext';

const jwt = require('jsonwebtoken');
const secret = 'beskar\'gam';

function App() {
  const updateAuthenticatedUser = (token) => {
    console.log(token);
    let decoded = jwt.verify(token, secret);
    setUsername(decoded.username);
    setToken(token)
  }

  const [username, setUsername] = useState('Guest');
  const [token, setToken] = useState(null);

  const authenticatedUser = {
    username: username,
    token: token,
    changeUser: updateAuthenticatedUser
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
