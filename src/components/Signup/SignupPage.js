import React from 'react'
import SignupForm from './SignUpForm'
import SignUpContainer from "./SignUpContainer"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const SignupPage=()=>{
    return(
        <MuiThemeProvider>
    <SignUpContainer />
  </MuiThemeProvider>
    )
}

export default SignupPage