import React from 'react';
import { db } from '../firebase';
import { v4 } from 'uuid';
import Button from '@material-ui/core/Button';


// db.collection("test")
//   .get()
//   .then(querySnapshot => {
//     const data = querySnapshot.docs.map(doc => doc.data());
//     console.log(data);
//   });

let seedData = {
  question1: "what?",
  question2: "who?",
  question3: "where?"
}

function Survey(props) {
  const { onSurveyClick } = props;

  const handleFormSubmission = (e) => {
    onSurveyClick();
    e.preventDefault();
    db.collection("answers")
      .doc(v4())
      .set({
        question1: e.target.question1.value,
        question2: e.target.question2.value,
        question3: e.target.question3.value,
      })
      .then(function (message) {
        message = "submoitted!";
        console.log(message);
        let answers = db.collection("answers").get()
        .then(answers=> {return answers;})
        
      }, function () { console.log("Not submoitted!") });
    // NotificationManager.success("A new survey answer has been added", "Success");
  }


  return (
    <>
      <form onSubmit={handleFormSubmission}>
        <label>
          {seedData.question1}</label>
        <input type="text" name="question1" />
        <label>
          {seedData.question2}</label>
        <input type="text" name="question2"></input>
        <label>
          {seedData.question3}</label>
        <input type="text" name="question3"></input>
        <Button variant="contained" color="primary" id="btn" type="submit" value="Submit">Submit!</Button>
      </form>

    </>
  )
}

export default Survey;