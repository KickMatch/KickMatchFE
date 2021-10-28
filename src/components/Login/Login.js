import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { LOAD_ALL_TALENT } from '../../GraphQL/Queries';
import Loading from '../Loading/Loading';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

const Login = ({ getUser, submitted }) => {
  const [allAthletes, setAllAthletes] = useState(null);
  const { data, loading } = useQuery(LOAD_ALL_TALENT); 

  useEffect(() => {
    if (!loading && data) {
      setAllAthletes(data)
    }
  }, [data, submitted])

  const teams = [
    {name: 'Denver FC', id: 1},
    {name: 'Boulder FC', id: 2},
    {name: 'Colorado Springs FC', id: 3}
  ];
  
  let athleteLoginButtons;

  if (allAthletes) {
    const athleteArr = allAthletes.allTalent
    
    athleteLoginButtons = athleteArr.map(athlete => {
      return (
        <Link to={`/athlete/${athlete.id}`} key={athlete.id}>
          <button className='login-buttons' id={athlete.name}onClick={(e) => getUser(athlete)}>
            {athlete.name}
          </button>
        </Link>
      )
    });
  }

  const teamLoginButtons = teams.map(team => {
    return (
      <Link to={`/team/${team.id}`} key={team.id}>
        <button className='login-buttons'>
          {team.name}
        </button>
      </Link>
    )
  });
  
  return (
    <>
    {loading ? <Loading /> : 
      <section className='login-page'>
        <h1 className='login-heading'>Kick Match</h1>
        <section className='login-section'>
          <div className='login-containers'>
            <h2 className='login-container-heading'>Athlete Login</h2>
            {athleteLoginButtons}
            <Link to='/registration-athlete'>
              <button className='login-buttons register-buttons' id='new-athlete'>New Athlete</button>
            </Link>
          </div>
          <div className='login-containers'>
            <h2 className='login-container-heading'>Team Login</h2>
            {teamLoginButtons}
            <Link to='/registration-team'>
              <button className='login-buttons register-buttons' id='new-team'>New Team</button>
            </Link>
          </div>
        </section>
      </section>
    }
    </>
  );
}

export default Login;