import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

export default function Header() {
  return (
    <header className="header">
      <Link to="/"><img src="https://via.placeholder.com/100x50.jpg" alt="Home Logo"></img></Link>
      <ul className="header-nav">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/wagon"><img className="cart-logo" src="https://via.placeholder.com/50x50.jpg" /></Link></li>
      </ul>
    </header>
  )
}