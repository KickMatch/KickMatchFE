import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = ({ getUser }) => {

  const teams = [
    {name: 'Denver FC', id: 1},
    {name: 'Boulder FC', id: 2},
    {name: 'Colorado Springs FC', id: 3}
  ]
  
  const athletes = [
    {cagetory: 'athlete', firstName: 'Will', lastName: 'Smith', age: 24, position: 'Forward', id: 1, height: '5\'1', primaryPosition: 1, secondaryPosition: 2, dominantFoot: 'left', zipCode: 80014, weight: 150, goalsMadeLast: 3, fortyYard: 4.5, vertJump: 35, personJugRec: 100, talents: ['string1', 'string2', 'string3'], awards: ['award1', 'award2', 'award3']},
    {cagetory: 'athlete', firstName: 'Andrey', lastName: 'Johnson', age: 26, position: 'Goalee', id: 2, height: '6\'2', primaryPosition: 5, secondaryPosition: 1, dominantFoot: 'right', zipCode: 80019, weight: 200, goalsMadeLast: 3, fortyYard: 4.5, vertJump: 35, personJugRec: 100, talents: ['string1', 'string2', 'string3'], awards: ['award1', 'award2', 'award3']},
    {cagetory: 'athlete', firstName: 'Steven', lastName: 'Escobar', age: 32, position: 'Striker', id: 3, height: '5\'7', primaryPosition: 4, secondaryPosition: 7, dominantFoot: 'left', zipCode: 80022, weight: 130, goalsMadeLast: 3, fortyYard: 4.5, vertJump: 35, personJugRec: 100, talents: ['string1', 'string2', 'string3'], awards: ['award1', 'award2', 'award3']}
  ]
  
  return (
    <section>
      <ul>
      {
        athletes.map(athlete => {
          return (
            <li onClick={(e) =>getUser(athlete)} key={athlete.id}>
              <Link to={`/athlete/${athlete.id}`}>
                {`${athlete.firstName} ${athlete.lastName}`}
              </Link>
            </li>
          )
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