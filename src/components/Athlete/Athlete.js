import './Athlete.css';
import Header from '../Header/Header';
import AthleteProfile from './AthleteProfile/AthleteProfile';
import Bio from '../Bio/Bio'
import MobileAthleteStat from './MobileAthleteStat/MobileAthleteStat'
import MobileHeader from '../MobileHeader/MobileHeader';
import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size'
import { Carousel } from 'react-responsive-carousel';
import soccer from '../../assets/soccer4.png';
import soccer1 from '../../assets/soccer1.png';
import soccer2 from '../../assets/soccer2.png';
import soccer3 from '../../assets/soccer3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Athlete = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [mobile, setMobile] = useState(false)
  const size = useWindowWidth()
  
  const CarouselComp = () => { //carousel component
    const images = [soccer, soccer1, soccer2, soccer3]
    
    return (
      <>
        <Carousel interval={5000} autoPlay={true} centerMode={true} centerSlidePercentage={50} infiniteLoop={true} showThumbs={false} className='main-slide' showArrows={true} onClickItem={e => console.log(e)}>
            {
              images.map((image, index) => {
                return(
                  <div key={index}>
                    <img alt='carousel' className='caro-img' src={image} />
                  </div>
                )
              })
            }
        </Carousel>
      </>
    );
  };

  useEffect(() => {
    // const handleWindow = () => {
      setWindowWidth(size)
      windowWidth >= 767 ? setMobile(false) : setMobile(true)
    // }
  }, [windowWidth, size])
  
  return (
    <>
      {!mobile ? <Header /> : <MobileHeader />}
        {
          !mobile ? 
            <main className='athlete-main'>
              <AthleteProfile athlete={data} />
              <div className='divider'></div>
              <CarouselComp />
              <div className='divider'></div>
              <Bio data={data} />
            </main>
          : 
            <MobileAthleteStat athlete={data}/>
        }
    </>
  );
}

export default Athlete;