import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './homepage';

export const Routes = props => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
    </Switch>
  );
};
