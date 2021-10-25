import React from 'react';
import './TeamProfile.css';

const TeamProfile = ({teamInfo, getId}) => {  

  const getIdTeam = () => {
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
        <p className='team-prof-info'><i>Email:</i> {teamInfo.email}</p>
        <p className='team-prof-info'><i>Phone:</i> {teamInfo.phone}</p>
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
      <button className='match-btn' onClick={getIdTeam}>Interested in Team</button>
      </div>
    </section>
  );
}

export default TeamProfile;