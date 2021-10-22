import React from 'react';
import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Athlete from '../Athlete/Athlete';
import Error from '../Error/Error';
// import Loading from '../Loading/Loading';
import Login from '../Login/Login';
import RegistrationAthlete from '../RegistrationAthlete/RegistrationAthlete';
import RegistrationTeam from '../RegistrationTeam/RegistrationTeam';
// import Team from '../Team/Team';
import TeamInterestedAthletes from '../TeamInterestedAthletes/TeamInterestedAthletes';
import TeamProfile from '../TeamProfile/TeamProfile';
import TeamSearch from '../TeamSearch/TeamSearch';
import AthleteSearch from '../AthleteSearch/AthleteSearch';
import AthleteInterestedTeams from '../AthleteInterestedTeams/AthleteInterestedTeams';
import AthleteProfile from '../AthleteProfile/AthleteProfile';
// import AthleteStatContainer from '../AthleteStatContainer/AthleteStatContainer';
import EditPlayerProfile from '../AthleteStatContainer/EditPlayerProfile/EditPlayerProfile';

const App = () => {
  const [user, setUser] = useState({})

  const getUser = (user) => {
    setUser(user)
  }


  return (
    
      <>
        {/* <PrintQuery /> */}
        <Switch>
          <Route exact path='/' 
            render={() => <Login getUser={getUser} />}
          />
          <Route exact path='/registration-athlete' 
            component={RegistrationAthlete}
          />
          <Route exact path='/registration-team' 
            component={RegistrationTeam}
          />
          <Route exact path='/athlete/:id' render={() => <AthleteProfile data={user}/> }/>
          <Route exact path='/athlete/:id/search' render={() => <AthleteSearch /> } />
          <Route exact path='/athlete/:id/interested-teams' render={() => <AthleteInterestedTeams /> } />
          <Route exact path='/athlete/:id/editprofile' component={EditPlayerProfile}/>
          
          {/* <Route exact path='/team' render={() => <Team />} /> */}
            <Route exact path='/team/:id/profile' render={() => <TeamProfile /> } />
            <Route exact path='/team/:id/search' render={() => <TeamSearch /> } />
            <Route exact path='/team/:id/interested-athletes' render={() => <TeamInterestedAthletes /> } />
          <Route component={Error} />
        </Switch>     
      </>
  );
}

export default App;
