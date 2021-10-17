import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Athlete from '../Athlete/Athlete';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Login from '../Login/Login';
import RegistrationAthlete from '../RegistrationAthlete/RegistrationAthlete';
import RegistrationTeam from '../RegistrationTeam/RegistrationTeam';
import Team from '../Team/Team';

const App = () => {

  return (
    <main>
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
        <Route exact path='/athlete' 
          render={() => 
            <Athlete />
          }
        />
        <Route exact path='/team' 
          render={() => 
            <Team />
          }
        />
      </Switch>     
    </main>
  );
}

export default App;
