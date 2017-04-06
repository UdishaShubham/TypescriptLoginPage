import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

import thunk from 'redux-thunk';
const composeWithDevTools= require('redux-devtools-extension').composeWithDevTools;


export default function  configureStore(){
  
  return createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(thunk)
       )
      

  );
}