import { Link } from 'react-router-dom';
import { Route, Switch, useRouteMatch } from 'react-router';
import avatar from '../../assets/avatar.png'
import EditPlayerProfile from './EditPlayerProfile/EditPlayerProfile';

import './AthleteStatContainer.css'

const AthleteStatContainer = ({athlete}) => {
  const { path, url } = useRouteMatch()

  const { name, age, height, primaryPosition, secondaryPosition, dominantFoot, zipcode, weight, goalsMadeLs, fortyDash, verticalJump, jugglingRecord, talents} = athlete
  
  const handleMap = arr => arr.map((item, index) => <li key={index} className='list'>{item}</li>)

  return (
    <section className='player-stat-container'>
      <aside className='player-card'>
        <div className='image-container'>
          <img alt='avatar' className='avatar' src={avatar} />
          <span className='name-container'>
            <h2 className='firstName'> {name}</h2> 
          </span>
        </div>
        <span className='attribute-container'>
          <p className='edit-profile'><Link to={`${url}/editprofile`} >Edit Profile</Link></p>
          <Switch>
            <Route exact path={`${path}/editprofile`} component={EditPlayerProfile}/>
          </Switch>
          <h3>{height} | {weight} | {age}</h3>
          <h3>Primary Position: {primaryPosition}</h3>
          <h3>Secondary Position: {secondaryPosition}</h3>
          <h3>Dominat Foot: {dominantFoot}</h3>
          <h3>Zipcode: {zipcode}</h3>
        </span>
      </aside>
      <aside className='stat-card'>
        <h3>Goals Last Season: {goalsMadeLs}</h3>
        <h3>Vertical Jump: {verticalJump}</h3>
        <h3>40 Yard Dash: {fortyDash}</h3>
        <h3>Personal Juggling Record: {jugglingRecord}</h3>
        <h3>Talents: <ul>{talents}</ul></h3>
      </aside>
    </section>
  )
}

export default AthleteStatContainer;