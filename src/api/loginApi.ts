import  axios from 'axios';

export default class LoginAPI {
  static login(credential){
    console.log("Called login function")
    return axios.post('http://localhost:3000/v0/authenticate', {
    username: credential.username,
    password: credential.password
  });
       
}
static getUserDetails(){
    console.log("Called login function")
    return axios.get('http://localhost:3000/v0/userdetails', {
     headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}
  });
       
  }
}



