import avatar from '../../../assets/avatar.png'
import { Carousel } from 'react-responsive-carousel';
import Bio from '../../Bio/Bio';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './MobileAthleteStat.css';

const MobileAthleteStat = ({ athlete }) => {
  const { playerNum, firstName, lastName, age, height, primaryPosition, secondaryPosition, dominantFoot, location, weight, goalsMadeLast, fortyYard, vertJump, personJugRec, talents, awards} = athlete
  
  const CarouselComp = () => {
    const { images } = athlete
    
    return (
      <>
        <Carousel interval={5000} autoPlay={true} centerMode={true} centerSlidePercentage={50} infiniteLoop={true} showThumbs={false} className='mobile-main-slide' showArrows={true} onClickItem={e => console.log(e)}>
            {
              images.map((image, index) => {
                return(
                  <div key={index}>
                    <img className='mobile-caro-img' src={image} />
                  </div>
                )
              })
            }
        </Carousel>
      </>
    );
  };

  const handleMap = arr => arr.map((item, index) => <li key={index} className='list'>{item}</li>)

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
        <span className='mobile-attribute-container container' >
          <p>Zipcode: {location}</p>
          <p>Primary Position: {primaryPosition}</p>
          <p>Secondary Position: {secondaryPosition}</p>
          <p>Dominat Foot: {dominantFoot}</p>
        </span>
        <span className='mobile-stat-container container' >
          <p>Goals Last Season: {goalsMadeLast}</p>
          <p>Vertical Jump: {vertJump}</p>
          <p>40 Yard Dash: {fortyYard}</p>
          <p>Personal Juggling Record: {personJugRec}</p>
        </span>
        <span className='talent-award-container container' >
        <h4>Talents: <ul>{handleMap(talents)}</ul></h4>
        <h4>Awards: <ul> {handleMap(awards)} </ul></h4>
        </span>
        <CarouselComp />
        <Bio data={athlete}/>
      </main>
  )
};

export default MobileAthleteStat;