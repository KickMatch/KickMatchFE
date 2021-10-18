import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Header.css';

const Header = () => {

  const {id} = useParams()

  return (
    <header>
      <Link to={`/athlete/${id}`}> <h1>Profile</h1> </Link>
      <Link to='/athlete/search'> <h1>Search</h1> </Link>
      <Link to='/athlete/interested-teams'> <h1>Interested Parties</h1> </Link>
      <Link to='/'> <h1>Log Out</h1></Link>
    </header>
  );
}

export default Header;