import React from 'react';
import './Athlete.css';
import AthleteInterestedTeams from '../AthleteInterestedTeams/AthleteInterestedTeams';
import AthleteProfile from '../AthleteProfile/AthleteProfile';
import AthleteSearch from '../AthleteSearch/AthleteSearch';
import Header from '../Header/Header';

const Athlete = ({props}) => {

  // const test = 'athlete'
  // console.log(props.props.match.path, ' prop');
  return (
    <section>
      <Header site={props.props.match.path}/>
      <AthleteProfile />
    </section>
  );
}

export default Athlete;