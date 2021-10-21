import './AthleteSearch.css';
import React from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router';
import { useState } from 'react';
import TeamProfileContainer from '../TeamProfileContainer/TeamProfileContainer';


const AthleteSearch = () => {
  const {id} = useParams();
  const [allTeams, setAllTeams] = useState(teamsMockData);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [teamLocation, setTeamLocation] = useState("");

  const getFormInfo = (event) => {
    // console.log(teamName);
    // console.log(teamLocation);
    event.preventDefault();
    findTeams()
    clearInputs();
  }

  const clearInputs = () => {
    setTeamLocation("");
    setTeamName("");
  }

  const findTeams = () => {
  setFilteredTeams(allTeams.filter(team => team.teamName.includes(teamName)))
  console.log('filteredTeams:', filteredTeams)
  }

  const getuserId = () => {
    // This function will help in order to sne dan object for the post request
    const matchObj = {
      talent_id: parseInt(id),
      sport_club_id: 3
    }
    console.log('Obj to send to create a match:', matchObj)
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
          <TeamProfileContainer filteredTeams={filteredTeams} />
          <button onClick={getuserId}>Interested</button>
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
    openPositions: ['Goalkeeper', 'Left Center', 'Right Foward']
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