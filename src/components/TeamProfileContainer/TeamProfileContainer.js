import React from 'react';
import './TeamProfileContainer.css';
// import { teamsMockData } from '../../teamsMockData'
import TeamProfile from '../TeamProfile/TeamProfile';
import { useState, useEffect } from 'react';

const TeamProfileContainer = () => {
  const [allTeams, setAllTeams] = useState(teamsMockData) // this is where would be the query fort all teams data 
  const [filteredTeams, setFilteredTeams] = useState([])
  const [nameSearched, setNameSearched] = useState('')
  const [distanceSearched, setDistanceSearched] = useState('')

  useEffect(() => {
    findTeams()
  }, [])

  const findTeams = () => {
    console.log('allTeams:', allTeams)
    console.log('nameSearched:', nameSearched)
    console.log('distanceSearched:', distanceSearched)
  }
  
  return (
    <section className='TeamProfileContainer'>
      <p>Team Profile Container</p>
    </section>
  );
}

export default TeamProfileContainer;



const teamsMockData = [
  {
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