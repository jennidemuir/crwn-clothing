import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../Components/sign-in/SignIn";
import SignUp from "../../Components/sign-up/SignUp";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
