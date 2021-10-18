import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({site}) => {

  console.log('site: ', site);
  return (
    <header>
      <Link to='/athlete'> <h1>Profile</h1> </Link>
      <Link to='/athlete/search'> <h1>Search</h1> </Link>
      <Link to='/athlete/interested-teams'> <h1>Interested Teams</h1> </Link>
      <Link to='/'> <h1>Log Out</h1></Link>
    </header>
  );
}

export default Header;