import React from 'react';
import { db } from '../firebase';

db.collection("test")
  .get()
  .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data);
  });

function Survey() {
  return (
    <>
      <form>
        <label>
          Question 1:
        <input type="text" name="question1" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Survey;