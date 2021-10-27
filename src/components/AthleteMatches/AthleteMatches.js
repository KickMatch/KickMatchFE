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
        <ul className='match-ul' key={index}>
          <li className='match-list'>Email: {item.email}</li>
          <li className='match-list'>Name: {item.name}</li>
          <li className='match-list'>ZipCode: {item.zipcode}</li>
        </ul>
    )
  })

  useEffect(() => {
    handleWindow()
    handlePageLoad()
   }, [windowWidth, size, data])

  const AthleteMatchesContainer = () => {

    return (
      <>
      <main className='match-main'>
        <section className='match-container'>{handleMap(teams)}</section>
      </main>
      </>
    )
  }

   return (
    <>
      {!mobile ? <Header /> : <MobileHeader />}
      {pageLoading ? <Loading /> : <AthleteMatchesContainer/> }
    </>
  );
}

export default AthleteMatches;
