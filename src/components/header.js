import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/"><img src="https://via.placeholder.com/100x50.jpg" alt="Home Logo"></img></Link>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/wagon"><img src="https://via.placeholder.com/50x50.jpg"></img></Link></li>
      </ul>
    </div>
  )
}