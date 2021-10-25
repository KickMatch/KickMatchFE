import './AthleteSearch.css';
import TeamProfileContainer from '../TeamProfileContainer/TeamProfileContainer';
import React from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_ALL_TALENT, LOAD_ALL_CLUBS } from '../../GraphQL/Queries';
import { CREATE_MATCH } from '../../GraphQL/Mutations';
import { useMutation } from '@apollo/client';


const AthleteSearch = ({userData}) => {
  const {id} = useParams();
  const [allTeams, setAllTeams] = useState({});
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [teamLocation, setTeamLocation] = useState("");
  const [teamId, setTeamId] = useState("");
  const [queryTest, setQueryTest] = useState("");
  const [searchStatus, setSearchStatus] = useState(true);
  const [userZipCode, setUserZipCode] = useState(userData);
  const [zipCodeRadius, setZipCodeRadius] = useState({})

  // MUTATION Function
  // const [createMatch, {error}] = useMutation(CREATE_MATCH);

  // const addMatch = () => {
  //   createMatch({
  //     variables: {
  //       talent_id: id,
  //       sport_club_id: teamId
  //     }
  //   })
  //   if (error) {
  //     console.log(error)
  //   }
  // }
  
  // const {error, loading, data} = useQuery(LOAD_ALL_TALENT); 
  // useEffect(() => {
    //   console.log('testing query for athletes:', data)
    // }, [data])
    
    const {error, loading, data} = useQuery(LOAD_ALL_CLUBS);
    useEffect(() => {
      setAllTeams(data)
      // console.log('allTeams:', allTeams)
    }, [data])
    
    
    const getFormInfo = (event) => {
      event.preventDefault();
      setSearchStatus(false)
      getData(); // Function to have a location radius
      findTeams(); // Function to filter teams based on the user text filter
      clearInputs();
    }
    
    const clearInputs = () => {
      setTeamLocation("");
      setTeamName("");
    }
    
    const findTeams = () => {
      
      const teams = allTeams.allClubs;
      setFilteredTeams(teams.filter(team => team.name.includes(teamName) || teamName === 'All'))
      // console.log('teams:', teams)
      // console.log('teamName:', teamName)
      // console.log('filteredTeams:',filteredTeams)
    }
    
    const getId = (choseTeamId) => {
      // This function will help in order to sne dan object for the post request
      setTeamId(choseTeamId)
      const matchObj = {
        talent_id: parseInt(id),
        sport_club_id: choseTeamId
      }
      console.log('Obj to send to create a match:', matchObj)
    }
    
    const getData = () => {
    // console.log('userZipCode:', userZipCode.zipCode)
    const apiKey = 'W9C9POYVGMP5IHH4X8E9'
    // const zipcode = '80202'

    fetch(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${userZipCode.zipCode}&maximumradius=${teamLocation}&minimumradius=0&country=US&key=${apiKey}`)
      .then(res => res.json())
      .then(data => setZipCodeRadius)
      .then(console.log(zipCodeRadius))
      // .then(data => console.log('ZipCodeData: ', data));
  }

  return (
    <section>
      <Header />
      <section className='AthleteSearch'>
        <form className='AthleteForm'>
          <h3 className="search-text">Search by:</h3>
          <input
            className= 'team-name-search'
            type='text'
            placeholder='Sport Club Name'
            name='sportClub'
            value={teamName}
            onChange={(event) => setTeamName(event.target.value)}
          />
          <select className="select-radius-location" onChange={(event) => setTeamLocation(event.target.value)}>
            <option value='20'>20 Miles</option>
            <option value='50'>50 Miles</option>
            <option value='100'>100 Miles</option>
            <option value='150'>150 or more</option>
          </select>
          <button className='SearchBtn' onClick={getFormInfo}>Search Teams</button>
        </form>
          {searchStatus ? 
          <div className='no-search-founded'>
            <h2 className="search-invitation-text">Search and discover your next Team ⚽️⚽️⚽️</h2>
            </div> :
            <div className='SearchedTeamsContainer'>
          {filteredTeams ? <TeamProfileContainer filteredTeams={filteredTeams} getId={getId}/> : 
          <h2 className="no-match-text">Sorry there is no available teams with those specs, please try again!</h2>
          }
          </div>}
      </section>
    </section>
  );
}

export default AthleteSearch;
