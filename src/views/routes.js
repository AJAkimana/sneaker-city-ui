import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './homepage';
import { ViewProduct } from './viewProduct';
import { ViewCart } from './viewCart';

export const Routes = props => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/products/:productId' exact component={ViewProduct} />
      <Route path='/my-cart' exact component={ViewCart} />
    </Switch>
  );
};
