import loginApi from '../api/loginApi';

//login redux-thunk action
export function login(credential) { 
  
  let auth,userData;
  return function(dispatch) {
    return loginApi
             .login(credential).
             then(response => {
                
                auth = response.data;
                localStorage.setItem('token',auth.token);
                return loginApi.getUserDetails();
                        
        //dispatch(loginAction(response.data));
            })
           .then(response => {
              userData = response.data;
              dispatch(loginAction(userData));

           })
          .catch(error => {
      throw(error);
    });
  };
}

export function loadUser(){

  return function(dispatch) {
    return loginApi
             .getUserDetails().
             then(response => {
                
                dispatch(loginAction(response.data));
            })
          .catch(error => {
             throw(error);
           });
  };

}


export function loginAction(loginStatus){
  
 if(loginStatus.returnCode == 1){
   return {
    type: 'LOGIN_SUCCESS',
    loginStatus
  };
 }
 else{
   return {
     type: 'LOGIN_FAILURE',
     loginStatus
   };
 }
  
}

//logout action
export function logout(){
  localStorage.removeItem('token');
  return {
    type: 'LOGOUT'
  };
}