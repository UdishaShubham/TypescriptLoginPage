import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authenticationReducer(state = initialState.loginStatus, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({},
                            state,
                            {isLoggedIn:true},
                             action.loginStatus);
      
    case types.LOGIN_FAILURE:
      return action.loginStatus;
      case 'LOGOUT':
      return Object.assign({},
                            state,
                            {isLoggedIn:false},
                             )
   default:
      return state;
  }
  
}
