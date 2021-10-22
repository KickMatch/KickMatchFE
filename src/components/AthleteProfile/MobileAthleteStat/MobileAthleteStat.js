import './MobileAthleteStat.css';

const MobileAthleteStat = ({ athlete }) => {
  // import { useEffect, useState } from 'react';
  // import { useWindowWidth } from '@react-hook/window-size'
  // const [windowWidth, setWindowWidth] = useState(0)
  // const [mobile, setMobile] = useState(false)

  // const size = useWindowWidth()
  
  // const handleWindow = () => {
  //   setWindowWidth(size)
  // }

  // useEffect(() => {
  //   handleWindow()
  // }, [size])

  const { avatar, playerNum, firstName, lastName, age, height, primaryPosition, secondaryPosition, dominantFoot, zipCode, weight, goalsMadeLast, fortyYard, vertJump, personJugRec, talents, awards} = athlete
  
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
    </main>
  )
}

export default MobileAthleteStat;

// function handleResize() {
//   console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)

// }

// window.addEventListener('resize', handleResize)
// })