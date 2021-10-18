import React from 'react';
import './Athlete.css';
import AthleteInterestedTeams from '../AthleteInterestedTeams/AthleteInterestedTeams';
import AthleteProfile from '../AthleteProfile/AthleteProfile';
import AthleteSearch from '../AthleteSearch/AthleteSearch';
import Header from '../Header/Header';

const Athlete = () => {

  
  return (
    <section>
      <Header />
      <AthleteProfile />
    </section>
  );
}

export default Athlete;