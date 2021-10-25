import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import './AthleteProfile.css'
import avatar from '../../../assets/avatar.png'
import { LOAD_TALENT } from '../../../GraphQL/Queries';
import { useQuery } from '@apollo/client';


const AthleteProfile = ({athlete}) => {
  const { url } = useRouteMatch()

  const {error, loading, data} = useQuery(LOAD_TALENT, {
    variables: {id: 2}
  });

  // console.log('data inside useQuery: ', data);
  console.log('athlete inside useQuery: ', athlete);



  const { email, name, age, height, primaryPosition, secondaryPosition, dominantFoot, zipcode, weight, goalsMadeLast, fortyDash, verticalJump, jugglingRecord, talents, awards} = athlete
  
  const handleMap = arr => arr.map((item, index) => <li key={index} className='list'>{item}</li>)


  return (
    <>
      <section className='player-stat-container'>
        <aside className='player-card'>
          <div className='image-container'>
            <img alt='avatar' className='avatar' src={avatar} />
            <span className='name-container'>
              <h2 className='firstName'> {name}</h2> 
              {/* <h2 className='lastName'> {lastName}</h2>  */}
            </span>
          </div>
          <span className='attribute-container'>
            <p className='edit-profile'><Link to={`${url}/editprofile`} >Edit Profile</Link></p>
            <h3>{height} | {weight} | {age}</h3>
            <p className='paragraph'>Primary Position: {primaryPosition}</p>
            <p className='paragraph'>Secondary Position: {secondaryPosition}</p>
            <p className='paragraph'>Dominat Foot: {dominantFoot}</p>
            <p className='paragraph'>Zipcode: {zipcode}</p>
            <p className='paragraph'>Email: {email}</p>
          </span>
        </aside>
        <aside className='stat-card'>
          <p className='paragraph'>Goals Last Season: {goalsMadeLast}</p>
          <p className='paragraph'>Vertical Jump: {verticalJump}</p>
          <p className='paragraph'>40 Yard Dash: {fortyDash}</p>
          <p className='paragraph'>Personal Juggling Record: {jugglingRecord}</p>
          {/* <h4>Talents: <ul>{handleMap(talents)}</ul></h4>
          <h4>Awards: <ul> {handleMap(awards)} </ul></h4> */}
        </aside>
      </section>
    </>
  )
}

export default AthleteProfile;