import './AthleteProfile.css';
import Header from '../Header/Header';
import CarouselComp from '../Carousel/Carousel';
import AthleteStatContainer from '../AthleteStatContainer/AthleteStatContainer';
import Bio from '../Bio/Bio';
import MobileAthleteStat from './MobileAthleteStat/MobileAthleteStat'
import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size'

const AthleteProfile = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [mobile, setMobile] = useState(false)

  const size = useWindowWidth()
  
  const handleWindow = () => {
    setWindowWidth(size)
  }

  useEffect(() => {
    handleWindow()
  }, [size])

  
  return (
    <>
      <Header />
        {
          !mobile ? 
            <main>
              <AthleteStatContainer athlete={data} />
              <div className='divider'></div>
              <CarouselComp data={data}/>
              <div className='divider'></div>
              <Bio data={data} />
            </main>
          : 
            <MobileAthleteStat athlete={data}/>
        }
    </>
  );
}

export default AthleteProfile;

// return (isMember ? '$2.00' : '$10.00');
