import './AthleteProfile.css';
import Header from '../Header/Header';
import CarouselComp from '../Carousel/Carousel';
import AthleteStatContainer from '../AthleteStatContainer/AthleteStatContainer';
import Bio from '../Bio/Bio';
import MobileAthleteStat from './MobileAthleteStat/MobileAthleteStat'
import { useState } from 'react';

const AthleteProfile = ({ data }) => {
  const [mobile, setMobile] = useState('3')

  
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
            <MobileAthleteStat />
        }
    </>
  );
}

export default AthleteProfile;

// return (isMember ? '$2.00' : '$10.00');
