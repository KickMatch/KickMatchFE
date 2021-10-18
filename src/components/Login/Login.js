import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

  const athletes = [
    {cagetory: 'athlete', name: 'Will', age: 24, position: 'Forward', id: 1},
    {cagetory: 'athlete', name: 'Andrey', age: 26, position: 'Goalee', id: 2},
    {cagetory: 'athlete', name: 'Steven', age: 32, position: 'Striker', id: 3}
  ]

  const teams = [
    {name: 'Denver FC', id: 1},
    {name: 'Boulder FC', id: 2},
    {name: 'Colorado Springs FC', id: 3}
  ]

  
  return (
    <section>
      <ul>
      {
        athletes.map((athlete) => {
          return (<li key={athlete.id}>
            <Link to={`/athlete/${athlete.id}`}>
              {athlete.name}
            </Link>
          </li>)
        })
      }
      {
        teams.map((team) => {
          return (<li key={team.id}>
            <Link to={`/team/${team.id}`}>
              {team.name}
            </Link>
          </li>)
        })
      }
      </ul>
    </section>
  );
}

export default Login;