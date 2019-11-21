import React from 'react';
import BestSellers from './best-sellers';
import CategoriesList from './categories-list';
import Footer from './fixed-footer';
import RecentlyViewed from './recentlyViewed';

export default function Home() {
  return (
    <>
      <CategoriesList />
      <BestSellers />
      <RecentlyViewed />
      <Footer />
    </>
  )
}