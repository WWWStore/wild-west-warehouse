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
      <Link to='/products'><li>All Products</li></Link>
      <Link to='/categories/beverages'><li>Beverages</li></Link>
      <Link to='/categories/firearms'><li>Firearms</li></Link>
      <Link to='/categories/beans'><li>Beans</li></Link>
      <Link to='/categories/explosives'><li>Explosives</li></Link>
      <Link to='/categories/accessories'><li>Accessories</li></Link>
      <Link to='/categories/saddles'><li>Saddles</li></Link>
      <Link to='/categories/horses'><li>Horses</li></Link>
      <Link to='/categories/clothing'><li>Clothing</li></Link>
      <Link to='/categories/boots'><li>Boots</li></Link>
      <Link to='/categories/hats'><li>Hats</li></Link>
    </ul>
  )
};
