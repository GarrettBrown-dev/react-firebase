import React from 'react';
import firebase from "firebase/app";
import {TextField, Button} from '@material-ui/core';
// import { useState } from 'react';

function Signin() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      console.log("Signed Up!")
    }).catch(function (error) {
      console.log(error.message); // make visible to user eventually
    });
  }
  function doSignIn(event) {

    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      console.log("Successfully signed in!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }
  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }
  const signUpStyle = { // CSS Object. different syntax from plain CSS. add as style={whateverStyle}
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
  const signInStyle = {
    background: 'linear-gradient(45deg, #61889e 30%, #59a680 90%)'
  }
  // let [style, setStyle] = useState(signUpStyle);
  // function applyHoverStyle() {
  //   return signInStyle;
  // }
  // onMouseEnter={applyHoverStyle}

  return (
    <>
      <h1>Sign Up!</h1>
      <form onSubmit={doSignUp}>
        <TextField id="outlined-basic" label="email" variant="outlined"
          type='text'
          name='email'
          placeholder='email' />
        <TextField id="outlined-basic" label="password" variant="outlined"
          type='password'
          name='password'
          placeholder='Password' />
        <Button  variant="contained" style={signUpStyle}  id="signUp" type='submit'>Sign up</Button>
      </form>
      <h1>Sign In!</h1>
      <form onSubmit={doSignIn}>
        <TextField id="outlined-basic" label="email" variant="outlined"
          type='text'
          name='signinEmail'
          placeholder='email' />
        <TextField id="outlined-basic" label="password" variant="outlined"
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <Button variant="contained" style={signInStyle} id="signOut" type='submit'>Sign in</Button>
      </form>
      <h1>Sign Out</h1>
      <Button variant="contained" color="secondary" onClick={doSignOut}>Sign out</Button>

    </>
  );
  }

export default Signin;