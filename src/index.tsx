import * as React from 'react';
import * as ReactDOM from 'react-dom'
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
const Provider = require('react-redux').Provider;
import {loadUser} from './actions/authenticationActions';
import App from  './components/App';
import LoginPage from './components/LoginPage';

const store = configureStore();
// let jwt = localStorage.getItem('token');
// if(jwt){
//   store.dispatch(loadUser());
// }

ReactDOM.render(
  <Provider store = {store}>
 <LoginPage/>
 </Provider>
  , document.getElementById('app')
);