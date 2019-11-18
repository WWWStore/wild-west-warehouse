import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to='/'><img src="https://via.placeholder.com/200x100.jpg" alt="Home Logo"></img></Link>
    </div>
  )
}