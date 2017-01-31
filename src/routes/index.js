import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Error404, Home, OrdersList, OrderForm } from '../features';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="orderslist" component={OrdersList} />
    <Route path="neworder" component={OrderForm} />
    <Route path="*" component={Error404} />
  </Route>
);
