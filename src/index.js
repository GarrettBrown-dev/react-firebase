import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  // FirebaseAuthConsumer,
  // IfFirebaseAuthed,
  // IfFirebaseAuthedAnd
} from "@react-firebase/auth";


const rrfProps = {
  firebase,
  config: {
    userProfiles: "users",
    useFirestoreForProfile: true,
  },
}

ReactDOM.render(
  <FirebaseAuthProvider {...rrfProps}>
    <App />
  </FirebaseAuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();