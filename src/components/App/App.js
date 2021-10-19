import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Athlete from '../Athlete/Athlete';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Login from '../Login/Login';
import RegistrationAthlete from '../RegistrationAthlete/RegistrationAthlete';
import RegistrationTeam from '../RegistrationTeam/RegistrationTeam';
import Team from '../Team/Team';
import TeamInterestedAthletes from '../TeamInterestedAthletes/TeamInterestedAthletes';
import TeamProfile from '../TeamProfile/TeamProfile';
import TeamSearch from '../TeamSearch/TeamSearch';
import AthleteSearch from '../AthleteSearch/AthleteSearch';
import AthleteInterestedTeams from '../AthleteInterestedTeams/AthleteInterestedTeams';
import AthleteProfile from '../AthleteProfile/AthleteProfile';
import { useQuery } from '@apollo/client';
import { LOAD_ALL_TALENT } from '../../GraphQL/Queries';

// const errorLink = onError(( {graphqlErrors, networkErrors }) => {
//   if(graphqlErrors) {
//     graphqlErrors.map(({message, location, path}) => {
//       alert(`GraphQL Error: ${message}`)
//     })
//   }
// })

// const link = from([
//   new HttpLink({uri: "https://frozen-waters-94259.herokuapp.com/"})
// ])



const App = () => {
  // const [id, setId] = useState({})
  // i want it to read the state that i have now and supply the athlete/#id(profile) page with thier info

  // console.log(match.path, ' :match.path');


  const PrintQuery = () => {
    const {error, loading, data} = useQuery(LOAD_ALL_TALENT)
  }

  return (
    
      <main>
        <PrintQuery />
        <Switch>
          <Route exact path='/' 
            component={Login}
          />
          <Route exact path='/registration-athlete' 
            component={RegistrationAthlete}
          />
          <Route exact path='/registration-team' 
            component={RegistrationTeam}
          />
          <Route exact path='/athlete/:id' render={() => <AthleteProfile /> } />
          <Route exact path='/athlete/:id/search' render={() => <AthleteSearch /> } />
          <Route exact path='/athlete/:id/interested-teams' render={() => <AthleteInterestedTeams /> } />
        
          {/* <Route exact path='/team' render={() => <Team />} /> */}
            <Route exact path='/team/:id/profile' render={() => <TeamProfile /> } />
            <Route exact path='/team/:id/search' render={() => <TeamSearch /> } />
            <Route exact path='/team/:id/interested-athletes' render={() => <TeamInterestedAthletes /> } />
          <Route component={Error} />
        </Switch>     
      </main>
  );
}

export default App;
