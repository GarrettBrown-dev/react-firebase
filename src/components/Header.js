import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h1>Welcome to the Land of Surveys!</h1>
      <Link to="/Signin">Sign in Here</Link><br/>
      <Link to="/Surveys">Surveys</Link>
    </>
  )
}

export default Header;