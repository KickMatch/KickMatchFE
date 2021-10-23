import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import './AthleteStatContainer.css'

const AthleteStatContainer = ({athlete}) => {
  const { path, url } = useRouteMatch()

  const { avatar, firstName, lastName, age, height, primaryPosition, secondaryPosition, dominantFoot, location, weight, goalsMadeLast, fortyYard, vertJump, personJugRec, talents, awards} = athlete
  
  const handleMap = arr => arr.map((item, index) => <li key={index} className='list'>{item}</li>)

  return (
    <>
      <section className='player-stat-container'>
        <aside className='player-card'>
          <div className='image-container'>
            <img alt='avatar' className='avatar' src={avatar} />
            <span className='name-container'>
              <h2 className='firstName'> {firstName}</h2> 
              <h2 className='lastName'> {lastName}</h2> 
            </span>
          </div>
          <span className='attribute-container'>
            <p className='edit-profile'><Link to={`${url}/editprofile`} >Edit Profile</Link></p>
            <h3>{height} | {weight} | {age}</h3>
            <p>Primary Position: {primaryPosition}</p>
            <p>Secondary Position: {secondaryPosition}</p>
            <p>Dominat Foot: {dominantFoot}</p>
            <p>Zipcode: {location}</p>
          </span>
        </aside>
        <aside className='stat-card'>
          <p>Goals Last Season: {goalsMadeLast}</p>
          <p>Vertical Jump: {vertJump}</p>
          <p>40 Yard Dash: {fortyYard}</p>
          <p>Personal Juggling Record: {personJugRec}</p>
          <h4>Talents: <ul>{handleMap(talents)}</ul></h4>
          <h4>Awards: <ul> {handleMap(awards)} </ul></h4>
        </aside>
      </section>
    </>
  )
}

export default AthleteStatContainer;