import React from 'react';
import { Link } from 'react-router-dom';

let data = {
  question1: "what?",
  question2: "who?",
  question3: "where?"
}

function SurveyList(){
  return(
    <>
      <h1>this is the survey list dude!</h1>
      <Link to="/">Home</Link>
      <Survey props={data}/>
    </>
  )
}

export default SurveyList;