import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './header';
import Home from './home';
import Category from './category';
import Product from './product';
import Login from './login';
import Signup from './signup';
import About from './about';
import Wagon from './wagon';
import ProductDetails from './product-details';

import '../styles/main.scss';

export default function Main(props) {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/categories/:slug' component={Category} />
          <Route exact path='/products' component={Product} />
          <Route path='/products/:id' component={ProductDetails} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/about' component={About} />
          <Route exact path='/wagon' component={Wagon} />
          <Route render={
            () => <h1>Not Found</h1>
          } />
        </Switch>
      </main>
    </>
  )
};
