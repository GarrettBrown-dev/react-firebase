import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Breadcrumbs } from '@material-ui/core'

const Header = () => {
  return (
    <>
      <h1>Welcome to the Land of Surveys!</h1>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary">Navigation</Typography>
        <Link color="inherit" to="/Signin">Sign in Here</Link>
        <Link color="inherit" to="/Surveys">Surveys</Link>
      </Breadcrumbs>
    </>
  )
}

export default Header;