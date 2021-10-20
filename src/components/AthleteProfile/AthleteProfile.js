import React from 'react';
import './AthleteProfile.css';
import Header from '../Header/Header';
import { Route, Switch, useRouteMatch } from 'react-router';
import EditPlayerProfile from './EditPlayerProfile/EditPlayerProfile';
import { Link } from 'react-router-dom';
import { LOAD_ALL_TALENT } from '../../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import avatar from '../../assets/avatar.png'


const AthleteProfile = ({athlete}) => {
  const { path, url } = useRouteMatch()

  const { name, age, height, primaryPosition, secondaryPosition, dominantFoot, zipCode, weight, goalsMadeLast, fortyYard, vertJump, personJugRec, talents, awards} = athlete

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
          <h3>{name}</h3>
          <h3>Age: {age}</h3>
          <h3>Primary Position: {primaryPosition}</h3>
          <h3>Secondary Position: {secondaryPosition}</h3>
          <h3>Dominat Foot: {dominantFoot}</h3>
          <h3>Zipcode: {zipCode}</h3>
        </article>
        <section className='stat-card'>
          <h3>Height: {height}</h3>
          <h3>Weight: {weight}</h3>
          <h3>Goals Last Season: {goalsMadeLast}</h3>
          <h3>Vertical Jump: {vertJump}</h3>
          <h3>40 Yard Dash: {fortyYard}</h3>
          <h3>Personal Juggling Record: {personJugRec}</h3>
          <h3>Talents: {talents.map(talent => {
            return (
                <ul>
                  <li>{talent}</li>
                </ul>
                )
              })
             }</h3>
          <h3>Awards: {awards.map(award => {
            return (
                <ul>
                  <li>{award}</li>
                </ul>
                )
              })
             }</h3>
        </section>
      </main>

    </>
  );
}

export default AthleteProfile;