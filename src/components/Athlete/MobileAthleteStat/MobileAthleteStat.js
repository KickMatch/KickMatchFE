import './MobileAthleteStat.css';

const MobileAthleteStat = ({ athlete }) => {

  const { avatar, playerNum, firstName, lastName, age, height, primaryPosition, secondaryPosition, dominantFoot, location, weight, goalsMadeLast, fortyYard, vertJump, personJugRec, talents, awards} = athlete
  
  // console.log('athlete: ', athlete);
  return (
      <main className='mobile-player-stat-container'>
        <span className='mobile-name-container'>
          <h1>{playerNum}</h1>
          <h3>{firstName} {lastName}</h3>
        </span>
        <span className='mobile-avatar-container'>
          <img alt='avatar' className='mobile-avatar' src={avatar} />
        </span>
        <span className=''>
          <h1>{height} | {weight} | {age}</h1>
        </span>
        <span className='mobile-attribute-container' >
          <p>Zipcode: {location}</p>
          <p>Primary Position: {primaryPosition}</p>
          <p>Secondary Position: {secondaryPosition}</p>
          <p>Dominat Foot: {dominantFoot}</p>
        </span>
        <span className='mobile-stat-container' >
          <p>Goals Last Season: {goalsMadeLast}</p>
          <p>Vertical Jump: {vertJump}</p>
          <p>40 Yard Dash: {fortyYard}</p>
          <p>Personal Juggling Record: {personJugRec}</p>
        </span>
      </main>
  )
}

export default MobileAthleteStat;

// function handleResize() {
//   console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)

// }

// window.addEventListener('resize', handleResize)
// })