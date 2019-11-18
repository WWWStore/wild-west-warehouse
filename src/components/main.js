import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home';
import Category from './category';
import Product from './product';
import Login from './login';
import Signup from './signup';
import About from './about';
import Wagon from './wagon';

export default function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/category/:slug' component={Category} />
        <Route path='/product/:id' component={Product} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/about' component={About} />
        <Route exact path='/wagon' component={Wagon} />
        <Route render={
          () => <h1>Not Found</h1>
        } />
      </Switch>
    </main>
  )
};
