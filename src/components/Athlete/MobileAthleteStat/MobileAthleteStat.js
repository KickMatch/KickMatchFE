import avatar from '../../../assets/avatar.png'
import { Carousel } from 'react-responsive-carousel';
import Bio from '../../Bio/Bio';
import soccer from '../../../assets/soccer4.png';
import soccer1 from '../../../assets/soccer1.png';
import soccer2 from '../../../assets/soccer2.png';
import soccer3 from '../../../assets/soccer3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './MobileAthleteStat.css';

const MobileAthleteStat = ({ athlete }) => {
  const { playerNum, name, age, height, primaryPosition, secondaryPosition, dominantFoot, zipcode, weight, goalsMadeLs, fortyDash, verticalJump, jugglingRecord, talents, awards} = athlete
  
  const CarouselComp = () => {
    const images = [soccer, soccer1, soccer2, soccer3]
    
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
          {/* <h1>{playerNum}</h1> */}
          <h3>{name}</h3>
        </span>
        <span className='mobile-avatar-container'>
          <img alt='avatar' className='mobile-avatar' src={avatar} />
        </span>
        <span className='mobile-player-attributes'>
          <h1>{height} | {weight} | {age}</h1>
        </span>
        <span className='mobile-attribute-container container' >
          <p>Zipcode: {zipcode}</p>
          <p>Primary Position: {primaryPosition}</p>
          <p>Secondary Position: {secondaryPosition}</p>
          <p>Dominat Foot: {dominantFoot}</p>
        </span>
        <span className='mobile-stat-container container' >
          <p>Goals Last Season: {goalsMadeLs}</p>
          <p>Vertical Jump: {verticalJump}</p>
          <p>40 Yard Dash: {fortyDash}</p>
          <p>Juggling Record: {jugglingRecord}</p>
        </span>
        {/* <span className='talent-award-container container' >
          <h4>Talents: </h4> <ul> {handleMap(talents)} </ul>
        </span>
        <span className='talent-award-container container' >
          <h4>Awards: </h4> <ul> {handleMap(awards)} </ul>
        </span> */}
        <CarouselComp />
        <Bio data={athlete}/>
      </main>
  )
};

export default MobileAthleteStat;