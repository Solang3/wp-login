import React, { Component } from "react";
import MyTabs from './MyTabs';
import LogInForm from './LogIn';
import SignUpForm from './SignUp';


class TabsLayout extends Component {

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

export default TabsLayout;