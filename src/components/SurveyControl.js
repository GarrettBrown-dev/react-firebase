import React from 'react';
import Survey from './Survey';
// import { db } from '../firebase';
import { Link } from 'react-router-dom';

class SurveyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterSurveyList: [],
      answering: false
    };
  }

  handleSurveyClick = () => {
    this.setState({answering: true});
  }

  render() {
    let currentlyVisibleState = null;
    if(this.state.answering){
      currentlyVisibleState = <Survey onSurveyClick={this.handleSurveyClick}/>
    } else {
      
    }
  return (
    <>
      {currentlyVisibleState}
      <br/>
      <Link to="/">Header</Link>
    </>
    );
  }
}

export default SurveyControl;