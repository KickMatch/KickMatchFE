import React from 'react';
import './TeamProfile.css';
import { useState } from 'react';

const TeamProfile = ({teamInfo, getId}) => {  

  const [matchBtn, setMatchBtn] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const getIdTeam = () => {
    setIsDisabled(true);
    setMatchBtn(true);
    getId(teamInfo.id)
  }

  return (
    <section className='teamProfile'>
      <div className='teamContactInfo'>
        <img className='team-prof-logo' src='https://upload.wikimedia.org/wikipedia/commons/4/4f/United_States_women%27s_national_soccer_team_logo.svg'></img>
        <p className='team-prof-title'><b>Team Name:</b></p>
          <p className='team-prof-info'>{teamInfo.name}</p>
        <p className='team-prof-title'><b>Location:</b></p>
          <p className='team-prof-info'>{teamInfo.location}</p>
        <p className='team-prof-title'><b>Contact Info:</b></p>
          <p className='team-prof-info-email'>{teamInfo.email}</p>
          <p className='team-prof-info'>{teamInfo.phone}</p>
          <p className='team-prof-info'>{teamInfo.zipcode}</p>
      </div>
      <div className='teamSportingInfo'>
        <p className='team-prof-title'><b>League:</b></p>
          <p className='team-prof-info'><i>{teamInfo.league}</i></p>
        <p className='team-prof-title'><b>Tournaments:</b></p>
          <p className='team-prof-info'><i>{teamInfo.tournaments}</i></p>
        <p className='team-prof-title'><b>Couch Resume:</b></p>
          <p className='team-prof-info'>{teamInfo.coachResume}</p>
        <p className='team-prof-title'><b>Currently Looking:</b></p>
          <p className='team-prof-info'><i>{teamInfo.currentlyLooking}</i></p>
      <button className='match-btn' disabled={isDisabled} onClick={getIdTeam}>{!matchBtn ? <p className="match-btn">I am interested</p> : <p className="match-btn">Saved Team!</p>}</button>
      </div>
    </section>
  );
}

export default TeamProfile;