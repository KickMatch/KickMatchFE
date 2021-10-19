import React from 'react';
import './AthleteProfile.css';
import Header from '../Header/Header';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import EditPlayerProfile from './EditPlayerProfile/EditPlayerProfile';
import { Link } from 'react-router-dom';

const AthleteProfile = ( ) => {

  const {id} = useParams()

  const { path, url } = useRouteMatch()
  console.log('path: ', path)
  console.log('url: ', `${url}/editprofile`)
  // console.log(useRef())
  return (
    <>
      <Header />
      <h1>Athlete PROFILE id: {id}</h1>
      <ul>
        <li>
          <Link to={`${url}/editprofile`} > Edit Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/editprofile`} component={EditPlayerProfile}/>
      </Switch>
    </>
  );
}

export default AthleteProfile;