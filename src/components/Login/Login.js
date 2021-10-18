import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

  
  return (
    <section>
      <Link to='/athlete'> <h1> Athlete Log In </h1> </Link>
      <Link to='/team'> <h1> Team Log In </h1> </Link>
    </section>
  );
}

export default Login;