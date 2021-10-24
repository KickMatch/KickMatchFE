import './Athlete.css';
import Header from '../Header/Header';
import CarouselComp from '../Carousel/Carousel';
import AthleteProfile from './AthleteProfile/AthleteProfile';
import Bio from '../Bio/Bio'
import MobileAthleteStat from './MobileAthleteStat/MobileAthleteStat'
import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size'

const Athlete = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [mobile, setMobile] = useState(false)
  // const [tablet, setTablet] = useState(false)
  const size = useWindowWidth()
  
  
  const handleWindow = () => {

    setWindowWidth(size)
    windowWidth >= 600 ? setMobile(false) : setMobile(true)
    // windowWidth <= 1024 ? setTablet(false) : setTablet(true)
  }

  useEffect(() => {
    handleWindow()
  }, [windowWidth, size])
  
  return (
    <>
      <Header />
        {
          !mobile ? 
            <main>
              <AthleteProfile athlete={data} />
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

export default Athlete;

{/* <Bio data={data} /> */}