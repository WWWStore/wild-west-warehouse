import React, { useEffect } from 'react';
import BestSellers from './best-sellers';
import Recent from './recent';
import CategoriesList from './categories-list';
import Footer from './fixed-footer';

export default function Home() {
  return (
    <>
      <CategoriesList />
      <BestSellers />
      <Recent />
      <Footer />
    </>
  )
}