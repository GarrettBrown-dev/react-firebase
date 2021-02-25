import React from 'react';
import Survey from './Survey';
import SurveyList from './SurveyList';
import 'firebase/auth';
import firebase from 'firebase';
import { db } from '../firebase';
// import { db } from '../firebase';
// import { Link } from 'react-router-dom';

class SurveyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterSurveyList: [],
      answering: true
    };
  }

  handleSurveyClick = (answers) => {
    console.log("Handle survey click activated");
    this.setState({
      masterSurveyList: answers,
      answering: !this.state.answering
    })
    
  }
  // db.collection("answers")
  // .get()
  // .then(querySnapshot => {
  //   const answers = querySnapshot.docs.map(doc => doc.data());
  //   console.log(answers);
  // });
  render() {
    console.log(this.state.masterSurveyList) // undefined!
    let currentlyVisibleState = null;
    let user = firebase.auth().currentUser;
    if (user == null) {
      currentlyVisibleState = <h1>You must be signed in!</h1>
    } else if(this.state.answering) {
      currentlyVisibleState = <Survey onSurveyClick={this.handleSurveyClick}/>
    } else {
      currentlyVisibleState = <SurveyList />
    }
  return (
    <>
      {currentlyVisibleState}
    </>
    );
  }
}

export default SurveyControl;