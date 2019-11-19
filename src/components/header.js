import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked(!isMenuClicked);
    if(isMenuClicked) {
      document.getElementById('dropdown').classList.remove('hidden');
    } else {
      document.getElementById('dropdown').classList.add('hidden');
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })



  if(screenWidth > 768) {
    return (
      <header className="header">
        <Link to="/"><img src="https://via.placeholder.com/100x50.jpg" alt="Home Logo"></img></Link>
        <ul className="header-nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/wagon"><img className="cart-logo" src={require('../assets/wagonicon.png')} alt="Wagon Logo"/></Link></li>
        </ul>
      </header>
    )
  }
  return (
    <>
    <header className="header">
      <Link to="/"><img src="https://via.placeholder.com/100x50.jpg" alt="Home Logo"></img></Link>
      <ul className="header-nav">
        <li><Link to="/wagon"><img className="cart-logo" src={require('../assets/wagonicon.png')} alt="Wagon Logo"/></Link></li>
        <li><img className="hamburger" src={require('../assets/menu-alt-512.png')} alt="Hamburger" onClick={() => {handleMenuClick()}}/></li>
      </ul>
    </header>
    <ul className="hidden" id="dropdown">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    </>
  )
  
}