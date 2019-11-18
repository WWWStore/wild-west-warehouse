import React from 'react';
import Header from './header';
import Carousel from './carousel';
import BestSellers from './best-sellers';
import Recent from './recent';

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <BestSellers />
      <Recent />
    </>
  )
}