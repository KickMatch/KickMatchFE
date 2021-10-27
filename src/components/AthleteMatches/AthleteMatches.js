import React from 'react';
import Header from '../Header/Header';
import MobileHeader from '../MobileHeader/MobileHeader';
import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size'
import { ATHLETE_MATCHES } from '../../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import './AthleteMatches.css';
import Loading from '../Loading/Loading';


const AthleteMatches = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [mobile, setMobile] = useState(false)
  const [teams, setTeams] = useState({})
  const [pageLoading, setPageLoading] = useState(true)
  const { id } = useParams()
  const { data } = useQuery(ATHLETE_MATCHES(id))
  const size = useWindowWidth()
  
  const handlePageLoad = () => {
    if(data){
      setPageLoading(false);
      setTeams(data.matchTalent);
    }
  }

  const handleWindow = () => {
    setWindowWidth(size)
    handlePageLoad()
    windowWidth >= 767 ? setMobile(false) : setMobile(true)
  }

  const handleMap = arr => arr.map((item, index) => {
    return(
        <ul className={`match-ul ${!mobile ? '' : 'mobile'}`} key={index}>
          <li className={`match-list ${!mobile ? '' : 'mobile'}`} >Team Name: {item.name}</li>
          <li className={`match-list ${!mobile ? '' : 'mobile'}`} >Email: {item.email}</li>
          <li className={`match-list ${!mobile ? '' : 'mobile'}`} >ZipCode: {item.zipcode}</li>
        </ul>
    )
  })
  
  useEffect(() => {
    handleWindow()
    handlePageLoad()
  }, [windowWidth, size, data])

  const MobileAthleteMatchesContainer = () => {

    return (
      <main className='match-main'>
        <h1 className='match-header-mobile'>Your Matches</h1>
        <section className='match-container mobile'>{handleMap(teams)}</section>
      </main>
    )
  }

  const AthleteMatchesContainer = () => {

    return (
      <>
      <main className='match-main'>
        <section className='match-container'>{handleMap(teams)}</section>
      </main>
      </>
    )
  }


  const determineComponent = () => {
    if(!mobile){return <AthleteMatchesContainer/>}else{return <MobileAthleteMatchesContainer/>}
  }

   return (
    <>
      {!mobile ? <Header /> : <MobileHeader />}
      {pageLoading ? <Loading /> : determineComponent() }
    </>
  );
}

export default AthleteMatches;
