import './AthleteSearch.css';
import TeamProfileContainer from '../TeamProfileContainer/TeamProfileContainer';
import React from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_ALL_CLUBS } from '../../GraphQL/Queries';
import { CREATE_MATCH } from '../../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

const AthleteSearch = ({userData}) => {
  const {id} = useParams();
  const [allTeams, setAllTeams] = useState({});
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [teamLocation, setTeamLocation] = useState(20);
  const [teamId, setTeamId] = useState("");
  const [queryTest, setQueryTest] = useState("");
  const [searchStatus, setSearchStatus] = useState(true);
  const [athleteInfo, setAthleteInfo] = useState(userData);
  const [zipCodeRadius, setZipCodeRadius] = useState({});
  const [matchedCodes, setMatchedCodes] = useState([])
  const [createMatch, {error}] = useMutation(CREATE_MATCH);

  
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
    
  const {loading, data} = useQuery(LOAD_ALL_CLUBS);
  useEffect(() => {
    setAllTeams(data)
  }, [data])
    
    
  const getFormInfo = (event) => {
    event.preventDefault();
    setSearchStatus(false);
    // getData(); 
    findTeams(); 
    clearInputs();
  }
  
  const clearInputs = () => {
    setTeamLocation("");
    setTeamName("");
  }
    
  const findTeams = () => {
    
    console.log(zipCodeRadius.dataList)
    const teams = allTeams.allClubs;
    setFilteredTeams(teams.filter(team => team.name.includes(teamName) || teamName === 'All' || teamName === ''))
  }
    
    
  const getData = () => {
  console.log('userZipCode:', athleteInfo.zipcode)
  console.log('teamLocation:', typeof teamLocation)

  const teams = allTeams.allClubs;
  const filterInputs = setFilteredTeams(teams.filter(team => team.name.includes(teamName) || teamName === 'All'))
  // console.log(filteredTeams)
  
  const apiKey = 'W9C9POYVGMP5IHH4X8E9'
  fetch(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${athleteInfo.zipcode}&maximumradius=${parseInt(teamLocation)}&minimumradius=0&country=US&key=${apiKey}`)
    .then(res => res.json())
    .then(data => matchCodes(data, filteredTeams))
  }

  const matchCodes = (dataCodes, filteredTeamsZ) => {
    console.log(dataCodes.DataList)
    console.log(filteredTeamsZ)

    let matchedZipCodes = [];
    return dataCodes.DataList.forEach((acc, allZipCode) => {
      filteredTeams.forEach(nameTeams => {
        if (allZipCode.Code(nameTeams.zipcode.toString)) {
          matchedZipCodes.push(nameTeams)
          console.log(matchedZipCodes)
        }
      })
    })
  }

  return (
    <section>
      <Header />
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
