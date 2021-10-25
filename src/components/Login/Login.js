import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = ({ setId }) => {

  const teams = [
    {name: 'Denver FC', id: 1},
    {name: 'Boulder FC', id: 2},
    {name: 'Colorado Springs FC', id: 3}
  ];
  
  const athletes = [
    {name: 'Jo', id: 1},
    {name: 'Dee', id: 2},
    {name: 'T\'variusness King', id: 3},
  ];

  const athleteLoginButtons = athletes.map(athlete => {
    return (
      <Link to={`/athlete/${athlete.id}`} key={athlete.id}>
        <button className='login-buttons' onClick={(e) => setId(athlete.id)}>
          {`${athlete.name}`}
        </button>
      </Link>
    )
  });

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
    <section className='login-page'>
      <h1 className='login-heading'>Kick Match</h1>
      <section className='login-section'>
        <div className='login-containers'>
          <h2 className='login-container-heading'>Athlete Login</h2>
          {athleteLoginButtons}
          <Link to='/registration-athlete'>
            <button className='login-buttons register-buttons'>New Athlete</button>
          </Link>
        </div>
        <div className='login-containers'>
          <h2 className='login-container-heading'>Team Login</h2>
          {teamLoginButtons}
          <Link to='/registration-team'>
            <button className='login-buttons register-buttons'>New Team</button>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Login;