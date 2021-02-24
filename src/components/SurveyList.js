import React from 'react';
import Survey from './Survey';
import { Link } from 'react-router-dom';

let data = { //maybe get data from firestore here?
  question1: "what?",
  question2: "who?",
  question3: "where?"
}

function SurveyList(){
  return(
    <>
      <h1>this is the survey list dude!</h1>
      <Link to="/">Home</Link>
      <Survey data={data}/>
    </>
  )
}

export default SurveyList;