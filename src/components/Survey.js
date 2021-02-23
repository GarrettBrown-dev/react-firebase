import React from 'react';
import { db } from '../firebase';
import { v4 } from 'uuid';

db.collection("test")
  .get()
  .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data);
  });

function Survey() {

  const handleFormSubmission = (e) => {
    e.preventDefault();
    db.collection("test")
      .doc(v4())
      .set({
        question1: e.target.question1.value,
        question2: e.target.question2.value,
        question3: e.target.question3.value,
      })
      .then(() => {
        console.log("submiotted!")
        // NotificationManager.success("A new survey answer has been added", "Success");
      })
  }

  return (
    <>
      <form onSubmit={handleFormSubmission}>
        <label>
          Question 1:</label>
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