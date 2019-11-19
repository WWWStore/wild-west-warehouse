import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoriesList() {
  return (
    <ul>
      <li><Link to='/products'>All Products</Link></li>
      <li><Link to='/categories/beverages'>Beverages</Link></li>
      <li><Link to='/categories/firearms'>Firearms</Link></li>
      <li><Link to='/categories/beans'>Beans</Link></li>
      <li><Link to='/categories/explosives'>Explosives</Link></li>
      <li><Link to='/categories/accessories'>Accessories</Link></li>
      <li><Link to='/categories/saddles'>Saddles</Link></li>
      <li><Link to='/categories/horses'>Horses</Link></li>
      <li><Link to='/categories/clothing'>Clothing</Link></li>
      <li><Link to='/categories/boots'>Boots</Link></li>
      <li><Link to='/categories/hats'>Hats</Link></li>
    </ul>
  )
};
