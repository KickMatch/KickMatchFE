import React from 'react';
import Header from '../Header/Header';
import MobileHeader from '../MobileHeader/MobileHeader';
import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size'
import './AthleteInterestedTeams.css';

const AthleteInterestedTeams = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [mobile, setMobile] = useState(false)
  
  const size = useWindowWidth()
  
  const handleWindow = () => {
    setWindowWidth(size)
    windowWidth >= 767 ? setMobile(false) : setMobile(true)
  }

  useEffect(() => {
    handleWindow()
   }, [windowWidth, size])


  return (
    <section>
      {!mobile ? <Header /> : <MobileHeader />}
      <h1 className='match'> Atthlete interested teams</h1>
    </section>
  );
}

export default AthleteInterestedTeams;

