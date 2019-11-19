import React from 'react';

import Carousel from './carousel';
import BestSellers from './best-sellers';
import Recent from './recent';
import Footer from './footer';
import CategoriesList from './categories-list';

export default function Home() {
  return (
    <>
      <Carousel />
      <CategoriesList />
      <BestSellers />
      <Recent />
      <Footer />
    </>
  )
}