// import logo from './logo.svg';
// import './../App.css';
import React from 'react';
import Header from './Header';
import SurveyControl from './SurveyControl';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <>
      <Button variant="contained" color="primary">
        Hey, my Dudes
      </Button>
      <Router>
        <Header />
        <Switch>
          <Route path="/Signin">
            <Signin />
          </Route>
          <Route path="/Surveys">
            <SurveyControl />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;