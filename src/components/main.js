import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Header from './header';
import Home from './home';
import Category from './category';
import Product from './product';
import Login from './login';
import Signup from './signup';
import About from './about';
import Wagon from './wagon';

export default function Main(props) {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/category/:slug' component={Category} />
          <Route path='/products' component={Product} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/about' component={About} />
          <Route exact path='/wagon' component={Wagon} />
          <Route render={
            () => <h1>Not Found</h1>
          } />
        </Switch>
      </main>
      <ul>
        <li><Link to='/products'>All Products</Link></li>
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
    </>
  )
};
