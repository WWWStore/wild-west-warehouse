import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import Carousel from './carousel';
import BestSellers from './best-sellers';
import Recent from './recent';

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <ul>
        <li><Link to='/category/beverages'>Beverages</Link></li>
        <li><Link to='/category/firearms'>Firearms</Link></li>
        <li><Link to='/category/beans'>Beans</Link></li>
        <li><Link to='/category/explosives'>Explosives</Link></li>
        <li><Link to='/category/accessories'>Accessories</Link></li>
        <li><Link to='/category/saddles'>Saddles</Link></li>
        <li><Link to='/category/horses'>Horses</Link></li>
        <li><Link to='/category/clothing'>Clothing</Link></li>
        <li><Link to='/category/boots'>Boots</Link></li>
        <li><Link to='/category/hats'>Hats</Link></li>
      </ul>
      <BestSellers />
      <Recent />
    </>
  )
}