import React from 'react';
import Header from './header';
import Carousel from './carousel';
import BestSellers from './best-sellers';
import Recent from './recent';
import Footer from './footer';

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <BestSellers />
      <Recent />
      <Footer />
    </>
  )
}