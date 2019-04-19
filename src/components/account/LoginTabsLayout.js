import React, { Component } from "react";
import MyTabs from '../custom/MyTabs';
import LogInForm from './LogIn';
import SignUpForm from './SignUp';


class LoginTabsLayout extends Component {

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

export default LoginTabsLayout;