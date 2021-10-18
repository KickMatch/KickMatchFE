import React from 'react';
import './AthleteProfile.css';
import Header from '../Header/Header';
import { Route, Switch, useParams } from 'react-router';
import EditPlayerProfile from './EditPlayerProfile/EditPlayerProfile';
import { Link } from 'react-router-dom';

const AthleteProfile = ( ) => {

  const {id} = useParams()
  // console.log(useRef())
  return (
    <>
      <Header />
      <h1>Athlete profile id: {id}</h1>

      <ul>
        <li>
          <Link> View Profile</Link>
        </li>
        <li>
          <Link> Edit Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/view-profile' />
        <Route path='/edit-profile' />
      </Switch>
    </>
  );
}

export default AthleteProfile;