import React from 'react';
import Survey from './Survey';
import { db } from '../firebase';


class SurveyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterSurveyList: [],
      editing: false
    };
  }

}
// render() {

// }
// return (
//   <>

//   </>
// )
// }

// export default SurveyControl;