import React, { Component } from "react";
import MyTabs from '../Layout/MyTabs';
import LogInForm from './LogIn';
import SignUpForm from './SignUp';


class Authenticate extends Component {

render() {
  return (
      <MyTabs>
        <div label="Log In">
          <LogInForm/>
        </div>
        <div label="Sign Up">
          <SignUpForm/>
        </div>
      </MyTabs>
    );
  }
}

export default Authenticate;