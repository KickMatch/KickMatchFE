import './AthleteSearch.css';
import TeamProfileContainer from '../TeamProfileContainer/TeamProfileContainer';
import React from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_ALL_TALENT } from '../GraphQL/Queries'


const AthleteSearch = ({data}) => {
  const {id} = useParams();
  const [allTeams, setAllTeams] = useState(teamsMockData);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [teamLocation, setTeamLocation] = useState("");
  const [teamId, setTeamId] = useState("");

  const getFormInfo = (event) => {
    event.preventDefault();
    getData();
    findTeams()
    clearInputs();
  }

  const clearInputs = () => {
    setTeamLocation("");
    setTeamName("");
  }

  const findTeams = () => {
  setFilteredTeams(allTeams.filter(team => team.teamName.includes(teamName)))
  // console.log('filteredTeams:', filteredTeams)
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
    const apiKey = 'W9C9POYVGMP5IHH4X8E9'
    const zipcode = '80202'

    fetch(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${zipcode}&maximumradius=${teamLocation}&minimumradius=0&country=US&key=${apiKey}`)
      .then(res => res.json())
      .then(data => console.log('data: ', data))
  }

  return (
    <section>
      <Header />
      <section className='AthleteSearch'>
        <form className='AthleteForm'>
          <h3>Search by:</h3>
          <input
            type='text'
            placeholder='Sport Club Name'
            name='sportClub'
            value={teamName}
            onChange={(event) => setTeamName(event.target.value)}
          />
          <select onChange={(event) => setTeamLocation(event.target.value)}>
            <option value='20'>20 Miles</option>
            <option value='50'>50 Miles</option>
            <option value='100'>100 Miles</option>
            <option value='150'>150 or more</option>
          </select>
          <button className='SearchBtn' onClick={getFormInfo}>Search Teams</button>
        </form>
        <div className='SearchedTeamsContainer'>
          <TeamProfileContainer filteredTeams={filteredTeams} getId={getId}/>
          {/* <button onClick={getuserId}>Interested</button> */}
        </div>
      </section>
    </section>
  );
}

export default AthleteSearch;







const teamsMockData = [
  {
    id: 1,
    teamName: 'F.C. Denver',
    teamLocation: '1730 Blake St - Denver, CO, 80220',
    teamInfo: [{
      email: 'fc.denver@gmail.com',
      phone: '722-223-2365'
    }],
    league: 'US Football League',
    tournaments: 'US Football Tournament',
    couchResume: 'Tim Nord: For more than 20 years as a Football Coach for multiple teams around the country, he is our main couch',
    openPositions: ['Goalkeeper', 'Left Center', 'Right Foward'],
    zipcode: 92145
  },
  {
    id: 2,
    teamName: 'F.C. Boulder',
    teamLocation: '1730 Blake St - Denver, CO, 80220',
    teamInfo: [{
      email: 'fc.denver@gmail.com',
      phone: '722-223-2365'
    }],
    league: 'US Football League',
    tournaments: 'US Football Tournament',
    couchResume: 'Tim Nord: For more than 20 years as a Football Coach for multiple teams around the country, he is our main couch',
    openPositions: ['Goalkeeper', 'Left Center', 'Right Foward']
  },
  {
    id: 3,
    teamName: 'F.C. Forth Collins',
    teamLocation: '1730 Blake St - Denver, CO, 80220',
    teamInfo: [{
      email: 'fc.denver@gmail.com',
      phone: '722-223-2365'
    }],
    league: 'US Football League',
    tournaments: 'US Football Tournament',
    couchResume: 'Tim Nord: For more than 20 years as a Football Coach for multiple teams around the country, he is our main couch',
    openPositions: ['Goalkeeper', 'Left Center', 'Right Foward']
  },
  {
    id: 4,
    teamName: 'F.C. Golden',
    teamLocation: '1730 Blake St - Denver, CO, 80220',
    teamInfo: [{
      email: 'fc.denver@gmail.com',
      phone: '722-223-2365'
    }],
    league: 'US Football League',
    tournaments: 'US Football Tournament',
    couchResume: 'Tim Nord: For more than 20 years as a Football Coach for multiple teams around the country, he is our main couch',
    openPositions: ['Goalkeeper', 'Left Center', 'Right Foward']
  },
  {
    id: 5,
    teamName: 'F.C. Greenwood',
    teamLocation: '1730 Blake St - Denver, CO, 80220',
    teamInfo: [{
      email: 'fc.denver@gmail.com',
      phone: '722-223-2365'
    }],
    league: 'US Football League',
    tournaments: 'US Football Tournament',
    couchResume: 'Tim Nord: For more than 20 years as a Football Coach for multiple teams around the country, he is our main couch',
    openPositions: ['Goalkeeper', 'Left Center', 'Right Foward']
  }
]