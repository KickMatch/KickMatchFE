import React from 'react';
import './TeamProfile.css';

const TeamProfile = ({teamInfo}) => {  
  return (
    <section className='teamProfile'>
      <div className='teamContactInfo'>
        <p>IMG</p>
        <p><b>Team Name:</b></p>
        <p>{teamInfo.teamName}</p>
        <p><b>Location:</b></p>
        <p>{teamInfo.teamLocation}</p>
        <p><b>Contact Info:</b></p>
        <p><i>Email:</i> fc.denver@gmail.com</p>
        <p><i>Phone:</i> 722-223-2365</p>
      </div>
      <div className='teamSportingInfo'>
        <p><b>League:</b></p>
          <p><i>{teamInfo.league}</i></p>
        <p><b>Tournaments:</b></p>
          <p><i>{teamInfo.tournaments}</i></p>
        <p><b>Couch Resume:</b></p>
          <p>{teamInfo.couchResume}</p>
        <p><b>Currently Looking:</b></p>
          <p><i>{teamInfo.openPositions[0]}</i></p>
          <p><i>{teamInfo.openPositions[1]}</i></p>
          <p><i>{teamInfo.openPositions[2]}</i></p>
      </div>
    </section>
  );
}

export default TeamProfile;