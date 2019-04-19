import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MDBContainer } from "mdbreact";
import LoginTabsLayout from './account/LoginTabsLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDBContainer className="App">
          <LoginTabsLayout />
        </MDBContainer>
      </BrowserRouter>
    );
  }
}

export default App;
