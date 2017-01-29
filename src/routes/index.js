import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Error404, Home, OrdersList } from '../features';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="orderslist" component={OrdersList} />
    <Route path="*" component={Error404} />
  </Route>
);
