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
// import Athlete from '../Athlete/Athlete'


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
          <Route exact path='/athlete/:id' render={() => <Athlete data={user}/> }/>
          <Route exact path='/athlete/:id/search' render={() => <AthleteSearch userData={user}/> } />
          <Route exact path='/athlete/:id/interested-teams' render={() => <AthleteInterestedTeams /> } />
        
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




// import React from 'react';
// import { Link } from 'react-router-dom';
// import soccer from '../../assets/soccer4.png';
// import soccer1 from '../../assets/soccer1.png';
// import soccer2 from '../../assets/soccer2.png';
// import soccer3 from '../../assets/soccer3.png';
// import './Login.css';
// import { LOAD_ALL_TALENT } from '../../GraphQL/Queries';
// import { useQuery, gql } from '@apollo/client';
// import { useState, useEffect } from 'react';
// const Login = ({ getUser }) => {
//   const [allAthletes, setAllAthletes] = useState(null)
//   const {error, loading, data} = useQuery(LOAD_ALL_TALENT);
//   useEffect(() => {
//     setAllAthletes(data)
//       console.log('testing query for athletes:', data)
//     }, [data])
//   const images = [soccer1, soccer2, soccer3, soccer];
//   const teams = [
//     {name: 'Denver FC', id: 1},
//     {name: 'Boulder FC', id: 2},
//     {name: 'Colorado Springs FC', id: 3}
//   ];
  // const athletes = [
  //   {images: images, cagetory: 'athlete', firstName: 'Will', lastName: 'Smith', age: 24, position: 'Forward', id: 1, height: '5\'1', primaryPosition: 1, secondaryPosition: 2, dominantFoot: 'left', zipCode: 80014, weight: 150, goalsMadeLast: 3, fortyYard: 4.5, vertJump: 35, personJugRec: 100, talents: ['string1', 'string2', 'string3'], awards: ['award1', 'award2', 'award3'], bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  //   {images: images, cagetory: 'athlete', firstName: 'Andrey', lastName: 'Johnson', age: 26, position: 'Goalee', id: 2, height: '6\'2', primaryPosition: 5, secondaryPosition: 1, dominantFoot: 'right', zipCode: 80019, weight: 200, goalsMadeLast: 3, fortyYard: 4.5, vertJump: 35, personJugRec: 100, talents: ['string1', 'string2', 'string3'], awards: ['award1', 'award2', 'award3'], bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Sodales neque sodales ut etiam sit amet nisl purus. Congue quisque egestas diam in. Etiam erat velit scelerisque in dictum non consectetur a erat. Fusce id velit ut tortor pretium viverra. Sit amet mattis vulputate enim nulla. Cras ornare arcu dui vivamus arcu felis bibendum. Venenatis urna cursus eget nunc scelerisque. Imperdiet proin fermentum leo vel. Sodales ut eu sem integer. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Tortor at risus viverra adipiscing. Aliquam etiam erat velit scelerisque in dictum non consectetur. Facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum dolor. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Enim nunc faucibus a pellentesque sit amet porttitor eget. Ut faucibus pulvinar elementum integer enim neque. Imperdiet sed euismod nisi porta. Mattis enim ut tellus elementum. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Nullam non nisi est sit amet. Diam quam nulla porttitor massa id neque aliquam. Sed turpis tincidunt id aliquet risus feugiat in. Nam aliquam sem et tortor consequat id porta nibh venenatis. Amet justo donec enim diam vulputate ut pharetra sit amet. Auctor eu augue ut lectus arcu.Congue quisque egestas diam in arcu. Dui faucibus in ornare quam viverra. Malesuada fames ac turpis egestas integer eget aliquet. Elementum nibh tellus molestie nunc non blandit massa enim nec. Arcu cursus vitae congue mauris rhoncus. Non consectetur a erat nam at lectus urna. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Gravida rutrum quisque non tellus orci ac. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Varius duis at consectetur lorem donec massa sapien. Aliquam vestibulum morbi blandit cursus. Faucibus purus in massa tempor nec feugiat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Imperdiet proin fermentum leo vel orci porta. Erat velit scelerisque in dictum non consectetur a erat nam. Orci eu lobortis elementum nibh tellus molestie. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Morbi tristique senectus et netus et malesuada fames ac. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Lectus urna duis convallis convallis tellus id interdum. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Posuere morbi leo urna molestie at elementum eu facilisis. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Etiam non quam lacus suspendisse. Eget mi proin sed libero enim sed faucibus turpis. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Dictumst quisque sagittis purus sit. Enim tortor at auctor urna. Pharetra et ultrices neque ornare aenean euismod elementum. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Sed felis eget velit aliquet sagittis. Porttitor rhoncus dolor purus non enim praesent. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Consequat interdum varius sit amet mattis vulputate. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Nam libero justo laoreet sit amet cursus sit. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Pretium aenean pharetra magna ac placerat vestibulum. Eget nullam non nisi est sit amet facilisis. Malesuada proin libero nunc consequat interdum varius. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Felis bibendum ut tristique et. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Cras adipiscing enim eu turpis egestas pretium aenean pharetra."},
  //   {images: images, cagetory: 'athlete', firstName: 'Steven', lastName: 'Escobar', age: 32, position: 'Striker', id: 3, height: '5\'7', primaryPosition: 4, secondaryPosition: 7, dominantFoot: 'left', zipCode: 80022, weight: 130, goalsMadeLast: 3, fortyYard: 4.5, vertJump: 35, personJugRec: 100, talents: ['string1', 'string2', 'string3'], awards: ['award1', 'award2', 'award3'], bio: 'Viverra vitae congue eu consequat ac felis. In massa tempor nec feugiat nisl pretium fusce id. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Nulla at volutpat diam ut venenatis tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Massa tempor nec feugiat nisl pretium fusce id velit ut. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Odio tempor orci dapibus ultrices. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Elementum tempus egestas sed sed risus. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Neque gravida in fermentum et sollicitudin ac orci phasellus. Massa ultricies mi quis hendrerit dolor magna. Nunc sed augue lacus viverra.'}
  // ];
  // const athleteLoginButtons = athletes.map(athlete => {
  //   return (
  //       <Link to={`/athlete/${athlete.id}`} key={athlete.id}>
  //         <button className='login-buttons' onClick={(e) => getUser(athlete)}>
  //           {`${athlete.firstName} ${athlete.lastName}`}
  //         </button>
  //       </Link>
  //   )
  // });
  // let athleteLoginButtons ;
  // if (allAthletes) {
  //   const athleteArr = allAthletes.allTalent.slice(0, 3)
  //   athleteLoginButtons = athleteArr.map(athlete => {
  //     return (
  //         <Link to={`/athlete/${athlete.id}`} key={athlete.id}>
  //           <button className='login-buttons' onClick={(e) => getUser(athlete)}>
  //             {`${athlete.name}`}
  //           </button>
  //         </Link>
  //     )
  //   });
    // console.log(athleteArr)
    // console.log(allAthletes)
//   }
//   const teamLoginButtons = teams.map(team => {
//     return (
//         <Link to={`/team/${team.id}`} key={team.id}>
//           <button className='login-buttons'>
//             {team.name}
//           </button>
//         </Link>
//     )
//   });
//   return (
//     <section className='login-page'>
//       <h1 className='login-heading'>Kick Match</h1>
//       <section className='login-section'>
//         <div className='login-containers'>
//           <h2 className='login-container-heading'>Athlete Login</h2>
//           {allAthletes && athleteLoginButtons}
//           <Link to='/registration-athlete'>
//             <button className='login-buttons register-buttons'>New Athlete</button>
//           </Link>
//         </div>
//         <div className='login-containers'>
//           <h2 className='login-container-heading'>Team Login</h2>
//           {teamLoginButtons}
//           <Link to='/registration-team'>
//             <button className='login-buttons register-buttons'>New Team</button>
//           </Link>
//         </div>
//       </section>
//     </section>
//   );
// }
// export default Login;