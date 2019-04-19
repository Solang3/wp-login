import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import LogInForm from './login';
import SignUpForm from './signup';

class App extends Component {
  render() {
    return (
      <MDBContainer className="App">
        <LogInForm />
        <SignUpForm />
      </MDBContainer>
    );
  }
}

export default App;
