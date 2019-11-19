import React from 'react';

import Carousel from './carousel';
import BestSellers from './best-sellers';
import Recent from './recent';

export default function Home() {
  return (
    <>
      <Carousel />
      <BestSellers />
      <Recent />
    </>
  )
}