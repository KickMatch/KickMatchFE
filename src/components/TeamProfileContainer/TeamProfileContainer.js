import React from 'react';
import './TeamProfileContainer.css';
// import { teamsMockData } from '../../teamsMockData'
import TeamProfile from '../TeamProfile/TeamProfile';
import { useState, useEffect } from 'react';

const TeamProfileContainer = ({filteredTeams}) => {
  // const [allTeams, setAllTeams] = useState(teamsMockData) // this is where would be the query fort all teams data 
  // const [filteredTeams, setFilteredTeams] = useState([])
  // const [nameSearched, setNameSearched] = useState(teamName)
  // const [locationSearched, setLocationSearched] = useState(teamLocation)

  // useEffect(() => {
  //   findTeams()
  // }, [])

  // const findTeams = () => {
  //   // console.log('allTeams:', allTeams)
  //   // console.log('nameSearched:', nameSearched)
  //   // console.log('distanceSearched:', teamLocation)

  // // const filteredTeams = allTeams.filter(team => team.teamName.includes(teamName))

  // const filteredTeams = allTeams.filter(team => team.teamName === 'F.C. Boulder')
  // console.log('filteredTeams:', filteredTeams)
  // }

  const renderTeamsProfiles = () => {
    console.log('test')
  }

  // console.log(filteredTeams, 'asdfas')
  
  return (
    <section className='TeamProfileContainer'>
      {/* {!filteredTeams ? renderTeamsProfiles() : <h2>Sorry no teams find it !</h2>} */}
      {renderTeamsProfiles()}
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