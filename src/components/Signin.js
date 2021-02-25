import React from 'react';
import firebase from "firebase/app";
import TextField from '@material-ui/core/TextField';


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
        <button type='submit'>Sign up</button>
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
        <button type='submit'>Sign in</button>
      </form>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>

    </>
  );
}

export default Signin;