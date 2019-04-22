import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const LogInForm = () => {
  
  return (
    <MDBContainer className="formContainer">
      <MDBRow>
        <MDBCol>
          <form>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="user_login"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                name="password"
              />
            </div>
            <div className="text-center">
                <MDBBtn onClick={doLogin()}>Login</MDBBtn>
                <p className="font-small d-flex justify-content-center pt-3 mt-3 pb-3">
                  Forgot
                  <a href="#!" className="ml-1">
                    Password?
                  </a>
                </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LogInForm;