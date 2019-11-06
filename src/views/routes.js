import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './homepage';
import { ViewProduct } from './viewProduct';
import { ViewCart } from './viewCart';
import { ThankYou } from './thankYou';
import { NotFound } from './notFound';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/products/:productId' exact component={ViewProduct} />
      <Route path='/my-cart' exact component={ViewCart} />
      <Route path='/thank-you' exact component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
};
