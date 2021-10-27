import './AthleteSearch.css';
import TeamProfileContainer from '../TeamProfileContainer/TeamProfileContainer';
import React from 'react';
import Header from '../Header/Header';
import MobileHeader from '../MobileHeader/MobileHeader';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { LOAD_ALL_CLUBS } from '../../GraphQL/Queries';
import { CREATE_MATCH } from '../../GraphQL/Mutations';
import { useWindowWidth } from '@react-hook/window-size'

const AthleteSearch = ({userData}) => {
  const {id} = useParams();
  const [allTeams, setAllTeams] = useState({});
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [teamLocation, setTeamLocation] = useState(20);
  const [searchStatus, setSearchStatus] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0)
  const [mobile, setMobile] = useState(false)
  // const [zipCodeRadius, setZipCodeRadius] = useState({});
  // const [teamId, setTeamId] = useState("");
  // const [queryTest, setQueryTest] = useState("");
  // const [athleteInfo, setAthleteInfo] = useState(userData);
  // const [matchedCodes, setMatchedCodes] = useState([])

  const [createMatch, {error}] = useMutation(CREATE_MATCH);

  const size = useWindowWidth()
  
  const getId = (choseTeamId) => {
    createMatch({
      variables: {
        sportClubId: parseInt(choseTeamId),
        talentId: parseInt(id)
      }
    })
    if (error) {
      console.log(error)
    }
    console.log(choseTeamId)
    console.log(id)
  }
    
  const { data} = useQuery(LOAD_ALL_CLUBS);
  useEffect(() => {
    handleWindow()
    setAllTeams(data)
  }, [data, windowWidth, size])

  const handleWindow = () => {
  setWindowWidth(size)
  windowWidth >= 767 ? setMobile(false) : setMobile(true)
}
    
    
  const getFormInfo = (event) => {
    event.preventDefault();
    setSearchStatus(false);
    findTeams(); 
    clearInputs();
  }
  
  const clearInputs = () => {
    setTeamLocation("");
    setTeamName("");
  }
    
  const findTeams = () => {
    const teams = allTeams.allClubs;
    setFilteredTeams(teams.filter(team => team.name.includes(teamName) || teamName === 'All' || teamName === ''))
  }
    
    
  // const getData = () => {
  // console.log('userZipCode:', athleteInfo.zipcode)
  // console.log('teamLocation:', typeof teamLocation)

  // const teams = allTeams.allClubs;
  // const filterInputs = setFilteredTeams(teams.filter(team => team.name.includes(teamName) || teamName === 'All'))
  // // console.log(filteredTeams)
  
  // const apiKey = 'W9C9POYVGMP5IHH4X8E9'
  // fetch(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${athleteInfo.zipcode}&maximumradius=${parseInt(teamLocation)}&minimumradius=0&country=US&key=${apiKey}`)
  //   .then(res => res.json())
  //   .then(data => matchCodes(data, filteredTeams))
  // }

  // const matchCodes = (dataCodes, filteredTeamsZ) => {
  //   console.log(dataCodes.DataList)
  //   console.log(filteredTeamsZ)

  //   let matchedZipCodes = [];
  //   return dataCodes.DataList.forEach((acc, allZipCode) => {
  //     filteredTeams.forEach(nameTeams => {
  //       if (allZipCode.Code(nameTeams.zipcode.toString)) {
  //         return matchedZipCodes.push(nameTeams)
  //       }
  //     })
  //   })
  // }
  
  return (
    <section>
      {!mobile ? <Header /> : <MobileHeader />}
      <section className='athlete-search'>
        <form className='athlete-form-search'>
          <h3 className="search-text">Search by:</h3>
          <div className='search-all'>
            <input
              className= 'team-name-search'
              type='text'
              placeholder='Sport Club Name'
              name='sportClub'
              value={teamName}
              onChange={(event) => setTeamName(event.target.value)}
            />
          </div>
          <div className='input-team-select-container'>
            <select className="select-radius-location" onChange={(event) => setTeamLocation(event.target.value)}>
              <option value='20'>20 Miles</option>
              <option value='50'>50 Miles</option>
              <option value='100'>100 Miles</option>
              <option value='150'>150 or more</option>
            </select>
          </div>
          <button className='search-button-team' onClick={getFormInfo}>Search Teams</button>
        </form>
          {searchStatus ? 
          <div className='no-search-founded'>
            {allTeams && <TeamProfileContainer filteredTeams={allTeams.allClubs} getId={getId}/>}

          </div> :
          <div className='search-teams-container'>
            {filteredTeams ? <TeamProfileContainer filteredTeams={filteredTeams} getId={getId}/> : 
            <h2 className="no-match-text">Sorry there is no available teams with those specs, please try again!</h2>
            }
          </div>}
      </section>
    </section>
  );
}

export default AthleteSearch;
