import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/LoginPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
  </Route>
);