import React from 'react';
import './AthleteProfile.css';
import Header from '../Header/Header';
import { Route, Switch, useRouteMatch } from 'react-router';
import EditPlayerProfile from './EditPlayerProfile/EditPlayerProfile';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png'


const AthleteProfile = ({athlete}) => {
  const { path, url } = useRouteMatch()

  const { firstName, lastName, age, height, primaryPosition, secondaryPosition, dominantFoot, zipCode, weight, goalsMadeLast, fortyYard, vertJump, personJugRec, talents, awards} = athlete

  return (
    <>
      <Header />
      <main>
        <section className='player-stat-container'>
          <article className='player-card'>
            <div className='image-container'>
              <img alt='avatar' className='avatar' src={avatar} />
              <span className='name-container'>
                <h2 className='firstName'> {firstName}</h2> 
                <h2 className='lastName'> {lastName}</h2> 
              </span>
            </div>
            <p><Link to={`${url}/editprofile`} >Edit Profile</Link></p>
            <Switch>
              <Route exact path={`${path}/editprofile`} component={EditPlayerProfile}/>
            </Switch>
            <h3>{height} | {weight} | {age}</h3>
            <h3>Primary Position: {primaryPosition}</h3>
            <h3>Secondary Position: {secondaryPosition}</h3>
            <h3>Dominat Foot: {dominantFoot}</h3>
            {/* <h3>Zipcode: {zipCode}</h3> */}
          </article>
          <section className='stat-card'>
            {/* <h3>Weight: {weight}</h3> */}
            <h3>Goals Last Season: {goalsMadeLast}</h3>
            <h3>Vertical Jump: {vertJump}</h3>
            <h3>40 Yard Dash: {fortyYard}</h3>
            <h3>Personal Juggling Record: {personJugRec}</h3>
            <h3>Talents: <ul>{talents.map((talent, index) => {
              return (
                    <li key={index} className='talent-list list'>{talent}</li>
                  )
                })
              }</ul></h3>
            <h3>Awards: <ul> {awards.map((award, index) => {
              return (
                    <li key={index} className='award-list list'>{award}</li>
                  )
                })
              } </ul></h3>
          </section>
        </section>
      </main>

    </>
  );
}

export default AthleteProfile;