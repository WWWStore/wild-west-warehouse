import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authContext';
import '../styles/header.scss';
const styles= require('../styles/dropdown.scss');

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const authenticatedUser = useContext(AuthContext);

  const [isActive, setIsActive] = useState(false);
  let classString = isActive ? "dropdown" : "dropdown hidden";

  const handleHamburgerClick = () => {
    if(isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  }
  
  const handleClick = useCallback(event => {
    console.log(isActive)
    if (!document.getElementsByClassName('dropdown')[0].classList.contains('hidden')) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if (isActive && screenWidth <= 768) {
      window.addEventListener('click', handleClick);
      return () => {
        window.removeEventListener('click', handleClick);
        window.removeEventListener('resize', handleResize);
      }
    }
  });

  let regex = /^NONUSER-/
  let displayUser = regex.test(authenticatedUser.username) ? 'Guest' : authenticatedUser.username;

  if(screenWidth > 768) {
    return (
      <header className="header">
        <div className="userandlogo">
          <Link to="/">
            <img className="www-logo" src={require('../assets/wwwlogo.png')} alt="Home Logo"/>
          </Link>
          <p className="username-display">Howdy, {displayUser}!</p>
        </div>
        <ul className="header-nav">
          <li><Link to="/about" className="border">About</Link></li>
          <li><Link to="/login" className="border">Login</Link></li>
          <li><Link to="/wagon" className="border"><img className="cart-logo" src={require('../assets/wagonicon.png')} alt="Wagon Logo"/></Link></li>
        </ul>
      </header>
    )
  }
  return (
    <>
      <header className="header">
      <Link to="/"><img className="www-logo"
          src={require('../assets/wwwlogo.png')} alt="Home Logo"></img></Link>
          
        <ul className="header-nav">
          <li><Link to="/wagon" className="mobile-wagon"><img className="cart-logo" src={require('../assets/wagonicon.png')} alt="Wagon Logo"/></Link></li>
          <li><img className="hamburger" src={require('../assets/menu-alt-512.png')} alt="Hamburger" onClick={handleHamburgerClick}/></li>
        </ul>
      </header>
      <ul style={styles} className={classString} id="dropdown">
        <Link to="/login"><li>Login</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
    </>
  )
  
}