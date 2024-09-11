import React, { useState } from "react";
import * as Components from "../components/Components";
import Home from "./Home";
// import { loginUser, registerUser } from '../services/api';

function Login() {
  const [signIn, toggle] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };


  return (
    <div
      className="login-container"
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      <Components.Background />
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form className="bg-customBrown">

          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form className="bg-customBrown">
            
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              {/* <Components.Title>Already Have an Account?</Components.Title>
              <Components.Paragraph>
                Log in and continue from where you left off.
              </Components.Paragraph> */}
              <Home toggle={toggle} /> {/* Pass the toggle function to Home */}
              
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Dont Have an Account?</Components.Title>
              <Components.Paragraph>
                Join us today to create memories.
              </Components.Paragraph>
              
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Login;
