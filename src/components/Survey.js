import React from 'react';
import { db } from '../firebase';
import { v4 } from 'uuid';

db.collection("test")
  .get()
  .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data);
  });

function Survey(props) {
  console.log(props.props)
  const handleFormSubmission = (e) => {
    e.preventDefault();
    db.collection("answers")
      .doc(v4())
      .set({
        question1: e.target.question1.value,
        question2: e.target.question2.value,
        question3: e.target.question3.value,
      })
      .then(function(message) {
        message = "submoitted!";
        console.log(message);
      }, function(){console.log("Not submoitted!")});
        // NotificationManager.success("A new survey answer has been added", "Success");
      }
  
    return(
    <>
      <form onSubmit={handleFormSubmission}>
        <label>
          {props.props.question1}</label>
        <input type="text" name="question1" />
        <label>
          Question 2:</label>
        <input type="text" name="question2"></input>
        <label>
          Question 3:</label>
        <input type="text" name="question3"></input>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Survey;