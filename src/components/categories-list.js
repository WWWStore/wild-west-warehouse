import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import '../styles/categories-list.scss';

export default function CategoriesList() {
  const [isActive, setIsActive] = useState(false);
  let classString = isActive ? "categories-list active" : "categories-list"

  const handleListClick = () => {
    setIsActive(true);
  }

  const handleClick = useCallback(event => {
    console.log('click')
    if (document.getElementsByClassName('categories-list')[0].classList.contains('active')) {
      document.getElementsByClassName('categories-list')[0].classList.remove('active');
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      window.addEventListener('click', handleClick);
      return () => {
        window.removeEventListener('click', handleClick);
      }
    }
  });

  return (
    <ul className={classString} onClick={handleListClick}>
      Select Category
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
