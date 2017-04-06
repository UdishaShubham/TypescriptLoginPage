import * as React from 'react';
import './LoginPage.scss';
const tescoLogo = require( '../images/tescoBrand.jpg');
import * as authenticationActions from '../actions/authenticationActions';
import {browserHistory} from 'react-router';
const connect = require('react-redux').connect;


interface ILoginPage extends React.Props<any> {
  login: (any) => void;
  logout: () => void;
  auth: any;
};

interface ILoginState extends React.Props<any> {
  username: string;
  password: string;
  
};


class LoginPage extends React.Component<ILoginPage,ILoginState> {
    constructor(props,context){
        super(props,context);
        this.state = {
            username: "",
            password: ""
        };
    this.login = this.login.bind(this);

  }
    componentWillUpdate(){
      if(this.props.auth.isLoggedIn){
            browserHistory.push('/home');
            //document.body.style.background = "initial"
     }
    }

    handleLoginClick() {
        document.getElementById("loginModal").style.display = "block";
        document.getElementById("loginPopUp").style.display = "none";

    }

    handleCancelButton() {
        document.getElementById("loginModal").style.display = "none";
        document.getElementById("loginPopUp").style.display = "block";
    }
    login(e){
        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        this.props.login({username,password});
        
    }

    

    render() {
        if (this.props.auth.isLoggedIn) { 
            browserHistory.push('/home');
        }
        
        return (
            <div className="loginBackground container-fluid img-responsive">
                
                <div className="row text-center">

                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div id="loginPopUp"className="footer navbar-fixed-bottom welcomePopUp">
                            <h1 className="textColorWhite"><b>Welcome to Toolkit</b></h1>
                            <p className="textColorWhite lead">Please Login to continue</p>
                            {/*<a className="textColorWhite marginBottom btn btn-lg btn-primary" href="#"><strong>Login</strong></a>*/}
                            <button className="textColorWhite marginBottom btn btn-lg btn-primary" onClick={this.handleLoginClick}>Login</button>
                            </div>


                            <div id="loginModal" className="modal">

                                <form className="modal-content animate" >
                                    <div className="imgcontainer">
                                        <span onClick={this.handleCancelButton} className="close" title="Close Modal">&times;</span>
                                        <img src= {tescoLogo} alt="Tesco" className="avatar" />
                                    </div>

                                    <div className="loginBox">
                                        
                                        <input  type="text" placeholder="Enter Username" value={this.state.username} name="uname" required />

                                        
                                        <input  type="password" placeholder="Enter Password" value={this.state.password} name="psw" required />

                                        <button onClick = {this.login} type="submit">Login</button>
                                        

                                    </div>

                                </form>
                            </div>

                        
                    </div>
                </div>
            </div>

        );
    }
}



function mapDispatchToProps(dispatch){
  return {
    login:(credentials) => dispatch(this.state.loginUser(credentials)),
    logout: () => dispatch(this.state.logoutUser())
  };
}

function mapStateToProps(state,ownProps){
    
    
    return{
        auth: state.authentication
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
