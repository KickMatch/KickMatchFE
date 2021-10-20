import React from 'react';
import './AthleteProfile.css';
import Header from '../Header/Header';
import { Route, Switch, useRouteMatch } from 'react-router';
import EditPlayerProfile from './EditPlayerProfile/EditPlayerProfile';
import { Link } from 'react-router-dom';
import { LOAD_ALL_TALENT } from '../../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import avatar from '../../assets/avatar.png'


const AthleteProfile = () => {

  const { path, url } = useRouteMatch()
  console.log('path: ', path)
  console.log('url: ', `${url}/editprofile`)
  // console.log(useRef())
  return (
    <>
      <Header />
      <main>
        <article className='player-card'>
          <img alt='avatar' className='avatar' src={avatar} />
          <p><Link to={`${url}/editprofile`} >Edit Profile</Link></p>
          <Switch>
            <Route exact path={`${path}/editprofile`} component={EditPlayerProfile}/>
          </Switch>
        </article>
        <section className='stat-card'>
          <h3>Height</h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
        </section>
      </main>

    </>
  );
}

export default AthleteProfile;