import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Header.css';

const Header = () => {

  const {id} = useParams()

  return (
    <header>
      <Link to={`/athlete/${id}`}> <h3>Profile</h3> </Link>
      <Link to={`/athlete/${id}/search`}> <h3>Search</h3> </Link>
      <Link to={`/athlete/${id}/interested-teams`}> <h3>Interested Parties</h3> </Link>
      <Link to='/'> <h3>Log Out</h3></Link>
    </header>
  );
}

export default Header;